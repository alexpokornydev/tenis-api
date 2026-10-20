import { BadRequestException, ConflictException, Controller, Get, Post, Body, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { z } from 'zod';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { SettlementService } from './settlement.service';

const createSchema = z.object({ courtId: z.uuid(), trainerId: z.uuid().optional(), startsAt: z.iso.datetime(), endsAt: z.iso.datetime(), participantIds: z.array(z.uuid()).min(1).max(12), paymentMethod: z.enum(['FREE_TRAINING','CASH','CARD','BANK_TRANSFER']).default('CASH'), priceCents: z.number().int().min(0).default(0), capacity: z.number().int().min(1).max(12).default(1) });

@Controller('reservations')
@UseGuards(AuthGuard, RolesGuard)
export class ReservationsController {
  constructor(private readonly prisma: PrismaService, private readonly settlement: SettlementService) {}

  @Get()
  @Roles('OWNER','ADMIN','TRAINER','CLIENT')
  list(@CurrentUser() user: AuthenticatedUser) {
    const where: Prisma.ReservationWhereInput = user.role === 'CLIENT' ? { participants: { some: { profileId: user.id } } } : user.role === 'TRAINER' ? { trainerId: user.id } : {};
    return this.prisma.reservation.findMany({ where, include: { court: true, trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } }, orderBy: { startsAt: 'asc' }, take: 200 });
  }

  @Post()
  @Roles('OWNER','ADMIN')
  async create(@Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const parsed = createSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
    const data = parsed.data;
    const startsAt = new Date(data.startsAt), endsAt = new Date(data.endsAt);
    if (startsAt <= new Date() || endsAt <= startsAt) throw new BadRequestException('Reservation must be in the future and end after it starts.');
    const duration = Math.ceil((endsAt.getTime() - startsAt.getTime()) / 60_000);
    return this.prisma.$transaction(async (tx) => {
      const court = await tx.court.findFirst({ where: { id: data.courtId, active: true } });
      if (!court) throw new BadRequestException('Active court not found.');
      const participants = await tx.profile.findMany({ where: { id: { in: data.participantIds }, role: 'CLIENT' }, select: { id: true } });
      if (participants.length !== data.participantIds.length || participants.length > data.capacity) throw new BadRequestException('Invalid participants or capacity.');
      if (data.paymentMethod === 'FREE_TRAINING') {
        for (const participant of participants) {
          const credit = await tx.trainingCredit.findUnique({ where: { profileId: participant.id } });
          if (!credit || credit.balanceMinutes - credit.reservedMinutes < duration) throw new BadRequestException('Client has insufficient available training credit.');
          await tx.trainingCredit.update({ where: { profileId: participant.id }, data: { reservedMinutes: { increment: duration } } });
        }
      }
      const overlap = await tx.reservation.findFirst({ where: { status: 'RESERVED', startsAt: { lt: endsAt }, endsAt: { gt: startsAt }, OR: [{ courtId: data.courtId }, ...(data.trainerId ? [{ trainerId: data.trainerId }] : [])] } });
      if (overlap) throw new ConflictException('Court or trainer is already booked for this time.');
      return tx.reservation.create({ data: { courtId: data.courtId, trainerId: data.trainerId, startsAt, endsAt, paymentMethod: data.paymentMethod, priceCents: data.priceCents, capacity: data.capacity, createdBy: user.id, participants: { create: participants.map(({ id }) => ({ profileId: id, priceCents: data.priceCents, creditUsed: data.paymentMethod === 'FREE_TRAINING', creditMinutes: data.paymentMethod === 'FREE_TRAINING' ? duration : 0 })) } }, include: { court: true, participants: { include: { profile: true } } } });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
  }

  @Post(':id/complete')
  @Roles('OWNER','ADMIN','TRAINER')
  async complete(@Param('id', ParseUUIDPipe) id: string) {
    const reservation = await this.prisma.reservation.findUnique({ where: { id } });
    if (!reservation) throw new BadRequestException('Reservation not found.');
    if (reservation.endsAt > new Date()) throw new BadRequestException('Training is not over yet.');
    return this.settlement.settle(id);
  }
}
