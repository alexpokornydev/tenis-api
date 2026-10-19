import type { PrismaService } from '../prisma/prisma.service';
export declare class SettlementService {
    private readonly prisma;
    private readonly logger;
    private timer;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    settleEndedReservations(): Promise<void>;
    settleReservation(reservationId: string, now?: Date): Promise<({
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
    }) | null>;
}
