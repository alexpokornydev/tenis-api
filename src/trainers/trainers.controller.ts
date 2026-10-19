import { Controller, Get, Param, ParseUUIDPipe, UseGuards, ForbiddenException, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import type { PrismaService } from '../prisma/prisma.service';

@Controller('trainers')
@UseGuards(AuthGuard, RolesGuard)
export class TrainersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Roles('OWNER', 'ADMIN')
  list() {
    return this.prisma.profile.findMany({ where: { role: 'TRAINER' }, select: { id: true, email: true, fullName: true, phone: true, reservationsAsTrainer: { where: { startsAt: { gte: new Date() } }, orderBy: { startsAt: 'asc' }, take: 5, include: { court: true, participants: { include: { profile: { select: { id: true, fullName: true } } } } } } }, orderBy: { fullName: 'asc' } });
  }

  @Get(':id')
  async get(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    if (user.role === 'TRAINER' && user.id !== id) throw new ForbiddenException();
    if (!['OWNER', 'ADMIN', 'TRAINER'].includes(user.role)) throw new ForbiddenException();
    const trainer = await this.prisma.profile.findUnique({ where: { id, role: 'TRAINER' }, select: { id: true, email: true, fullName: true, phone: true, reservationsAsTrainer: { orderBy: { startsAt: 'desc' }, take: 25, include: { court: true, participants: { include: { profile: { select: { id: true, fullName: true } } } } } } } });
    if (!trainer) throw new NotFoundException('Trainer profile not found.');
    return trainer;
  }
}
