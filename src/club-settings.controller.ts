import { BadRequestException, Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { z } from 'zod';
import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { Roles } from './auth/roles';
import { PrismaService } from './prisma/prisma.service';

const settingsSchema = z.object({ defaultHourlyRate: z.number().finite().nonnegative().max(100000), defaultTrainerRate: z.number().finite().nonnegative().max(100000) });

@Controller('settings')
@UseGuards(AuthGuard, RolesGuard)
export class ClubSettingsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Roles('OWNER', 'ADMIN')
  async get() {
    const settings = await this.prisma.clubSettings.findUnique({ where: { id: 1 } });
    return settings ?? { id: 1, defaultHourlyRateCents: 60000, defaultTrainerRateCents: 20000 };
  }

  @Patch()
  @Roles('OWNER', 'ADMIN')
  async update(@Body() body: unknown) {
    const parsed = settingsSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
    return this.prisma.clubSettings.upsert({
      where: { id: 1 },
      create: { id: 1, defaultHourlyRateCents: Math.round(parsed.data.defaultHourlyRate * 100), defaultTrainerRateCents: Math.round(parsed.data.defaultTrainerRate * 100) },
      update: { defaultHourlyRateCents: Math.round(parsed.data.defaultHourlyRate * 100), defaultTrainerRateCents: Math.round(parsed.data.defaultTrainerRate * 100) },
    });
  }
}
