import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { CurrentUser } from './auth/current-user.decorator';
import type { AuthenticatedUser } from './auth/auth.types';
import { PrismaService } from './prisma/prisma.service';

@Controller('me')
@UseGuards(AuthGuard)
export class MeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getMe(@CurrentUser() user: AuthenticatedUser) {
    const profile = await this.prisma.profile.findUnique({ where: { id: user.id }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } });
    if (!profile) return null;
    return { id: profile.id, email: profile.email, fullName: profile.fullName, phone: profile.phone, role: profile.role, membership: profile.membership, credit: profile.credit };
  }

}
