"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainersController = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_1 = require("../auth/roles");
const prisma_service_1 = require("../prisma/prisma.service");
let TrainersController = class TrainersController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async setRate(id, body) {
        const parsed = zod_1.z.object({ hourlyRate: zod_1.z.number().finite().nonnegative().max(100000).nullable() }).safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException('Trainer hourly rate must be a non-negative number or null.');
        const updated = await this.prisma.profile.updateMany({ where: { id, role: { in: ['TRAINER', 'ADMIN'] } }, data: { trainerRateCents: parsed.data.hourlyRate === null ? null : Math.round(parsed.data.hourlyRate * 100) } });
        if (!updated.count)
            throw new common_1.BadRequestException('Trainer not found.');
        const [trainer, settings] = await Promise.all([
            this.prisma.profile.findUnique({ where: { id }, select: { trainerRateCents: true } }),
            this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
        ]);
        const storedHourlyRate = trainer?.trainerRateCents;
        return {
            hourlyRate: storedHourlyRate == null ? null : storedHourlyRate / 100,
            effectiveHourlyRate: (storedHourlyRate ?? settings?.defaultTrainerRateCents ?? 20000) / 100,
        };
    }
    async list(search) {
        const term = search?.trim();
        const [trainers, settings] = await Promise.all([
            this.prisma.profile.findMany({
                where: {
                    role: { in: ['TRAINER', 'ADMIN'] },
                    ...(term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {}),
                },
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    phone: true,
                    role: true,
                    createdAt: true,
                    trainerRateCents: true,
                    reservationsAsTrainer: {
                        where: { startsAt: { gte: new Date() } },
                        orderBy: { startsAt: 'asc' },
                        take: 5,
                        include: { participants: { include: { profile: { select: { id: true, fullName: true } } } } },
                    },
                },
                orderBy: { fullName: 'asc' },
                take: 200,
            }),
            this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
        ]);
        const defaultTrainerRateCents = settings?.defaultTrainerRateCents ?? 20000;
        const trainerIds = trainers.map(({ id }) => id);
        const completedReservations = trainerIds.length
            ? await this.prisma.reservation.findMany({
                where: { trainerId: { in: trainerIds }, status: 'COMPLETED' },
                select: { trainerId: true, startsAt: true, endsAt: true },
            })
            : [];
        const completedByTrainer = new Map();
        for (const reservation of completedReservations) {
            if (!reservation.trainerId)
                continue;
            const stats = completedByTrainer.get(reservation.trainerId) ?? { completed: 0, completedMinutes: 0 };
            stats.completed += 1;
            stats.completedMinutes += (reservation.endsAt.getTime() - reservation.startsAt.getTime()) / 60_000;
            completedByTrainer.set(reservation.trainerId, stats);
        }
        return trainers.map((trainer) => {
            const effectiveTrainerRateCents = trainer.trainerRateCents ?? defaultTrainerRateCents;
            const stats = completedByTrainer.get(trainer.id) ?? { completed: 0, completedMinutes: 0 };
            return {
                ...trainer,
                effectiveTrainerRateCents,
                completed: stats.completed,
                completedMinutes: stats.completedMinutes,
                payCents: Math.round(effectiveTrainerRateCents * stats.completedMinutes / 60),
            };
        });
    }
};
exports.TrainersController = TrainersController;
__decorate([
    (0, common_1.Patch)(':id/rate'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TrainersController.prototype, "setRate", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrainersController.prototype, "list", null);
exports.TrainersController = TrainersController = __decorate([
    (0, common_1.Controller)('trainers'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TrainersController);
