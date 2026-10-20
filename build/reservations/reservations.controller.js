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
const cancellationSchema = zod_1.z.object({ reason: zod_1.z.string().trim().max(500).optional() });
let ReservationsController = class ReservationsController {
    prisma;
    settlement;
    constructor(prisma, settlement) {
        this.prisma = prisma;
        this.settlement = settlement;
    }
    async options() {
        const [clients, trainers, courts] = await Promise.all([
            this.prisma.profile.findMany({ where: { role: 'CLIENT' }, select: { id: true, fullName: true, email: true, membership: { select: { status: true, validUntil: true } }, credit: { select: { balanceMinutes: true, reservedMinutes: true } } }, orderBy: { fullName: 'asc' }, take: 500 }),
            this.prisma.profile.findMany({ where: { role: 'TRAINER' }, select: { id: true, fullName: true }, orderBy: { fullName: 'asc' } }),
            this.prisma.court.findMany({ where: { active: true }, select: { id: true, name: true }, orderBy: { name: 'asc' } }),
        ]);
        return { clients, trainers, courts };
    }
    list(user, from, to) {
        const where = {
            ...(user.role === 'CLIENT' ? { participants: { some: { profileId: user.id } } } : user.role === 'TRAINER' ? { trainerId: user.id } : {}),
            ...(from || to ? { startsAt: { ...(from ? { gte: new Date(from) } : {}), ...(to ? { lt: new Date(to) } : {}) } } : {}),
        };
        return this.prisma.reservation.findMany({ where, include: { court: true, trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } }, orderBy: { startsAt: 'asc' }, take: 200 });
    }
    async get(id, user) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: { court: true, trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } });
        if (!reservation)
            throw new common_1.BadRequestException('Reservation not found.');
        const allowed = user.role === 'OWNER' || user.role === 'ADMIN' || (user.role === 'TRAINER' ? reservation.trainerId === user.id : reservation.participants.some((participant) => participant.profile.id === user.id));
        if (!allowed)
            throw new common_1.BadRequestException('You cannot view this reservation.');
        return reservation;
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
            const overlap = await tx.reservation.findFirst({ where: { status: 'RESERVED', startsAt: { lt: endsAt }, endsAt: { gt: startsAt }, OR: [{ courtId: data.courtId }, ...(data.trainerId ? [{ trainerId: data.trainerId }] : [])] } });
            if (overlap)
                throw new common_1.ConflictException('Court or trainer is already booked for this time.');
            if (data.paymentMethod === 'FREE_TRAINING') {
                for (const participant of participants) {
                    const credit = await tx.trainingCredit.findUnique({ where: { profileId: participant.id } });
                    if (!credit || credit.balanceMinutes - credit.reservedMinutes < duration)
                        throw new common_1.BadRequestException('Client has insufficient available training credit.');
                    const hold = await tx.trainingCredit.updateMany({ where: { profileId: participant.id, balanceMinutes: { gte: duration }, reservedMinutes: { lte: credit.balanceMinutes - duration } }, data: { reservedMinutes: { increment: duration } } });
                    if (hold.count !== 1)
                        throw new common_1.ConflictException('Training credit changed while this reservation was being created.');
                }
            }
            return tx.reservation.create({ data: { courtId: data.courtId, trainerId: data.trainerId, startsAt, endsAt, paymentMethod: data.paymentMethod, priceCents: data.priceCents, capacity: data.capacity, createdBy: user.id, participants: { create: participants.map(({ id }) => ({ profileId: id, priceCents: data.priceCents, creditUsed: data.paymentMethod === 'FREE_TRAINING', creditMinutes: data.paymentMethod === 'FREE_TRAINING' ? duration : 0 })) } }, include: { court: true, participants: { include: { profile: true } } } });
        }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable });
    }
    async requestCancellation(id, body, user) {
        const parsed = cancellationSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
        const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: { participants: { select: { profileId: true } } } });
        if (!reservation || reservation.status !== 'RESERVED')
            throw new common_1.BadRequestException('Active reservation not found.');
        const allowed = user.role === 'TRAINER' ? reservation.trainerId === user.id : reservation.participants.some((participant) => participant.profileId === user.id);
        if (!allowed)
            throw new common_1.BadRequestException('You cannot request cancellation for this reservation.');
        const pending = await this.prisma.cancellationRequest.findFirst({ where: { reservationId: id, requesterId: user.id, status: 'PENDING' } });
        if (pending)
            return pending;
        return this.prisma.cancellationRequest.create({ data: { reservationId: id, requesterId: user.id, reason: parsed.data.reason }, include: { reservation: { include: { court: true } } } });
    }
    async cancel(id, user) {
        return this.prisma.$transaction(async (tx) => {
            const reservation = await tx.reservation.findUnique({ where: { id }, include: { participants: true } });
            if (!reservation)
                throw new common_1.BadRequestException('Reservation not found.');
            if (reservation.status !== 'RESERVED')
                throw new common_1.BadRequestException('Reservation is not active.');
            for (const participant of reservation.participants.filter((item) => item.creditUsed && item.creditMinutes > 0)) {
                await tx.trainingCredit.updateMany({ where: { profileId: participant.profileId, reservedMinutes: { gte: participant.creditMinutes } }, data: { reservedMinutes: { decrement: participant.creditMinutes } } });
            }
            await tx.cancellationRequest.updateMany({ where: { reservationId: id, status: 'PENDING' }, data: { status: 'APPROVED', reviewedBy: user.id, reviewedAt: new Date() } });
            return tx.reservation.update({ where: { id }, data: { status: 'CANCELLED', cancelledAt: new Date(), cancelledBy: user.id }, include: { court: true, participants: { include: { profile: { select: { id: true, fullName: true } } } } } });
        }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable });
    }
    async complete(id, user) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id } });
        if (user.role === 'TRAINER' && reservation?.trainerId !== user.id)
            throw new common_1.BadRequestException('You can only complete your own training session.');
        if (!reservation)
            throw new common_1.BadRequestException('Reservation not found.');
        if (reservation.endsAt > new Date())
            throw new common_1.BadRequestException('Training is not over yet.');
        return this.settlement.settle(id);
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Get)('options'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "options", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER', 'CLIENT'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('from')),
    __param(2, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER', 'CLIENT'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "get", null);
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
    (0, common_1.Post)(':id/cancellation-requests'),
    (0, roles_1.Roles)('CLIENT', 'TRAINER'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "requestCancellation", null);
__decorate([
    (0, common_1.Post)(':id/cancel'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)(':id/complete'),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "complete", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, common_1.Controller)('reservations'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, settlement_service_1.SettlementService])
], ReservationsController);
