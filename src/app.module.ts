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

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]), PrismaModule, AuthModule, ClientsModule, ReservationsModule, AnnouncementsModule],
  controllers: [HealthController, MeController],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
