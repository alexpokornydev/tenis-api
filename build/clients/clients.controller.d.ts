import { PrismaService } from '../prisma/prisma.service';
export declare class ClientsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(search?: string): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        createdAt: Date;
        membership: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            profileId: string;
            type: string;
            status: import("../generated/prisma/enums").MembershipStatus;
            validFrom: Date;
            validUntil: Date | null;
            annualFee: number;
        } | null;
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        } | null;
    }[]>;
}
