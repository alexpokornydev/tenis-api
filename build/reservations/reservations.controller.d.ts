import { Prisma } from '../generated/prisma/client';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { SettlementService } from './settlement.service';
export declare class ReservationsController {
    private readonly prisma;
    private readonly settlement;
    constructor(prisma: PrismaService, settlement: SettlementService);
    options(): Promise<{
        clients: {
            id: string;
            email: string;
            fullName: string;
            membership: {
                status: import("../generated/prisma/enums").MembershipStatus;
                validUntil: Date | null;
            } | null;
            credit: {
                balanceMinutes: number;
                reservedMinutes: number;
            } | null;
        }[];
        trainers: {
            id: string;
            fullName: string;
        }[];
        courts: {
            id: string;
            name: string;
        }[];
    }>;
    list(user: AuthenticatedUser, from?: string, to?: string): Prisma.PrismaPromise<({
        court: {
            id: string;
            createdAt: Date;
            name: string;
            active: boolean;
        };
        trainer: {
            id: string;
            fullName: string;
        } | null;
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
    })[]>;
    get(id: string, user: AuthenticatedUser): Promise<{
        court: {
            id: string;
            createdAt: Date;
            name: string;
            active: boolean;
        };
        trainer: {
            id: string;
            fullName: string;
        } | null;
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
    }>;
    create(body: unknown, user: AuthenticatedUser): Promise<{
        court: {
            id: string;
            createdAt: Date;
            name: string;
            active: boolean;
        };
        participants: ({
            profile: {
                id: string;
                email: string;
                fullName: string;
                phone: string | null;
                role: import("../generated/prisma/enums").UserRole;
                createdAt: Date;
                updatedAt: Date;
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
    }>;
    requestCancellation(id: string, body: unknown, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        status: import("../generated/prisma/enums").CancellationRequestStatus;
        reason: string | null;
        reservationId: string;
        requesterId: string;
        reviewedBy: string | null;
        reviewedAt: Date | null;
        reviewNote: string | null;
    }>;
    cancel(id: string, user: AuthenticatedUser): Promise<{
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
    }>;
    complete(id: string, user: AuthenticatedUser): Promise<{
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
    } | null>;
}
