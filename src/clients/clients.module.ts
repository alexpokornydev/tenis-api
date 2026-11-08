import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { SupabaseAdminService } from './supabase-admin.service';
import { AuthModule } from '../auth/auth.module';

@Module({ imports: [AuthModule], controllers: [ClientsController], providers: [SupabaseAdminService] })
export class ClientsModule {}
