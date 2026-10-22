import { BadRequestException, Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Query, UseGuards } from '@nestjs/common';
import { z } from 'zod';
import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { Roles } from './auth/roles';
import { PrismaService } from './prisma/prisma.service';

const roleSchema = z.object({ role: z.enum(['OWNER', 'ADMIN', 'TRAINER', 'CLIENT']) });

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Roles('OWNER', 'ADMIN')
  async list(@Query('search') search?: string) {
    const term = search?.trim();
    return this.prisma.profile.findMany({
      where: term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {},
      select: { id: true, email: true, fullName: true, phone: true, role: true, createdAt: true },
      orderBy: [{ role: 'asc' }, { fullName: 'asc' }],
      take: 500,
    });
  }

  @Patch(':id/role')
  @Roles('OWNER', 'ADMIN')
  async setRole(@Param('id', ParseUUIDPipe) id: string, @Body() body: unknown) {
    const parsed = roleSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException('Role must be OWNER, ADMIN, TRAINER, or CLIENT.');

    const result = await this.prisma.profile.updateMany({ where: { id }, data: { role: parsed.data.role } });
    if (!result.count) throw new NotFoundException('User not found.');

    return this.prisma.profile.findUniqueOrThrow({
      where: { id },
      select: { id: true, email: true, fullName: true, phone: true, role: true, createdAt: true },
    });
  }
}
