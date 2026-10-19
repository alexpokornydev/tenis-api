import { Controller, Get, UseGuards } from '@nestjs/common';
import type { PrismaService } from './prisma/prisma.service';
import { AuthGuard } from './auth/auth.guard';
import { CurrentUser } from './auth/current-user.decorator';
import type { AuthenticatedUser } from './auth/auth.types';

@Controller('me')
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getProfile(@CurrentUser() user: AuthenticatedUser) {
    const profile = await this.prisma.profile.findUnique({ where: { id: user.id }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } });
    if (!profile) return null;
    return { ...profile, credit: profile.credit ? { balanceMinutes: profile.credit.balanceMinutes, reservedMinutes: profile.credit.reservedMinutes } : null };
  }
}
