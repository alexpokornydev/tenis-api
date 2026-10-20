import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AnnouncementsController } from './announcements.controller';

@Module({ imports: [AuthModule], controllers: [AnnouncementsController] })
export class AnnouncementsModule {}
