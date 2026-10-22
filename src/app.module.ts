import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { MeController } from './me.controller';
import { ReservationsModule } from './reservations/reservations.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { TrainersModule } from './trainers/trainers.module';
import { ClubSettingsController } from './club-settings.controller';
import { ClubReportController } from './club-report.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]), PrismaModule, AuthModule, ClientsModule, TrainersModule, ReservationsModule, AnnouncementsModule],
  controllers: [HealthController, MeController, ClubSettingsController, ClubReportController, UsersController],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
