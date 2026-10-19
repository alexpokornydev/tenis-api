
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AnnouncementsModule } from './announcements/announcements.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { AppController } from './app.controller';
import { HealthController } from './health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TrainersModule } from './trainers/trainers.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule, ClientsModule, TrainersModule, ReservationsModule, AnnouncementsModule],
  controllers: [HealthController, AppController],
})
export class AppModule {}
