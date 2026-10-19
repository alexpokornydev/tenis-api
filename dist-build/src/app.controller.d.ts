import type { PrismaService } from './prisma/prisma.service';
import type { AuthenticatedUser } from './auth/auth.types';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProfile(user: AuthenticatedUser): Promise<{
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        } | null;
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
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        role: import("./generated/prisma/enums").UserRole;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
