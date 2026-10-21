import { Injectable } from '@nestjs/common';
import { UserRole } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileProvisioner {
  constructor(private readonly prisma: PrismaService) {}

  async ensureProfile(input: { id: string; email: string; fullName?: string | null }) {
    return this.prisma.profile.upsert({
      where: { id: input.id },
      update: {
        email: input.email,
        ...(input.fullName?.trim() ? { fullName: input.fullName.trim() } : {}),
      },
      create: {
        id: input.id,
        email: input.email,
        fullName: input.fullName?.trim() || input.email.split('@')[0],
        role: UserRole.CLIENT,
      },
      select: { id: true, email: true, fullName: true, role: true },
    });
  }
}
