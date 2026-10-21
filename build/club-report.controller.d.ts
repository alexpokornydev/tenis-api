import { ReservationStatus } from './generated/prisma/client';
import type { AuthenticatedUser } from './auth/auth.types';
import { PrismaService } from './prisma/prisma.service';
export declare class ClubReportController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    club(from?: string, to?: string): Promise<{
        total: number;
        completed: number;
        upcoming: number;
        cancelled: number;
        activeMembers: number;
        completedMinutes: number;
        revenueCents: number;
        trainerPayCents: number;
    }>;
    trainer(user: AuthenticatedUser, id: string | undefined, from?: string, to?: string): Promise<{
        total: number;
        completed: number;
        upcoming: number;
        completedMinutes: number;
        payCents: number;
        reservations: never[];
        trainer?: undefined;
    } | {
        trainer: null;
        total: number;
        completed: number;
        upcoming: number;
        completedMinutes: number;
        payCents: number;
        reservations: never[];
    } | {
        trainer: {
            effectiveTrainerRateCents: number;
            id: string;
            email: string;
            fullName: string;
            phone: string | null;
            trainerRateCents: number | null;
        };
        total: number;
        completed: number;
        upcoming: number;
        completedMinutes: number;
        payCents: number;
        reservations: ({
            participants: ({
                profile: {
                    id: string;
                    fullName: string;
                };
            } & {
                id: string;
                createdAt: Date;
                profileId: string;
                reservationId: string;
                creditUsed: boolean;
                creditMinutes: number;
                priceCents: number;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: ReservationStatus;
            startsAt: Date;
            priceCents: number;
            trainerId: string | null;
            endsAt: Date;
            paymentMethod: import("./generated/prisma/enums").PaymentMethod;
            capacity: number;
            notes: string | null;
            cancelledAt: Date | null;
            cancelledBy: string | null;
            createdBy: string;
        })[];
    }>;
    private range;
}
