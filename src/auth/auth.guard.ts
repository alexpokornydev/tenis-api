import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenVerifier } from './token-verifier';
import type { AuthenticatedRequest } from './auth.types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly verifier: TokenVerifier, private readonly prisma: PrismaService, private readonly reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    if (this.reflector.get<boolean>('isPublic', context.getHandler())) return true;
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const header = request.headers.authorization;
    if (!header?.startsWith('Bearer ')) throw new UnauthorizedException('Supabase access token required.');
    try {
      const verified = await this.verifier.verify(header.slice(7).trim());
      const id = verified.payload.sub, email = verified.payload.email;
      if (typeof id !== 'string' || typeof email !== 'string') throw new Error('Missing identity');
      const metadata = verified.payload.user_metadata as { full_name?: string } | undefined;
      const profile = await this.prisma.profile.upsert({
        where: { id },
        update: { email },
        create: { id, email, fullName: metadata?.full_name?.trim() || email.split('@')[0], role: 'CLIENT', credit: { create: {} } },
        select: { id: true, email: true, role: true },
      });
      request.user = { id: profile.id, email: profile.email || email, role: profile.role };
      return true;
    } catch {
      throw new UnauthorizedException('Supabase token invalid or user profile could not be provisioned.');
    }
  }
}
