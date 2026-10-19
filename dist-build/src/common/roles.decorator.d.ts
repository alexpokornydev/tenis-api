import type { UserRole } from '../generated/prisma/client';
export declare const ROLES_KEY = "required-roles";
export declare const Roles: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
