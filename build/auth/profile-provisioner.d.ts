import { UserRole } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class ProfileProvisioner {
    private readonly prisma;
    constructor(prisma: PrismaService);
    ensureProfile(input: {
        id: string;
        email: string;
        fullName?: string | null;
        role?: UserRole;
    }): Promise<{
        id: string;
        email: string;
        fullName: string;
        role: UserRole;
    }>;
}
