import { Controller, Get, InternalServerErrorException, UseGuards } from '@nestjs/common';
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
    try {
      const profile = await this.prisma.profile.findUnique({ where: { id: user.id }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } });
      if (!profile) throw new Error('Verified profile is missing after authentication guard completed.');
      return { id: profile.id, email: profile.email, fullName: profile.fullName, phone: profile.phone, role: profile.role, membership: profile.membership, credit: profile.credit };
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'The API verified the Supabase account but could not load its profile.',
        code: error instanceof Error ? (error as Error & { code?: string }).code ?? error.name : 'UNKNOWN_PROFILE_ERROR',
      });
    }
  }

}
