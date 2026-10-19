import type { AuthenticatedUser } from '../auth/auth.types';
import type { PrismaService } from '../prisma/prisma.service';
export declare class AnnouncementsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: AuthenticatedUser): Promise<({
        author: {
            id: string;
            fullName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        audience: string[];
        publishedAt: Date | null;
        authorId: string;
    })[]>;
    create(body: unknown, user: AuthenticatedUser): Promise<{
        author: {
            id: string;
            fullName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        audience: string[];
        publishedAt: Date | null;
        authorId: string;
    }>;
}
