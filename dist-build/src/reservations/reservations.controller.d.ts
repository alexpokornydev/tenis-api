import { Prisma } from '../generated/prisma/client';
import type { ReservationStatus } from '../generated/prisma/client';
import type { AuthenticatedUser } from '../auth/auth.types';
import type { PrismaService } from '../prisma/prisma.service';
import type { SettlementService } from './settlement.service';
export declare class ReservationsController {
    private readonly prisma;
    private readonly settlement;
    constructor(prisma: PrismaService, settlement: SettlementService);
    listCancellationRequests(): Prisma.PrismaPromise<({
        reservation: {
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
            status: ReservationStatus;
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
    list(user: AuthenticatedUser, from?: string, to?: string, status?: string): Promise<({
        court: {
            id: string;
            createdAt: Date;
            name: string;
            active: boolean;
        };
        trainer: {
            id: string;
            email: string;
            fullName: string;
        } | null;
        participants: ({
            profile: {
                id: string;
                email: string;
                fullName: string;
                phone: string | null;
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
        status: ReservationStatus;
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
            email: string;
            fullName: string;
        } | null;
        participants: ({
            profile: {
                id: string;
                email: string;
                fullName: string;
                phone: string | null;
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
        status: ReservationStatus;
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
        trainer: {
            id: string;
            email: string;
            fullName: string;
        } | null;
        participants: ({
            profile: {
                id: string;
                email: string;
                fullName: string;
                phone: string | null;
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
        status: ReservationStatus;
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
    complete(id: string, user: AuthenticatedUser): Promise<({
        participants: ({
            profile: {
                id: string;
                fullName: string;
                credit: {
                    balanceMinutes: number;
                    reservedMinutes: number;
                } | null;
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
        status: ReservationStatus;
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
    }) | null>;
    cancel(id: string, user: AuthenticatedUser): Promise<({
        court: {
            id: string;
            createdAt: Date;
            name: string;
            active: boolean;
        };
        trainer: {
            id: string;
            email: string;
            fullName: string;
        } | null;
        participants: ({
            profile: {
                id: string;
                email: string;
                fullName: string;
                phone: string | null;
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
        status: ReservationStatus;
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
    }) | null>;
    requestCancellation(id: string, body: unknown, user: AuthenticatedUser): Promise<{
        reservation: {
            court: {
                id: string;
                createdAt: Date;
                name: string;
                active: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: ReservationStatus;
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
    }>;
    reviewCancellationRequest(requestId: string, body: unknown, user: AuthenticatedUser): Promise<{
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
    private releaseCreditHolds;
    private readonly reservationInclude;
    private assertCanView;
    private validDate;
}
