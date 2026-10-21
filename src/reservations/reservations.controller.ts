import { BadRequestException, ConflictException, Controller, Get, Post, Body, Param, ParseUUIDPipe, Query, UseGuards, ForbiddenException } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';

import { z } from 'zod';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { SettlementService } from './settlement.service';

const createSchema = z.object({ trainerId: z.uuid().optional(), startsAt: z.iso.datetime(), endsAt: z.iso.datetime(), participantIds: z.array(z.uuid()).min(1).max(12), paymentMethod: z.enum(['FREE_TRAINING','CASH','CARD','BANK_TRANSFER']).default('CASH'), priceCents: z.number().int().min(0).optional(), capacity: z.number().int().min(1).max(12).default(1) });
const cancellationSchema = z.object({ reason: z.string().trim().max(500).optional() });

@Controller('reservations')
@UseGuards(AuthGuard, RolesGuard)
export class ReservationsController {
  constructor(private readonly prisma: PrismaService, private readonly settlement: SettlementService) {}

  @Get('options')
  @Roles('OWNER', 'ADMIN')
  async options(@CurrentUser() user: AuthenticatedUser) {
    if (user.role !== 'OWNER' && user.role !== 'ADMIN') throw new ForbiddenException('Only club administrators can load reservation options.');
    const [clients, trainers, settings] = await Promise.all([
      this.prisma.profile.findMany({ where: { role: 'CLIENT' }, select: { id: true, fullName: true, email: true, clientHourlyRateCents: true, membership: { select: { status: true, validUntil: true } }, credit: { select: { balanceMinutes: true, reservedMinutes: true } } }, orderBy: { fullName: 'asc' }, take: 500 }),
      this.prisma.profile.findMany({ where: { role: 'TRAINER' }, select: { id: true, fullName: true, trainerRateCents: true }, orderBy: { fullName: 'asc' } }),

      this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
    ]);
    const effectiveSettings = settings ?? { id: 1, defaultHourlyRateCents: 60000, defaultTrainerRateCents: 20000 };
    return {
      clients: clients.map((client) => ({ ...client, effectiveClientHourlyRateCents: client.clientHourlyRateCents ?? effectiveSettings.defaultHourlyRateCents })),
      trainers: trainers.map((trainer) => ({ ...trainer, effectiveTrainerRateCents: trainer.trainerRateCents ?? effectiveSettings.defaultTrainerRateCents })),
      settings: effectiveSettings,
    };
  }

  @Get('cancellation-requests')
  @Roles('OWNER', 'ADMIN')
  listCancellationRequests() {
    return this.prisma.cancellationRequest.findMany({
      where: { status: 'PENDING' },
      include: {
        requester: { select: { id: true, fullName: true, email: true } },
        reservation: { include: { trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } },
      },
      orderBy: { createdAt: 'asc' },
      take: 200,
    });
  }

  @Get()
  @Roles('OWNER','ADMIN','TRAINER','CLIENT')
  list(@CurrentUser() user: AuthenticatedUser, @Query('from') from?: string, @Query('to') to?: string) {
    const where: Prisma.ReservationWhereInput = {
      ...(user.role === 'CLIENT' ? { participants: { some: { profileId: user.id } } } : user.role === 'TRAINER' ? { trainerId: user.id } : {}),
      ...(from || to ? { startsAt: { ...(from ? { gte: new Date(from) } : {}), ...(to ? { lt: new Date(to) } : {}) } } : {}),
    };
    return this.prisma.reservation.findMany({ where, include: { trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } }, orderBy: { startsAt: 'asc' }, take: 200 });
  }

  @Get(':id')
  @Roles('OWNER', 'ADMIN', 'TRAINER', 'CLIENT')
  async get(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: { trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } });
    if (!reservation) throw new BadRequestException('Reservation not found.');
    const allowed = user.role === 'OWNER' || user.role === 'ADMIN' || (user.role === 'TRAINER' ? reservation.trainerId === user.id : reservation.participants.some((participant) => participant.profile.id === user.id));
    if (!allowed) throw new BadRequestException('You cannot view this reservation.');
    return reservation;
  }

  @Post()
  @Roles('OWNER','ADMIN')
  async create(@Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    if (user.role !== 'OWNER' && user.role !== 'ADMIN') throw new ForbiddenException('Only club administrators can create reservations.');
    const parsed = createSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
    const data = parsed.data;
    const startsAt = new Date(data.startsAt), endsAt = new Date(data.endsAt);
    if (!Number.isFinite(startsAt.getTime()) || !Number.isFinite(endsAt.getTime()) || startsAt <= new Date() || endsAt <= startsAt) throw new BadRequestException('Reservation must have valid future start and end times.');
    const duration = Math.ceil((endsAt.getTime() - startsAt.getTime()) / 60_000);
    try {
      return await this.prisma.$transaction(async (tx) => {

      const participantIds = [...new Set(data.participantIds)];
      if (participantIds.length !== data.participantIds.length) throw new BadRequestException('Each client can only be added once to a reservation.');
      const participants = await tx.profile.findMany({ where: { id: { in: participantIds }, role: 'CLIENT' }, select: { id: true } });
      if (participants.length !== participantIds.length || participants.length > data.capacity) throw new BadRequestException('Selected clients are invalid or exceed the reservation capacity.');
      if (data.trainerId) {
        const trainer = await tx.profile.findFirst({ where: { id: data.trainerId, role: 'TRAINER' }, select: { id: true } });
        if (!trainer) throw new BadRequestException('Selected trainer was not found.');
      }

      const settings = await tx.clubSettings.findUnique({ where: { id: 1 } });
      const billedHourlyRate = participants[0]?.id
        ? (await tx.profile.findUnique({ where: { id: participants[0].id }, select: { clientHourlyRateCents: true } }))?.clientHourlyRateCents ?? settings?.defaultHourlyRateCents ?? 0
        : settings?.defaultHourlyRateCents ?? 0;
      const calculatedPriceCents = data.paymentMethod === 'CASH'
        ? Math.round(billedHourlyRate * duration / 60)
        : data.priceCents ?? 0;
      if (data.paymentMethod === 'FREE_TRAINING') {
        for (const participant of participants) {
          const credit = await tx.trainingCredit.findUnique({ where: { profileId: participant.id } });
          if (!credit || credit.balanceMinutes - credit.reservedMinutes < duration) throw new BadRequestException('Client has insufficient available training credit.');
          const hold = await tx.trainingCredit.updateMany({ where: { profileId: participant.id, balanceMinutes: { gte: duration }, reservedMinutes: { lte: credit.balanceMinutes - duration } }, data: { reservedMinutes: { increment: duration } } });
          if (hold.count !== 1) throw new ConflictException('Training credit changed while this reservation was being created.');
        }
      }
      return tx.reservation.create({ data: { trainerId: data.trainerId, startsAt, endsAt, paymentMethod: data.paymentMethod, priceCents: calculatedPriceCents, capacity: data.capacity, createdBy: user.id, participants: { create: participants.map(({ id }) => ({ profileId: id, priceCents: calculatedPriceCents, creditUsed: data.paymentMethod === 'FREE_TRAINING', creditMinutes: data.paymentMethod === 'FREE_TRAINING' ? duration : 0 })) } }, include: { trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } });
      }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2034') {
        throw new ConflictException('Another reservation changed at the same time. Please retry.');
      }
      throw error;
    }
  }

  @Post(':id/cancellation-requests')
  @Roles('CLIENT', 'TRAINER')
  async requestCancellation(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const parsed = cancellationSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
    const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: { participants: { select: { profileId: true } } } });
    if (!reservation || reservation.status !== 'RESERVED') throw new BadRequestException('Active reservation not found.');
    const allowed = user.role === 'TRAINER' ? reservation.trainerId === user.id : reservation.participants.some((participant) => participant.profileId === user.id);
    if (!allowed) throw new BadRequestException('You cannot request cancellation for this reservation.');
    const pending = await this.prisma.cancellationRequest.findFirst({ where: { reservationId: id, requesterId: user.id, status: 'PENDING' } });
    if (pending) return pending;
    return this.prisma.cancellationRequest.create({ data: { reservationId: id, requesterId: user.id, reason: parsed.data.reason }, include: { reservation: { include: { trainer: { select: { id: true, fullName: true } } } } } });
  }

  @Post(':id/cancel')
  @Roles('OWNER', 'ADMIN')
  async cancel(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.findUnique({ where: { id }, include: { participants: true } });
      if (!reservation) throw new BadRequestException('Reservation not found.');
      if (reservation.status !== 'RESERVED') throw new BadRequestException('Reservation is not active.');
      for (const participant of reservation.participants.filter((item) => item.creditUsed && item.creditMinutes > 0)) {
        await tx.trainingCredit.updateMany({ where: { profileId: participant.profileId, reservedMinutes: { gte: participant.creditMinutes } }, data: { reservedMinutes: { decrement: participant.creditMinutes } } });
      }
      await tx.cancellationRequest.updateMany({ where: { reservationId: id, status: 'PENDING' }, data: { status: 'APPROVED', reviewedBy: user.id, reviewedAt: new Date() } });
      return tx.reservation.update({ where: { id }, data: { status: 'CANCELLED', cancelledAt: new Date(), cancelledBy: user.id }, include: { trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
  }


  @Post(':id/complete')
  @Roles('OWNER','ADMIN','TRAINER')
  async complete(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    const reservation = await this.prisma.reservation.findUnique({ where: { id } });
    if (user.role === 'TRAINER' && reservation?.trainerId !== user.id) throw new BadRequestException('You can only complete your own training session.');
    if (!reservation) throw new BadRequestException('Reservation not found.');
    if (reservation.endsAt > new Date()) throw new BadRequestException('Training is not over yet.');
    return this.settlement.settle(id);
  }
}
