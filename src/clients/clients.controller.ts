import { BadRequestException, Body, Controller, Get, Param, Patch, UseGuards, ForbiddenException, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { z } from 'zod';

import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import type { PrismaService } from '../prisma/prisma.service';

const adjustCreditsSchema = z.object({ adjustmentMinutes: z.number().int().min(-60000).max(60000), reason: z.string().trim().min(3).max(300) });

@Controller('clients')
@UseGuards(AuthGuard, RolesGuard)
export class ClientsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Roles('OWNER', 'ADMIN')
  list() {
    return this.prisma.profile.findMany({ where: { role: 'CLIENT' }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } }, orderBy: { fullName: 'asc' } });
  }

  @Get(':id')
  async get(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: AuthenticatedUser) {
    if (user.role === 'CLIENT' && user.id !== id) throw new ForbiddenException();
    if (!['OWNER', 'ADMIN', 'CLIENT'].includes(user.role)) throw new ForbiddenException();
    const profile = await this.prisma.profile.findUnique({ where: { id, role: 'CLIENT' }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } }, reservationsAsClient: { take: 10, orderBy: { reservation: { startsAt: 'desc' } }, include: { reservation: { include: { court: true, trainer: { select: { id: true, fullName: true } } } } } } } });
    if (!profile) throw new NotFoundException('Client profile not found.');
    return profile;
  }

  @Patch(':id/training-credit')
  @Roles('OWNER')
  async adjustCredits(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown) {
    const parsed = adjustCreditsSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
    return this.prisma.$transaction(async (tx) => {
      const client = await tx.profile.findUnique({ where: { id, role: 'CLIENT' }, include: { credit: true } });
      if (!client) throw new NotFoundException('Client profile not found.');
      const current = client.credit?.balanceMinutes ?? 0;
      const reserved = client.credit?.reservedMinutes ?? 0;
      const balanceMinutes = current + parsed.data.adjustmentMinutes;
      if (balanceMinutes < reserved) throw new BadRequestException('The new hours balance cannot be below the hours reserved for upcoming sessions.');
      return tx.trainingCredit.upsert({ where: { profileId: id }, create: { profileId: id, balanceMinutes }, update: { balanceMinutes } });
    });
  }
}
