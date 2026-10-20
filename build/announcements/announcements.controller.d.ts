import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
export declare class AnnouncementsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: AuthenticatedUser): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        author: {
            id: string;
            fullName: string;
        };
    } & {
        audience: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        publishedAt: Date | null;
        authorId: string;
    })[]>;
    create(body: unknown, user: AuthenticatedUser): import("../generated/prisma/models").Prisma__AnnouncementClient<{
        author: {
            id: string;
            fullName: string;
        };
    } & {
        audience: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        publishedAt: Date | null;
        authorId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
