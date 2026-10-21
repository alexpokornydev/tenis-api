import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
export declare class SettlementService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private readonly logger;
    private timer?;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    settleEnded(): Promise<void>;
    settle(id: string, now?: Date): Promise<{
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
    } | null>;
}
