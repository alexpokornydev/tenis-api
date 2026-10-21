import { Prisma } from '../generated/prisma/client';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { SettlementService } from './settlement.service';
export declare class ReservationsController {
    private readonly prisma;
    private readonly settlement;
    constructor(prisma: PrismaService, settlement: SettlementService);
    options(user: AuthenticatedUser): Promise<{
        clients: {
            effectiveClientHourlyRateCents: number;
            id: string;
            email: string;
            fullName: string;
            clientHourlyRateCents: number | null;
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
            effectiveTrainerRateCents: number;
            id: string;
            fullName: string;
            trainerRateCents: number | null;
        }[];
        settings: {
            id: number;
            defaultHourlyRateCents: number;
            defaultTrainerRateCents: number;
            updatedAt: Date;
        } | {
            id: number;
            defaultHourlyRateCents: number;
            defaultTrainerRateCents: number;
        };
    }>;
    listCancellationRequests(): Prisma.PrismaPromise<({
        reservation: {
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
            updatedAt: Date;
            createdAt: Date;
            status: import("../generated/prisma/enums").ReservationStatus;
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
        };
        requester: {
            id: string;
            email: string;
            fullName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        status: import("../generated/prisma/enums").CancellationRequestStatus;
        reason: string | null;
        reservationId: string;
        requesterId: string;
        reviewedBy: string | null;
        reviewedAt: Date | null;
        reviewNote: string | null;
    })[]>;
    list(user: AuthenticatedUser, from?: string, to?: string): Prisma.PrismaPromise<({
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
        updatedAt: Date;
        createdAt: Date;
        status: import("../generated/prisma/enums").ReservationStatus;
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
        updatedAt: Date;
        createdAt: Date;
        status: import("../generated/prisma/enums").ReservationStatus;
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
        updatedAt: Date;
        createdAt: Date;
        status: import("../generated/prisma/enums").ReservationStatus;
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
        updatedAt: Date;
        createdAt: Date;
        status: import("../generated/prisma/enums").ReservationStatus;
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
        updatedAt: Date;
        createdAt: Date;
        status: import("../generated/prisma/enums").ReservationStatus;
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
