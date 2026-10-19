import type { AuthenticatedUser } from '../auth/auth.types';
import type { PrismaService } from '../prisma/prisma.service';
export declare class ClientsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    } & {
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        role: import("../generated/prisma/enums").UserRole;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    get(id: string, user: AuthenticatedUser): Promise<{
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
        reservationsAsClient: ({
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
        email: string;
        fullName: string;
        phone: string | null;
        role: import("../generated/prisma/enums").UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    adjustCredits(id: string, body: unknown): Promise<{
        id: string;
        updatedAt: Date;
        profileId: string;
        balanceMinutes: number;
        reservedMinutes: number;
    }>;
}
