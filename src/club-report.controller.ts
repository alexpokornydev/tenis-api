import { Controller, ForbiddenException, Get, Query, UseGuards } from '@nestjs/common';
import { ReservationStatus, UserRole } from './generated/prisma/client';
import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { Roles } from './auth/roles';
import { CurrentUser } from './auth/current-user.decorator';
import type { AuthenticatedUser } from './auth/auth.types';
import { PrismaService } from './prisma/prisma.service';

@Controller('reports')
@UseGuards(AuthGuard, RolesGuard)
export class ClubReportController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('club')
  @Roles('OWNER', 'ADMIN')
  async club(@Query('from') from?: string, @Query('to') to?: string) {
    const range = this.range(from, to);
    const settings = await this.prisma.clubSettings.findUnique({ where: { id: 1 } });
    const [total, completed, upcoming, cancelled, members, reservations] = await Promise.all([
      this.prisma.reservation.count({ where: { startsAt: range } }),
      this.prisma.reservation.count({ where: { status: ReservationStatus.COMPLETED, startsAt: range } }),
      this.prisma.reservation.count({ where: { status: ReservationStatus.RESERVED, startsAt: { gte: new Date(), lt: range.lt } } }),
      this.prisma.reservation.count({ where: { status: ReservationStatus.CANCELLED, startsAt: range } }),
      this.prisma.membership.count({ where: { status: 'ACTIVE', OR: [{ validUntil: null }, { validUntil: { gte: new Date() } }] } }),
      this.prisma.reservation.findMany({ where: { status: ReservationStatus.COMPLETED, startsAt: range }, include: { trainer: { select: { id: true, fullName: true, trainerRateCents: true } }, participants: { include: { profile: { select: { id: true, fullName: true, clientHourlyRateCents: true } } } } } }),
    ]);
    const completedMinutes = reservations.reduce((sum, reservation) => sum + (reservation.endsAt.getTime() - reservation.startsAt.getTime()) / 60_000, 0);
    const revenueCents = reservations.reduce((sum, reservation) => sum + reservation.participants.reduce((inner, participant) => inner + participant.priceCents, 0), 0);
    const trainerPayCents = reservations.reduce((sum, reservation) => {
      if (!reservation.trainer) return sum;
      const rate = reservation.trainer.trainerRateCents ?? settings?.defaultTrainerRateCents ?? 0;
      return sum + Math.round(rate * ((reservation.endsAt.getTime() - reservation.startsAt.getTime()) / 3_600_000));
    }, 0);
    return { total, completed, upcoming, cancelled, activeMembers: members, completedMinutes, revenueCents, trainerPayCents };
  }

  @Get('trainer')
  @Roles('OWNER', 'ADMIN', 'TRAINER')
  async trainer(@CurrentUser() user: AuthenticatedUser, @Query('id') id: string | undefined, @Query('from') from?: string, @Query('to') to?: string) {
    if (user.role === UserRole.TRAINER && id && id !== user.id) throw new ForbiddenException('Trainers can only view their own report.');
    const trainerId = user.role === UserRole.TRAINER ? user.id : id;
    if (!trainerId) return { total: 0, completed: 0, upcoming: 0, completedMinutes: 0, payCents: 0, reservations: [] };
    const range = this.range(from, to);
    const [trainer, reservations, settings] = await Promise.all([
      this.prisma.profile.findFirst({ where: { id: trainerId, role: { in: [UserRole.TRAINER, UserRole.ADMIN] } }, select: { id: true, fullName: true, email: true, phone: true, trainerRateCents: true } }),
      this.prisma.reservation.findMany({ where: { trainerId, startsAt: range }, include: { participants: { include: { profile: { select: { id: true, fullName: true } } } } }, orderBy: { startsAt: 'asc' } }),
      this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
    ]);
    if (!trainer) return { trainer: null, total: 0, completed: 0, upcoming: 0, completedMinutes: 0, payCents: 0, reservations: [] };
    const completed = reservations.filter((item) => item.status === ReservationStatus.COMPLETED);
    const upcoming = reservations.filter((item) => item.status === ReservationStatus.RESERVED && item.startsAt > new Date());
    const completedMinutes = completed.reduce((sum, item) => sum + (item.endsAt.getTime() - item.startsAt.getTime()) / 60_000, 0);
    const hourlyRate = trainer.trainerRateCents ?? settings?.defaultTrainerRateCents ?? 20000;
    return { trainer: { ...trainer, effectiveTrainerRateCents: hourlyRate }, total: reservations.length, completed: completed.length, upcoming: upcoming.length, completedMinutes, payCents: Math.round(hourlyRate * completedMinutes / 60), reservations };
  }

  private range(from?: string, to?: string) {
    const start = from ? new Date(from) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const end = to ? new Date(to) : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
    return { gte: start, lt: end };
  }
}
