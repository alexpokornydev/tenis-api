import { Controller, Get, NotFoundException, Param, ParseUUIDPipe, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { PrismaService } from '../prisma/prisma.service';

@Controller('clients')
@UseGuards(AuthGuard, RolesGuard)
export class ClientsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(':id')
  @Roles('OWNER', 'ADMIN')
  async get(@Param('id', ParseUUIDPipe) id: string) {
    const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true, email: true, fullName: true, phone: true, createdAt: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } }, reservationsAsClient: { take: 10, orderBy: { reservation: { startsAt: 'desc' } }, include: { reservation: { include: { court: true, trainer: { select: { id: true, fullName: true } } } } } } } });
    if (!client) throw new NotFoundException('Client not found.');
    return client;
  }

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
