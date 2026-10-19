import { Module } from '@nestjs/common';
import { TrainersController } from './trainers.controller';

@Module({ controllers: [TrainersController] })
export class TrainersModule {}
