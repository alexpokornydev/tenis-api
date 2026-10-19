import type { AuthenticatedUser } from '../auth/auth.types';
import type { PrismaService } from '../prisma/prisma.service';
export declare class TrainersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        reservationsAsTrainer: ({
            court: {
                id: string;
                createdAt: Date;
                name: string;
                active: boolean;
            };
            participants: ({
                profile: {
                    id: string;
                    fullName: string;
                };
            } & {
                id: string;
                createdAt: Date;
                profileId: string;
                priceCents: number;
                reservationId: string;
                creditUsed: boolean;
                creditMinutes: number;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../generated/prisma/enums").ReservationStatus;
            courtId: string;
            trainerId: string | null;
            startsAt: Date;
            endsAt: Date;
            paymentMethod: import("../generated/prisma/enums").PaymentMethod;
            priceCents: number;
            capacity: number;
            notes: string | null;
            cancelledAt: Date | null;
            cancelledBy: string | null;
            createdBy: string;
        })[];
    }[]>;
    get(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        reservationsAsTrainer: ({
            court: {
                id: string;
                createdAt: Date;
                name: string;
                active: boolean;
            };
            participants: ({
                profile: {
                    id: string;
                    fullName: string;
                };
            } & {
                id: string;
                createdAt: Date;
                profileId: string;
                priceCents: number;
                reservationId: string;
                creditUsed: boolean;
                creditMinutes: number;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../generated/prisma/enums").ReservationStatus;
            courtId: string;
            trainerId: string | null;
            startsAt: Date;
            endsAt: Date;
            paymentMethod: import("../generated/prisma/enums").PaymentMethod;
            priceCents: number;
            capacity: number;
            notes: string | null;
            cancelledAt: Date | null;
            cancelledBy: string | null;
            createdBy: string;
        })[];
    }>;
}
