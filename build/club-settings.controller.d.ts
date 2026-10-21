import { PrismaService } from './prisma/prisma.service';
export declare class ClubSettingsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    get(): Promise<{
        id: number;
        updatedAt: Date;
        defaultHourlyRateCents: number;
        defaultTrainerRateCents: number;
    } | {
        id: number;
        defaultHourlyRateCents: number;
        defaultTrainerRateCents: number;
    }>;
    update(body: unknown): Promise<{
        id: number;
        updatedAt: Date;
        defaultHourlyRateCents: number;
        defaultTrainerRateCents: number;
    }>;
}
