import { Module } from '@nestjs/common';

import { ReservationsController } from './reservations.controller';
import { SettlementService } from './settlement.service';

@Module({ controllers: [ReservationsController], providers: [SettlementService] })
export class ReservationsModule {}
