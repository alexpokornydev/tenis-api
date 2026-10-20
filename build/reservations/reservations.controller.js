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
exports.ReservationsController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const zod_1 = require("zod");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_1 = require("../auth/roles");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const settlement_service_1 = require("./settlement.service");
const createSchema = zod_1.z.object({ courtId: zod_1.z.uuid(), trainerId: zod_1.z.uuid().optional(), startsAt: zod_1.z.iso.datetime(), endsAt: zod_1.z.iso.datetime(), participantIds: zod_1.z.array(zod_1.z.uuid()).min(1).max(12), paymentMethod: zod_1.z.enum(['FREE_TRAINING', 'CASH', 'CARD', 'BANK_TRANSFER']).default('CASH'), priceCents: zod_1.z.number().int().min(0).default(0), capacity: zod_1.z.number().int().min(1).max(12).default(1) });
let ReservationsController = class ReservationsController {
    prisma;
    settlement;
    constructor(prisma, settlement) {
        this.prisma = prisma;
        this.settlement = settlement;
    }
    list(user) {
        const where = user.role === 'CLIENT' ? { participants: { some: { profileId: user.id } } } : user.role === 'TRAINER' ? { trainerId: user.id } : {};
        return this.prisma.reservation.findMany({ where, include: { court: true, trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } }, orderBy: { startsAt: 'asc' }, take: 200 });
    }
    async create(body, user) {
        const parsed = createSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
        const data = parsed.data;
        const startsAt = new Date(data.startsAt), endsAt = new Date(data.endsAt);
        if (startsAt <= new Date() || endsAt <= startsAt)
            throw new common_1.BadRequestException('Reservation must be in the future and end after it starts.');
        const duration = Math.ceil((endsAt.getTime() - startsAt.getTime()) / 60_000);
        return this.prisma.$transaction(async (tx) => {
            const court = await tx.court.findFirst({ where: { id: data.courtId, active: true } });
            if (!court)
                throw new common_1.BadRequestException('Active court not found.');
            const participants = await tx.profile.findMany({ where: { id: { in: data.participantIds }, role: 'CLIENT' }, select: { id: true } });
            if (participants.length !== data.participantIds.length || participants.length > data.capacity)
                throw new common_1.BadRequestException('Invalid participants or capacity.');
            if (data.paymentMethod === 'FREE_TRAINING') {
                for (const participant of participants) {
                    const credit = await tx.trainingCredit.findUnique({ where: { profileId: participant.id } });
                    if (!credit || credit.balanceMinutes - credit.reservedMinutes < duration)
                        throw new common_1.BadRequestException('Client has insufficient available training credit.');
                    await tx.trainingCredit.update({ where: { profileId: participant.id }, data: { reservedMinutes: { increment: duration } } });
                }
            }
            const overlap = await tx.reservation.findFirst({ where: { status: 'RESERVED', startsAt: { lt: endsAt }, endsAt: { gt: startsAt }, OR: [{ courtId: data.courtId }, ...(data.trainerId ? [{ trainerId: data.trainerId }] : [])] } });
            if (overlap)
                throw new common_1.ConflictException('Court or trainer is already booked for this time.');
            return tx.reservation.create({ data: { courtId: data.courtId, trainerId: data.trainerId, startsAt, endsAt, paymentMethod: data.paymentMethod, priceCents: data.priceCents, capacity: data.capacity, createdBy: user.id, participants: { create: participants.map(({ id }) => ({ profileId: id, priceCents: data.priceCents, creditUsed: data.paymentMethod === 'FREE_TRAINING', creditMinutes: data.paymentMethod === 'FREE_TRAINING' ? duration : 0 })) } }, include: { court: true, participants: { include: { profile: true } } } });
        }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable });
    }
    async complete(id) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id } });
        if (!reservation)
            throw new common_1.BadRequestException('Reservation not found.');
        if (reservation.endsAt > new Date())
            throw new common_1.BadRequestException('Training is not over yet.');
        return this.settlement.settle(id);
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER', 'CLIENT'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/complete'),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "complete", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, common_1.Controller)('reservations'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, settlement_service_1.SettlementService])
], ReservationsController);
