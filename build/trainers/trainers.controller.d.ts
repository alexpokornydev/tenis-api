import { PrismaService } from '../prisma/prisma.service';
export declare class TrainersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    setRate(id: string, body: unknown): Promise<{
        hourlyRate: number | null;
        effectiveHourlyRate: number;
    }>;
    list(search?: string): Promise<{
        effectiveTrainerRateCents: number;
        completed: number;
        completedMinutes: number;
        payCents: number;
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        trainerRateCents: number | null;
        role: import("../generated/prisma/enums").UserRole;
        createdAt: Date;
        reservationsAsTrainer: ({
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
        })[];
    }[]>;
}
