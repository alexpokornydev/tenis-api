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
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        trainerRateCents: number | null;
        createdAt: Date;
    }[]>;
}
