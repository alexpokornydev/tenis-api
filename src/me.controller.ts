import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Patch, UseGuards } from '@nestjs/common';
import { z } from 'zod';
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
      const profile = await this.prisma.profile.findUnique({ where: { id: user.id }, select: { id: true, email: true, fullName: true, phone: true, role: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } });
      if (!profile) throw new InternalServerErrorException({ message: 'Profile not found after authentication.', code: 'PROFILE_NOT_FOUND' });
      return { id: profile.id, email: profile.email, fullName: profile.fullName, phone: profile.phone, role: profile.role, membership: profile.membership, credit: profile.credit };
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      const prismaError = error as { code?: unknown; meta?: { code?: unknown } };
      const code = typeof prismaError?.code === 'string' ? prismaError.code : typeof prismaError?.meta?.code === 'string' ? prismaError.meta.code : error instanceof Error ? error.name : 'UNKNOWN_PROFILE_ERROR';
      console.error('[me] Profile query failed', { code, error: error instanceof Error ? error.message : String(error) });
      throw new InternalServerErrorException({ message: 'The API could not load the profile from the database.', code });
    }
  }

  @Patch()
  async updateMe(@CurrentUser() user: AuthenticatedUser, @Body() body: unknown) {
    const parsed = z.object({
      email: z.string().trim().email().max(320),
      phone: z.string().trim().max(40).nullable(),
    }).safeParse(body);
    if (!parsed.success) throw new BadRequestException('Zadejte platný e-mail a telefon do 40 znaků.');

    const existing = await this.prisma.profile.findFirst({ where: { email: parsed.data.email, id: { not: user.id } }, select: { id: true } });
    if (existing) throw new BadRequestException('Tento e-mail už používá jiný účet.');

    const profile = await this.prisma.profile.update({
      where: { id: user.id },
      data: { email: parsed.data.email, phone: parsed.data.phone?.trim() || null },
      include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } },
    });
    return { id: profile.id, email: profile.email, fullName: profile.fullName, phone: profile.phone, role: profile.role, membership: profile.membership, credit: profile.credit };
  }

}
