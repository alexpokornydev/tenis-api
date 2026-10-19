import type { Request } from 'express';
import type { UserRole } from '../generated/prisma/client';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
}

export type AuthenticatedRequest = Request & { user?: AuthenticatedUser };
