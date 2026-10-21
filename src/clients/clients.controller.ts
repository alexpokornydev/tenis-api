import { BadRequestException, Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Query, UseGuards } from '@nestjs/common';
import { z } from 'zod';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { PrismaService } from '../prisma/prisma.service';

@Controller('clients')
@UseGuards(AuthGuard, RolesGuard)
export class ClientsController {
  constructor(private readonly prisma: PrismaService) {}

  @Patch(':id/membership')
  @Roles('OWNER', 'ADMIN')
  async setMembership(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown) {
    const parsed = z.object({ active: z.boolean() }).safeParse(body);
    if (!parsed.success) throw new BadRequestException('Membership active must be a boolean.');
    const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true } });
    if (!client) throw new NotFoundException('Client not found.');
    if (!parsed.data.active) {
      await this.prisma.membership.deleteMany({ where: { profileId: id } });
      return { active: false };
    }
    const today = new Date();
    const validFrom = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    const validUntil = new Date(Date.UTC(today.getUTCFullYear(), 11, 31));
    const membership = await this.prisma.membership.upsert({
      where: { profileId: id },
      create: { profileId: id, type: 'annual', status: 'ACTIVE', validFrom, validUntil },
      update: { status: 'ACTIVE', validFrom, validUntil },
      select: { type: true, status: true, validUntil: true },
    });
    return { active: true, membership };
  }

  @Patch(':id/credit')
  @Roles('OWNER', 'ADMIN')
  async addCredit(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown) {
    const parsed = z.object({ hours: z.number().finite().positive().max(1000) }).safeParse(body);
    if (!parsed.success) throw new BadRequestException('Hours must be a positive number no greater than 1000.');
    const minutes = Math.round(parsed.data.hours * 60);
    if (minutes < 1) throw new BadRequestException('The credit amount is too small.');
    const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true } });
    if (!client) throw new NotFoundException('Client not found.');
    const credit = await this.prisma.trainingCredit.upsert({
      where: { profileId: id },
      create: { profileId: id, balanceMinutes: minutes },
      update: { balanceMinutes: { increment: minutes } },
      select: { balanceMinutes: true, reservedMinutes: true },
    });
    return { addedMinutes: minutes, credit };
  }

  @Patch(':id/rate')
  @Roles('OWNER', 'ADMIN')
  async setClientRate(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown) {
    const parsed = z.object({ hourlyRate: z.number().finite().nonnegative().max(100000).nullable() }).safeParse(body);
    if (!parsed.success) throw new BadRequestException('Client hourly rate must be a non-negative number or null.');
    const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true } });
    if (!client) throw new NotFoundException('Client not found.');
    const updated = await this.prisma.profile.update({ where: { id }, data: { clientHourlyRateCents: parsed.data.hourlyRate === null ? null : Math.round(parsed.data.hourlyRate * 100) }, select: { clientHourlyRateCents: true } });
    const settings = await this.prisma.clubSettings.findUnique({ where: { id: 1 } });
    return {
      hourlyRate: updated.clientHourlyRateCents === null ? null : updated.clientHourlyRateCents / 100,
      effectiveHourlyRate: (updated.clientHourlyRateCents ?? settings?.defaultHourlyRateCents ?? 60000) / 100,
    };
  }

  @Get(':id')
  @Roles('OWNER', 'ADMIN')
  async get(@Param('id', ParseUUIDPipe) id: string) {
    const [client, settings] = await Promise.all([
      this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true, email: true, fullName: true, phone: true, createdAt: true, clientHourlyRateCents: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } }, reservationsAsClient: { take: 10, orderBy: { reservation: { startsAt: 'desc' } }, include: { reservation: { include: { trainer: { select: { id: true, fullName: true } } } } } } } }),
      this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
    ]);
    if (!client) throw new NotFoundException('Client not found.');
    return { ...client, effectiveClientHourlyRateCents: client.clientHourlyRateCents ?? settings?.defaultHourlyRateCents ?? 60000 };
  }

  @Get()
  @Roles('OWNER', 'ADMIN')
  async list(@Query('search') search?: string) {
    const term = search?.trim();
    const [clients, settings] = await Promise.all([
      this.prisma.profile.findMany({
        where: { role: 'CLIENT', ...(term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {}) },
        select: { id: true, email: true, fullName: true, phone: true, createdAt: true, clientHourlyRateCents: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } },
        orderBy: { fullName: 'asc' },
        take: 200,
      }),
      this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
    ]);
    const defaultHourlyRateCents = settings?.defaultHourlyRateCents ?? 60000;
    return clients.map((client) => ({ ...client, effectiveClientHourlyRateCents: client.clientHourlyRateCents ?? defaultHourlyRateCents }));
  }
}
