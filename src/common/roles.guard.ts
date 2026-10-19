import type { CanActivate, ExecutionContext} from '@nestjs/common';
import { ForbiddenException, Injectable } from '@nestjs/common';
import type { Reflector } from '@nestjs/core';
import type { UserRole } from '../generated/prisma/client';

import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
    if (!roles?.length) return true;
    const request = context.switchToHttp().getRequest<{ user?: { role: UserRole } }>();
    if (!request.user || !roles.includes(request.user.role)) throw new ForbiddenException('Your role cannot perform this action.');
    return true;
  }
}
