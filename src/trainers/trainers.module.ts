import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TrainersController } from './trainers.controller';

@Module({ imports: [AuthModule], controllers: [TrainersController] })
export class TrainersModule {}
