import type { Request } from 'express';
import type { UserRole } from '../generated/prisma/client';
export type AuthenticatedUser = {
    id: string;
    email: string;
    role: UserRole;
};
export type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
};
