import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenVerifier } from './token-verifier';
import type { AuthenticatedRequest } from './auth.types';

import { ProfileProvisioner } from './profile-provisioner';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly verifier: TokenVerifier, private readonly reflector: Reflector, private readonly provisioner: ProfileProvisioner) {}

  async canActivate(context: ExecutionContext) {
    if (this.reflector.get<boolean>('isPublic', context.getHandler())) return true;
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const header = request.headers.authorization;
    if (!header?.startsWith('Bearer ')) throw new UnauthorizedException('Supabase access token required.');

    let verified: Awaited<ReturnType<TokenVerifier['verify']>>;
    try {
      verified = await this.verifier.verify(header.slice(7).trim());
    } catch {
      throw new UnauthorizedException('Supabase access token is invalid or expired. Sign in again and retry.');
    }

    const id = verified.payload.sub;
    const email = verified.payload.email;

    if (typeof id !== 'string' || typeof email !== 'string') {
      throw new UnauthorizedException('Supabase token does not include a user id and email.');
    }

    const metadata = verified.payload.user_metadata as { full_name?: string } | undefined;
    try {
      const profile = await this.provisioner.ensureProfile({
        id,
        email,
        fullName: metadata?.full_name,

      });
      request.user = { id: profile.id, email: profile.email || email, role: profile.role, fullName: profile.fullName };
      return true;
    } catch (error) {
      const prismaError = error as { code?: unknown; meta?: { code?: unknown } };
      const code = typeof prismaError?.code === 'string' ? prismaError.code : typeof prismaError?.meta?.code === 'string' ? prismaError.meta.code : error instanceof Error ? error.name : 'UNKNOWN_DATABASE_ERROR';
      console.error('[auth] Profile provisioning failed', { code, error: error instanceof Error ? error.message : String(error) });
      throw new InternalServerErrorException({
        message: 'Access token is valid, but the API could not create or load the profile. Check database connectivity and required migrations.',
        code,
      });
    }
  }
}
