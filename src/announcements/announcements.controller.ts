import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { z } from 'zod';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';

const announcementSchema = z.object({
  title: z.string().trim().min(1).max(160),
  body: z.string().trim().min(1).max(10_000),
  audience: z.array(z.enum(['CLIENT', 'TRAINER'])).min(1).default(['CLIENT', 'TRAINER']),
  publishedAt: z.iso.datetime().optional(),
});

@Controller('announcements')
@UseGuards(AuthGuard, RolesGuard)
export class AnnouncementsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Roles('OWNER', 'ADMIN', 'TRAINER', 'CLIENT')
  list(@CurrentUser() user: AuthenticatedUser) {
    return this.prisma.announcement.findMany({
      where: {
        ...(user.role === 'CLIENT' ? { audience: { has: 'CLIENT' } } : user.role === 'TRAINER' ? { audience: { has: 'TRAINER' } } : {}),
      },
      include: { author: { select: { id: true, fullName: true } } },
      orderBy: { publishedAt: 'desc' },
      take: 100,
    });
  }

  @Delete(':id')
  @Roles('OWNER', 'ADMIN')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.prisma.announcement.deleteMany({ where: { id } });
    if (result.count === 0) throw new NotFoundException('Announcement not found.');
    return { success: true, id };
  }

  @Post()
  @Roles('OWNER', 'ADMIN')
  create(@Body() body: unknown, @CurrentUser() user: AuthenticatedUser) {
    const parsed = announcementSchema.safeParse(body);
    if (!parsed.success) throw new BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
    return this.prisma.announcement.create({
      data: {
        title: parsed.data.title,
        body: parsed.data.body,
        audience: parsed.data.audience,
        publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : new Date(),
        authorId: user.id,
      },
      include: { author: { select: { id: true, fullName: true } } },
    });
  }
}
