import { BadRequestException, Body, ConflictException, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import type { ReservationStatus } from '../generated/prisma/client';
import { z } from 'zod';

import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import type { PrismaService } from '../prisma/prisma.service';
import type { SettlementService } from './settlement.service';

const createReservationSchema = z.object({
  courtId: z.uuid(), trainerId: z.uuid().optional(), startsAt: z.iso.datetime(), endsAt: z.iso.datetime(),
  participantIds: z.array(z.uuid()).min(1).max(12), paymentMethod: z.enum(['FREE_TRAINING', 'CASH', 'CARD', 'BANK_TRANSFER']).default('CASH'),
  priceCents: z.number().int().min(0).default(0), capacity: z.number().int().min(1).max(12).default(1), notes: z.string().max(1000).optional(),
});
const requestCancellationSchema = z.object({ reason: z.string().trim().max(1000).optional() });
const reviewSchema = z.object({ decision: z.enum(['APPROVED', 'REJECTED']), note: z.string().trim().max(1000).optional() });

@Controller('reservations')
@UseGuards(AuthGuard, RolesGuard)
export class ReservationsController {
  constructor(private readonly prisma: PrismaService, private readonly settlement: SettlementService) {}

  @Get('cancellation-requests/pending')
  @Roles('OWNER', 'ADMIN')
  listCancellationRequests() {
    return this.prisma.cancellationRequest.findMany({ where: { status: 'PENDING' }, include: { requester: { select: { id: true, fullName: true, email: true } }, reservation: { include: { court: true, trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } } }, orderBy: { createdAt: 'asc' } });
  }

  @Get()
  async list(@CurrentUser() user: AuthenticatedUser, @Query('from') from?: string, @Query('to') to?: string, @Query('status') status?: string) {
    const where: Prisma.ReservationWhereInput = {};
    if (from || to) where.startsAt = { ...(from ? { gte: this.validDate(from) } : {}), ...(to ? { lte: this.validDate(to) } : {}) };
    if (status) {
      if (!['RESERVED', 'CANCELLED', 'COMPLETED'].includes(status)) throw new BadRequestException('status must be RESERVED, CANCELLED, or COMPLETED.');
      where.status = status as ReservationStatus;
    }
    if (user.role === 'CLIENT') where.participants = { some: { profileId: user.id } };
    if (user.role === 'TRAINER') where.trainerId = user.id;
    return this.prisma.reservation.findMany({ where, include: this.reservationInclude, orderBy: { startsAt: 'asc' }, take: 200 });
  }

  @Get(':id')
  async get(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: this.reservationInclude });
    if (!reservation) throw new NotFoundException('Reservation not found.');
    this.assertCanView(reservation, user);
    return reservation;
  }

  @Post()
  @Roles('OWNER', 'ADMIN')
  async create(@Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const input = createReservationSchema.safeParse(body);
    if (!input.success) throw new BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
    const data = input.data;
    if (new Set(data.participantIds).size !== data.participantIds.length) throw new BadRequestException('participantIds must not contain duplicates.');
    const startsAt = new Date(data.startsAt);
    const endsAt = new Date(data.endsAt);
    if (endsAt <= startsAt) throw new BadRequestException('endsAt must be later than startsAt.');
    if (startsAt <= new Date()) throw new BadRequestException('Reservations must start in the future.');
    const durationMinutes = Math.ceil((endsAt.getTime() - startsAt.getTime()) / 60_000);

    return this.prisma.$transaction(async (tx) => {
      const court = await tx.court.findFirst({ where: { id: data.courtId, active: true } });
      if (!court) throw new NotFoundException('Active court not found.');
      const participants = await tx.profile.findMany({ where: { id: { in: data.participantIds }, role: 'CLIENT' }, select: { id: true } });
      if (participants.length !== data.participantIds.length) throw new BadRequestException('Every participant must have a client profile.');
      if (participants.length > data.capacity) throw new BadRequestException('Participant count exceeds reservation capacity.');
      if (data.paymentMethod === 'FREE_TRAINING') {
        const credits = await tx.trainingCredit.findMany({ where: { profileId: { in: data.participantIds } }, select: { profileId: true, balanceMinutes: true, reservedMinutes: true } });
        const balanceByProfile = new Map(credits.map((credit) => [credit.profileId, credit]));
        for (const profileId of data.participantIds) {
          const credit = balanceByProfile.get(profileId);
          const hold = await tx.trainingCredit.updateMany({ where: { profileId, balanceMinutes: { gte: durationMinutes }, reservedMinutes: { lte: (credit?.balanceMinutes ?? 0) - (credit?.reservedMinutes ?? 0) - durationMinutes } }, data: { reservedMinutes: { increment: durationMinutes } } });
          if (!hold.count) throw new BadRequestException('Every participant must have enough unreserved training hours for this reservation.');
        }
      }
      if (data.trainerId) {
        const trainer = await tx.profile.findFirst({ where: { id: data.trainerId, role: 'TRAINER' }, select: { id: true } });
        if (!trainer) throw new BadRequestException('trainerId must belong to a trainer profile.');
      }
      const conflict = await tx.reservation.findFirst({ where: { status: 'RESERVED', startsAt: { lt: endsAt }, endsAt: { gt: startsAt }, OR: [{ courtId: data.courtId }, ...(data.trainerId ? [{ trainerId: data.trainerId }] : [])] }, select: { id: true } });
      if (conflict) throw new ConflictException('The court or trainer already has a reservation in this time range.');
      return tx.reservation.create({ data: { courtId: data.courtId, trainerId: data.trainerId, startsAt, endsAt, paymentMethod: data.paymentMethod, priceCents: data.priceCents, capacity: data.capacity, notes: data.notes, createdBy: user.id, participants: { create: participants.map(({ id }) => ({ profileId: id, priceCents: data.priceCents, creditUsed: data.paymentMethod === 'FREE_TRAINING', creditMinutes: data.paymentMethod === 'FREE_TRAINING' ? durationMinutes : 0 })) } }, include: this.reservationInclude });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
  }

  @Post(':id/complete')
  @Roles('OWNER', 'ADMIN', 'TRAINER')
  async complete(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    const reservation = await this.prisma.reservation.findUnique({ where: { id }, select: { id: true, trainerId: true, endsAt: true, status: true } });
    if (!reservation) throw new NotFoundException('Reservation not found.');
    if (user.role === 'TRAINER' && reservation.trainerId !== user.id) throw new ForbiddenException();
    if (reservation.status === 'CANCELLED') throw new ConflictException('Cancelled reservations cannot be completed.');
    if (reservation.endsAt > new Date()) throw new BadRequestException('A training can only be completed after its scheduled end time.');
    return this.settlement.settleReservation(id);
  }

  @Delete(':id')
  @Roles('OWNER', 'ADMIN')
  async cancel(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.findUnique({ where: { id }, include: { participants: true } });
      if (!reservation || reservation.status !== 'RESERVED') throw new NotFoundException('Active reservation not found.');
      const result = await tx.reservation.updateMany({ where: { id, status: 'RESERVED' }, data: { status: 'CANCELLED', cancelledAt: new Date(), cancelledBy: user.id } });
      if (!result.count) throw new NotFoundException('Active reservation not found.');
      await this.releaseCreditHolds(tx, reservation.participants);
      return tx.reservation.findUnique({ where: { id }, include: this.reservationInclude });
    });
  }

  @Post(':id/cancellation-requests')
  @Roles('CLIENT', 'TRAINER')
  async requestCancellation(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const input = requestCancellationSchema.safeParse(body);
    if (!input.success) throw new BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
    const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: { participants: { select: { profileId: true } } } });
    if (!reservation || reservation.status !== 'RESERVED') throw new NotFoundException('Active reservation not found.');
    const allowed = user.role === 'TRAINER' ? reservation.trainerId === user.id : reservation.participants.some((participant) => participant.profileId === user.id);
    if (!allowed) throw new ForbiddenException();
    const pending = await this.prisma.cancellationRequest.findFirst({ where: { reservationId: id, requesterId: user.id, status: 'PENDING' } });
    if (pending) throw new ConflictException('A pending cancellation request already exists.');
    return this.prisma.cancellationRequest.create({ data: { reservationId: id, requesterId: user.id, reason: input.data.reason }, include: { requester: { select: { id: true, fullName: true, email: true } }, reservation: { include: { court: true } } } });
  }

  @Patch('cancellation-requests/:requestId')
  @Roles('OWNER', 'ADMIN')
  async reviewCancellationRequest(@Param('requestId', ParseUUIDPipe) requestId: string, @Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const input = reviewSchema.safeParse(body);
    if (!input.success) throw new BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
    return this.prisma.$transaction(async (tx) => {
      const request = await tx.cancellationRequest.findUnique({ where: { id: requestId }, include: { reservation: true } });
      if (!request || request.status !== 'PENDING') throw new NotFoundException('Pending cancellation request not found.');
      if (input.data.decision === 'APPROVED') {
        const participants = await tx.reservationParticipant.findMany({ where: { reservationId: request.reservationId } });
        const cancelled = await tx.reservation.updateMany({ where: { id: request.reservationId, status: 'RESERVED' }, data: { status: 'CANCELLED', cancelledAt: new Date(), cancelledBy: user.id } });
        if (!cancelled.count) throw new ConflictException('The reservation is no longer active and cannot be cancelled.');
        await this.releaseCreditHolds(tx, participants);
      }
      return tx.cancellationRequest.update({ where: { id: requestId }, data: { status: input.data.decision, reviewedBy: user.id, reviewedAt: new Date(), reviewNote: input.data.note } });
    });
  }

  private async releaseCreditHolds(tx: Prisma.TransactionClient, participants: { profileId: string; creditUsed: boolean; creditMinutes: number }[]) {
    for (const participant of participants) {
      if (!participant.creditUsed || participant.creditMinutes <= 0) continue;
      await tx.trainingCredit.updateMany({ where: { profileId: participant.profileId, reservedMinutes: { gte: participant.creditMinutes } }, data: { reservedMinutes: { decrement: participant.creditMinutes } } });
    }
  }

  private readonly reservationInclude = { court: true, trainer: { select: { id: true, fullName: true, email: true } }, participants: { include: { profile: { select: { id: true, fullName: true, email: true, phone: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } } } } } satisfies Prisma.ReservationInclude;

  private assertCanView(reservation: { trainerId: string | null; participants: { profileId: string }[] }, user: AuthenticatedUser) {
    if (user.role === 'CLIENT' && !reservation.participants.some((participant) => participant.profileId === user.id)) throw new ForbiddenException();
    if (user.role === 'TRAINER' && reservation.trainerId !== user.id) throw new ForbiddenException();
  }

  private validDate(value: string) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) throw new BadRequestException('Invalid date filter.');
    return date;
  }
}
