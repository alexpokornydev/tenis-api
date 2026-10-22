import { PrismaService } from './prisma/prisma.service';
export declare class UsersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(search?: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        role: import("./generated/prisma/enums").UserRole;
        createdAt: Date;
    }[]>;
    setRole(id: string, body: unknown): Promise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        role: import("./generated/prisma/enums").UserRole;
        createdAt: Date;
    }>;
}
