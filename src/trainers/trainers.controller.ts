import { BadRequestException, Body, Controller, Get, Param, ParseUUIDPipe, Patch, Query, UseGuards } from '@nestjs/common';
import { z } from 'zod';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { PrismaService } from '../prisma/prisma.service';

@Controller('trainers')
@UseGuards(AuthGuard, RolesGuard)
export class TrainersController {
  constructor(private readonly prisma: PrismaService) {}

  @Patch(':id/rate')
  @Roles('OWNER', 'ADMIN')
  async setRate(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown) {
    const parsed = z.object({ hourlyRate: z.number().finite().nonnegative().max(100000).nullable() }).safeParse(body);
    if (!parsed.success) throw new BadRequestException('Trainer hourly rate must be a non-negative number or null.');
    const updated = await this.prisma.profile.updateMany({ where: { id, role: 'TRAINER' }, data: { trainerRateCents: parsed.data.hourlyRate === null ? null : Math.round(parsed.data.hourlyRate * 100) } });
    if (!updated.count) throw new BadRequestException('Trainer not found.');
    const [trainer, settings] = await Promise.all([
      this.prisma.profile.findUnique({ where: { id }, select: { trainerRateCents: true } }),
      this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
    ]);
    const storedHourlyRate = trainer?.trainerRateCents;
    return {
      hourlyRate: storedHourlyRate == null ? null : storedHourlyRate / 100,
      effectiveHourlyRate: (storedHourlyRate ?? settings?.defaultTrainerRateCents ?? 20000) / 100,
    };
  }

  @Get()
  @Roles('OWNER', 'ADMIN')
  async list(@Query('search') search?: string) {
    const term = search?.trim();
    const [trainers, settings] = await Promise.all([
      this.prisma.profile.findMany({
        where: {
          role: 'TRAINER',
          ...(term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {}),
        },
        select: { id: true, email: true, fullName: true, phone: true, createdAt: true, trainerRateCents: true },
        orderBy: { fullName: 'asc' },
        take: 200,
      }),
      this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
    ]);
    const defaultTrainerRateCents = settings?.defaultTrainerRateCents ?? 20000;
    return trainers.map((trainer) => ({ ...trainer, effectiveTrainerRateCents: trainer.trainerRateCents ?? defaultTrainerRateCents }));
  }
}
