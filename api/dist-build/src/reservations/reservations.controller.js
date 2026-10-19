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
const current_user_decorator_1 = require("../auth/current-user.decorator");
const roles_decorator_1 = require("../common/roles.decorator");
const roles_guard_1 = require("../common/roles.guard");
const createReservationSchema = zod_1.z.object({
    courtId: zod_1.z.uuid(), trainerId: zod_1.z.uuid().optional(), startsAt: zod_1.z.iso.datetime(), endsAt: zod_1.z.iso.datetime(),
    participantIds: zod_1.z.array(zod_1.z.uuid()).min(1).max(12), paymentMethod: zod_1.z.enum(['FREE_TRAINING', 'CASH', 'CARD', 'BANK_TRANSFER']).default('CASH'),
    priceCents: zod_1.z.number().int().min(0).default(0), capacity: zod_1.z.number().int().min(1).max(12).default(1), notes: zod_1.z.string().max(1000).optional(),
});
const requestCancellationSchema = zod_1.z.object({ reason: zod_1.z.string().trim().max(1000).optional() });
const reviewSchema = zod_1.z.object({ decision: zod_1.z.enum(['APPROVED', 'REJECTED']), note: zod_1.z.string().trim().max(1000).optional() });
let ReservationsController = class ReservationsController {
    prisma;
    settlement;
    constructor(prisma, settlement) {
        this.prisma = prisma;
        this.settlement = settlement;
    }
    listCancellationRequests() {
        return this.prisma.cancellationRequest.findMany({ where: { status: 'PENDING' }, include: { requester: { select: { id: true, fullName: true, email: true } }, reservation: { include: { court: true, trainer: { select: { id: true, fullName: true } }, participants: { include: { profile: { select: { id: true, fullName: true } } } } } } }, orderBy: { createdAt: 'asc' } });
    }
    async list(user, from, to, status) {
        const where = {};
        if (from || to)
            where.startsAt = { ...(from ? { gte: this.validDate(from) } : {}), ...(to ? { lte: this.validDate(to) } : {}) };
        if (status) {
            if (!['RESERVED', 'CANCELLED', 'COMPLETED'].includes(status))
                throw new common_1.BadRequestException('status must be RESERVED, CANCELLED, or COMPLETED.');
            where.status = status;
        }
        if (user.role === 'CLIENT')
            where.participants = { some: { profileId: user.id } };
        if (user.role === 'TRAINER')
            where.trainerId = user.id;
        return this.prisma.reservation.findMany({ where, include: this.reservationInclude, orderBy: { startsAt: 'asc' }, take: 200 });
    }
    async get(id, user) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: this.reservationInclude });
        if (!reservation)
            throw new common_1.NotFoundException('Reservation not found.');
        this.assertCanView(reservation, user);
        return reservation;
    }
    async create(body, user) {
        const input = createReservationSchema.safeParse(body);
        if (!input.success)
            throw new common_1.BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
        const data = input.data;
        if (new Set(data.participantIds).size !== data.participantIds.length)
            throw new common_1.BadRequestException('participantIds must not contain duplicates.');
        const startsAt = new Date(data.startsAt);
        const endsAt = new Date(data.endsAt);
        if (endsAt <= startsAt)
            throw new common_1.BadRequestException('endsAt must be later than startsAt.');
        if (startsAt <= new Date())
            throw new common_1.BadRequestException('Reservations must start in the future.');
        const durationMinutes = Math.ceil((endsAt.getTime() - startsAt.getTime()) / 60_000);
        return this.prisma.$transaction(async (tx) => {
            const court = await tx.court.findFirst({ where: { id: data.courtId, active: true } });
            if (!court)
                throw new common_1.NotFoundException('Active court not found.');
            const participants = await tx.profile.findMany({ where: { id: { in: data.participantIds }, role: 'CLIENT' }, select: { id: true } });
            if (participants.length !== data.participantIds.length)
                throw new common_1.BadRequestException('Every participant must have a client profile.');
            if (participants.length > data.capacity)
                throw new common_1.BadRequestException('Participant count exceeds reservation capacity.');
            if (data.paymentMethod === 'FREE_TRAINING') {
                const credits = await tx.trainingCredit.findMany({ where: { profileId: { in: data.participantIds } }, select: { profileId: true, balanceMinutes: true, reservedMinutes: true } });
                const balanceByProfile = new Map(credits.map((credit) => [credit.profileId, credit]));
                for (const profileId of data.participantIds) {
                    const credit = balanceByProfile.get(profileId);
                    const hold = await tx.trainingCredit.updateMany({ where: { profileId, balanceMinutes: { gte: durationMinutes }, reservedMinutes: { lte: (credit?.balanceMinutes ?? 0) - (credit?.reservedMinutes ?? 0) - durationMinutes } }, data: { reservedMinutes: { increment: durationMinutes } } });
                    if (!hold.count)
                        throw new common_1.BadRequestException('Every participant must have enough unreserved training hours for this reservation.');
                }
            }
            if (data.trainerId) {
                const trainer = await tx.profile.findFirst({ where: { id: data.trainerId, role: 'TRAINER' }, select: { id: true } });
                if (!trainer)
                    throw new common_1.BadRequestException('trainerId must belong to a trainer profile.');
            }
            const conflict = await tx.reservation.findFirst({ where: { status: 'RESERVED', startsAt: { lt: endsAt }, endsAt: { gt: startsAt }, OR: [{ courtId: data.courtId }, ...(data.trainerId ? [{ trainerId: data.trainerId }] : [])] }, select: { id: true } });
            if (conflict)
                throw new common_1.ConflictException('The court or trainer already has a reservation in this time range.');
            return tx.reservation.create({ data: { courtId: data.courtId, trainerId: data.trainerId, startsAt, endsAt, paymentMethod: data.paymentMethod, priceCents: data.priceCents, capacity: data.capacity, notes: data.notes, createdBy: user.id, participants: { create: participants.map(({ id }) => ({ profileId: id, priceCents: data.priceCents, creditUsed: data.paymentMethod === 'FREE_TRAINING', creditMinutes: data.paymentMethod === 'FREE_TRAINING' ? durationMinutes : 0 })) } }, include: this.reservationInclude });
        }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable });
    }
    async complete(id, user) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id }, select: { id: true, trainerId: true, endsAt: true, status: true } });
        if (!reservation)
            throw new common_1.NotFoundException('Reservation not found.');
        if (user.role === 'TRAINER' && reservation.trainerId !== user.id)
            throw new common_1.ForbiddenException();
        if (reservation.status === 'CANCELLED')
            throw new common_1.ConflictException('Cancelled reservations cannot be completed.');
        if (reservation.endsAt > new Date())
            throw new common_1.BadRequestException('A training can only be completed after its scheduled end time.');
        return this.settlement.settleReservation(id);
    }
    async cancel(id, user) {
        return this.prisma.$transaction(async (tx) => {
            const reservation = await tx.reservation.findUnique({ where: { id }, include: { participants: true } });
            if (!reservation || reservation.status !== 'RESERVED')
                throw new common_1.NotFoundException('Active reservation not found.');
            const result = await tx.reservation.updateMany({ where: { id, status: 'RESERVED' }, data: { status: 'CANCELLED', cancelledAt: new Date(), cancelledBy: user.id } });
            if (!result.count)
                throw new common_1.NotFoundException('Active reservation not found.');
            await this.releaseCreditHolds(tx, reservation.participants);
            return tx.reservation.findUnique({ where: { id }, include: this.reservationInclude });
        });
    }
    async requestCancellation(id, body, user) {
        const input = requestCancellationSchema.safeParse(body);
        if (!input.success)
            throw new common_1.BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
        const reservation = await this.prisma.reservation.findUnique({ where: { id }, include: { participants: { select: { profileId: true } } } });
        if (!reservation || reservation.status !== 'RESERVED')
            throw new common_1.NotFoundException('Active reservation not found.');
        const allowed = user.role === 'TRAINER' ? reservation.trainerId === user.id : reservation.participants.some((participant) => participant.profileId === user.id);
        if (!allowed)
            throw new common_1.ForbiddenException();
        const pending = await this.prisma.cancellationRequest.findFirst({ where: { reservationId: id, requesterId: user.id, status: 'PENDING' } });
        if (pending)
            throw new common_1.ConflictException('A pending cancellation request already exists.');
        return this.prisma.cancellationRequest.create({ data: { reservationId: id, requesterId: user.id, reason: input.data.reason }, include: { requester: { select: { id: true, fullName: true, email: true } }, reservation: { include: { court: true } } } });
    }
    async reviewCancellationRequest(requestId, body, user) {
        const input = reviewSchema.safeParse(body);
        if (!input.success)
            throw new common_1.BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
        return this.prisma.$transaction(async (tx) => {
            const request = await tx.cancellationRequest.findUnique({ where: { id: requestId }, include: { reservation: true } });
            if (!request || request.status !== 'PENDING')
                throw new common_1.NotFoundException('Pending cancellation request not found.');
            if (input.data.decision === 'APPROVED') {
                const participants = await tx.reservationParticipant.findMany({ where: { reservationId: request.reservationId } });
                const cancelled = await tx.reservation.updateMany({ where: { id: request.reservationId, status: 'RESERVED' }, data: { status: 'CANCELLED', cancelledAt: new Date(), cancelledBy: user.id } });
                if (!cancelled.count)
                    throw new common_1.ConflictException('The reservation is no longer active and cannot be cancelled.');
                await this.releaseCreditHolds(tx, participants);
            }
            return tx.cancellationRequest.update({ where: { id: requestId }, data: { status: input.data.decision, reviewedBy: user.id, reviewedAt: new Date(), reviewNote: input.data.note } });
        });
    }
    async releaseCreditHolds(tx, participants) {
        for (const participant of participants) {
            if (!participant.creditUsed || participant.creditMinutes <= 0)
                continue;
            await tx.trainingCredit.updateMany({ where: { profileId: participant.profileId, reservedMinutes: { gte: participant.creditMinutes } }, data: { reservedMinutes: { decrement: participant.creditMinutes } } });
        }
    }
    reservationInclude = { court: true, trainer: { select: { id: true, fullName: true, email: true } }, participants: { include: { profile: { select: { id: true, fullName: true, email: true, phone: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } } } } };
    assertCanView(reservation, user) {
        if (user.role === 'CLIENT' && !reservation.participants.some((participant) => participant.profileId === user.id))
            throw new common_1.ForbiddenException();
        if (user.role === 'TRAINER' && reservation.trainerId !== user.id)
            throw new common_1.ForbiddenException();
    }
    validDate(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime()))
            throw new common_1.BadRequestException('Invalid date filter.');
        return date;
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Get)('cancellation-requests/pending'),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "listCancellationRequests", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('from')),
    __param(2, (0, common_1.Query)('to')),
    __param(3, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/complete'),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN', 'TRAINER'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "complete", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)(':id/cancellation-requests'),
    (0, roles_decorator_1.Roles)('CLIENT', 'TRAINER'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "requestCancellation", null);
__decorate([
    (0, common_1.Patch)('cancellation-requests/:requestId'),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('requestId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "reviewCancellationRequest", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, common_1.Controller)('reservations'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [Function, Function])
], ReservationsController);
//# sourceMappingURL=reservations.controller.js.map