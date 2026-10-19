import { BadRequestException, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { z } from 'zod';

import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import type { PrismaService } from '../prisma/prisma.service';

const announcementSchema = z.object({ title: z.string().trim().min(3).max(150), body: z.string().trim().min(1).max(10000), audience: z.array(z.enum(['CLIENT', 'TRAINER'])).min(1).default(['CLIENT', 'TRAINER']), publishedAt: z.iso.datetime().optional() });

@Controller('announcements')
@UseGuards(AuthGuard, RolesGuard)
export class AnnouncementsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(@CurrentUser() user: AuthenticatedUser) {
    return this.prisma.announcement.findMany({ where: { publishedAt: { lte: new Date() }, ...(user.role === 'CLIENT' ? { audience: { has: 'CLIENT' } } : user.role === 'TRAINER' ? { audience: { has: 'TRAINER' } } : {}) }, include: { author: { select: { id: true, fullName: true } } }, orderBy: { publishedAt: 'desc' } });
  }

  @Post()
  @Roles('OWNER', 'ADMIN')
  async create(@Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const input = announcementSchema.safeParse(body);
    if (!input.success) throw new BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
    return this.prisma.announcement.create({ data: { ...input.data, publishedAt: input.data.publishedAt ? new Date(input.data.publishedAt) : new Date(), authorId: user.id }, include: { author: { select: { id: true, fullName: true } } } });
  }
}
