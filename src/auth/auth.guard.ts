import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { CanActivate, ExecutionContext } from '@nestjs/common';

import type { TokenVerifier } from './token-verifier';
import type { AuthenticatedRequest } from './auth.types';
import type { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly verifier: TokenVerifier, private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) throw new UnauthorizedException('A Supabase access token is required.');

    const token = authHeader.slice('Bearer '.length).trim();
    if (!token) throw new UnauthorizedException('A Supabase access token is required.');

    let subject: string;
    let email: string;
    try {
      const verified = await this.verifier.verify(token);
      if (typeof verified.payload.sub !== 'string' || typeof verified.payload.email !== 'string') {
        throw new UnauthorizedException('The access token is missing required identity claims.');
      }
      subject = verified.payload.sub;
      email = verified.payload.email;
    } catch {
      throw new UnauthorizedException('Supabase access token is invalid or expired.');
    }

    const profile = await this.prisma.profile.findUnique({ where: { id: subject }, select: { id: true, email: true, role: true } });
    if (!profile) throw new UnauthorizedException('No application profile exists for this Supabase user. Ask a club owner to provision access.');
    request.user = { id: profile.id, email: profile.email || email, role: profile.role };
    return true;
  }
}
