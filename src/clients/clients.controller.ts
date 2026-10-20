import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { PrismaService } from '../prisma/prisma.service';

@Controller('clients')
@UseGuards(AuthGuard, RolesGuard)
export class ClientsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Roles('OWNER', 'ADMIN')
  list(@Query('search') search?: string) {
    const term = search?.trim();
    return this.prisma.profile.findMany({
      where: { role: 'CLIENT', ...(term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {}) },
      select: { id: true, email: true, fullName: true, phone: true, createdAt: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } },
      orderBy: { fullName: 'asc' },
      take: 200,
    });
  }
}
