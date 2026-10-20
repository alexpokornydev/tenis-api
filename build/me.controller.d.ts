import type { AuthenticatedUser } from './auth/auth.types';
import { PrismaService } from './prisma/prisma.service';
export declare class MeController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getMe(user: AuthenticatedUser): Promise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        role: import("./generated/prisma/enums").UserRole;
        membership: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            profileId: string;
            type: string;
            status: import("./generated/prisma/enums").MembershipStatus;
            validFrom: Date;
            validUntil: Date | null;
            annualFee: number;
        } | null;
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        } | null;
    } | null>;
    provision(user: AuthenticatedUser): Promise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        role: import("./generated/prisma/enums").UserRole;
        membership: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            profileId: string;
            type: string;
            status: import("./generated/prisma/enums").MembershipStatus;
            validFrom: Date;
            validUntil: Date | null;
            annualFee: number;
        } | null;
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        } | null;
    }>;
}
