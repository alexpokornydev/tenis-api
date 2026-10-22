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
exports.ClubReportController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("./generated/prisma/client");
const auth_guard_1 = require("./auth/auth.guard");
const roles_guard_1 = require("./auth/roles.guard");
const roles_1 = require("./auth/roles");
const current_user_decorator_1 = require("./auth/current-user.decorator");
const prisma_service_1 = require("./prisma/prisma.service");
let ClubReportController = class ClubReportController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async club(from, to) {
        const range = this.range(from, to);
        const settings = await this.prisma.clubSettings.findUnique({ where: { id: 1 } });
        const [total, completed, upcoming, cancelled, members, reservations] = await Promise.all([
            this.prisma.reservation.count({ where: { startsAt: range } }),
            this.prisma.reservation.count({ where: { status: client_1.ReservationStatus.COMPLETED, startsAt: range } }),
            this.prisma.reservation.count({ where: { status: client_1.ReservationStatus.RESERVED, startsAt: { gte: new Date(), lt: range.lt } } }),
            this.prisma.reservation.count({ where: { status: client_1.ReservationStatus.CANCELLED, startsAt: range } }),
            this.prisma.membership.count({ where: { status: 'ACTIVE', OR: [{ validUntil: null }, { validUntil: { gte: new Date() } }] } }),
            this.prisma.reservation.findMany({ where: { status: client_1.ReservationStatus.COMPLETED, startsAt: range }, include: { trainer: { select: { id: true, fullName: true, trainerRateCents: true } }, participants: { include: { profile: { select: { id: true, fullName: true, clientHourlyRateCents: true } } } } } }),
        ]);
        const completedMinutes = reservations.reduce((sum, reservation) => sum + (reservation.endsAt.getTime() - reservation.startsAt.getTime()) / 60_000, 0);
        const revenueCents = reservations.reduce((sum, reservation) => sum + reservation.participants.reduce((inner, participant) => inner + participant.priceCents, 0), 0);
        const trainerPayCents = reservations.reduce((sum, reservation) => {
            if (!reservation.trainer)
                return sum;
            const rate = reservation.trainer.trainerRateCents ?? settings?.defaultTrainerRateCents ?? 0;
            return sum + Math.round(rate * ((reservation.endsAt.getTime() - reservation.startsAt.getTime()) / 3_600_000));
        }, 0);
        return { total, completed, upcoming, cancelled, activeMembers: members, completedMinutes, revenueCents, trainerPayCents };
    }
    async trainer(user, id, from, to) {
        if (user.role === client_1.UserRole.TRAINER && id && id !== user.id)
            throw new common_1.ForbiddenException('Trainers can only view their own report.');
        const trainerId = user.role === client_1.UserRole.TRAINER ? user.id : id;
        if (!trainerId)
            return { total: 0, completed: 0, upcoming: 0, completedMinutes: 0, payCents: 0, reservations: [] };
        const range = this.range(from, to);
        const [trainer, reservations, settings] = await Promise.all([
            this.prisma.profile.findFirst({ where: { id: trainerId, role: { in: [client_1.UserRole.TRAINER, client_1.UserRole.ADMIN] } }, select: { id: true, fullName: true, email: true, phone: true, trainerRateCents: true } }),
            this.prisma.reservation.findMany({ where: { trainerId, startsAt: range }, include: { participants: { include: { profile: { select: { id: true, fullName: true } } } } }, orderBy: { startsAt: 'asc' } }),
            this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
        ]);
        if (!trainer)
            return { trainer: null, total: 0, completed: 0, upcoming: 0, completedMinutes: 0, payCents: 0, reservations: [] };
        const completed = reservations.filter((item) => item.status === client_1.ReservationStatus.COMPLETED);
        const upcoming = reservations.filter((item) => item.status === client_1.ReservationStatus.RESERVED && item.startsAt > new Date());
        const completedMinutes = completed.reduce((sum, item) => sum + (item.endsAt.getTime() - item.startsAt.getTime()) / 60_000, 0);
        const hourlyRate = trainer.trainerRateCents ?? settings?.defaultTrainerRateCents ?? 20000;
        return { trainer: { ...trainer, effectiveTrainerRateCents: hourlyRate }, total: reservations.length, completed: completed.length, upcoming: upcoming.length, completedMinutes, payCents: Math.round(hourlyRate * completedMinutes / 60), reservations };
    }
    range(from, to) {
        const start = from ? new Date(from) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const end = to ? new Date(to) : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
        return { gte: start, lt: end };
    }
};
exports.ClubReportController = ClubReportController;
__decorate([
    (0, common_1.Get)('club'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClubReportController.prototype, "club", null);
__decorate([
    (0, common_1.Get)('trainer'),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('id')),
    __param(2, (0, common_1.Query)('from')),
    __param(3, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], ClubReportController.prototype, "trainer", null);
exports.ClubReportController = ClubReportController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClubReportController);
