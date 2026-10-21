import { PrismaService } from '../prisma/prisma.service';
export declare class ClientsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    setMembership(id: string, body: unknown): Promise<{
        active: boolean;
        membership?: undefined;
    } | {
        active: boolean;
        membership: {
            type: string;
            status: import("../generated/prisma/enums").MembershipStatus;
            validUntil: Date | null;
        };
    }>;
    addCredit(id: string, body: unknown): Promise<{
        addedMinutes: number;
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        };
    }>;
    setClientRate(id: string, body: unknown): Promise<{
        hourlyRate: number | null;
        effectiveHourlyRate: number;
    }>;
    get(id: string): Promise<{
        effectiveClientHourlyRateCents: number;
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
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        clientHourlyRateCents: number | null;
        createdAt: Date;
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        } | null;
        reservationsAsClient: ({
            reservation: {
                trainer: {
                    id: string;
                    fullName: string;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: import("../generated/prisma/enums").ReservationStatus;
                startsAt: Date;
                priceCents: number;
                trainerId: string | null;
                endsAt: Date;
                paymentMethod: import("../generated/prisma/enums").PaymentMethod;
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
            reservationId: string;
            creditUsed: boolean;
            creditMinutes: number;
            priceCents: number;
        })[];
    }>;
    list(search?: string): Promise<{
        effectiveClientHourlyRateCents: number;
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
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        clientHourlyRateCents: number | null;
        createdAt: Date;
        credit: {
            balanceMinutes: number;
            reservedMinutes: number;
        } | null;
    }[]>;
}
