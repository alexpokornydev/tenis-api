import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type SupabaseAdminUser = { id?: string; email?: string };

@Injectable()
export class SupabaseAdminService {
  constructor(private readonly config: ConfigService) {}

  async createUser(input: { email: string; fullName: string; password: string }) {
    const baseUrl = this.config.get<string>('SUPABASE_URL')?.replace(/\/+$/, '');
    const secretKey = this.config.get<string>('SUPABASE_SERVICE_ROLE_KEY') ?? this.config.get<string>('SUPABASE_SECRET_KEY');
    if (!baseUrl || !secretKey) {
      throw new InternalServerErrorException('Client account creation is not configured. Set SUPABASE_URL and a server-only Supabase service key.');
    }

    const response = await fetch(`${baseUrl}/auth/v1/admin/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: secretKey, Authorization: `Bearer ${secretKey}` },
      body: JSON.stringify({ email: input.email, password: input.password, email_confirm: true, user_metadata: { full_name: input.fullName } }),
    });
    const payload = await response.json().catch(() => null) as (SupabaseAdminUser & { message?: string; msg?: string; error_description?: string }) | null;
    if (!response.ok) {
      const message = payload?.message ?? payload?.msg ?? payload?.error_description ?? 'Supabase could not create the account.';
      if (response.status === 409 || response.status === 422) throw new ConflictException(message);
      if (response.status === 400) throw new BadRequestException(message);
      throw new InternalServerErrorException('Supabase account creation failed. Check the API server configuration.');
    }
    if (!payload?.id || !payload.email) throw new InternalServerErrorException('Supabase created an account without returning its identity.');
    return { id: payload.id, email: payload.email };
  }

  async deleteUser(id: string) {
    const baseUrl = this.config.get<string>('SUPABASE_URL')?.replace(/\/+$/, '');
    const secretKey = this.config.get<string>('SUPABASE_SERVICE_ROLE_KEY') ?? this.config.get<string>('SUPABASE_SECRET_KEY');
    if (!baseUrl || !secretKey) return;
    await fetch(`${baseUrl}/auth/v1/admin/users/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { apikey: secretKey, Authorization: `Bearer ${secretKey}` },
    }).catch(() => null);
  }
}