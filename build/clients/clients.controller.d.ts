import { PrismaService } from '../prisma/prisma.service';
export declare class ClientsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    get(id: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        createdAt: Date;
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
    }>;
    list(search?: string): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        createdAt: Date;
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
    }[]>;
}
