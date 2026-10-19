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
var SettlementService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettlementService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
let SettlementService = SettlementService_1 = class SettlementService {
    prisma;
    logger = new common_1.Logger(SettlementService_1.name);
    timer;
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        this.timer = setInterval(() => { void this.settleEndedReservations(); }, 60_000);
        this.timer.unref();
    }
    onModuleDestroy() {
        if (this.timer)
            clearInterval(this.timer);
    }
    async settleEndedReservations() {
        const now = new Date();
        const ended = await this.prisma.reservation.findMany({ where: { status: 'RESERVED', endsAt: { lte: now } }, select: { id: true }, take: 100 });
        for (const { id } of ended) {
            try {
                await this.settleReservation(id, now);
            }
            catch (error) {
                this.logger.error(`Could not settle ended reservation ${id}`, error instanceof Error ? error.stack : String(error));
            }
        }
    }
    async settleReservation(reservationId, now = new Date()) {
        return this.prisma.$transaction(async (tx) => {
            const reservation = await tx.reservation.findUnique({ where: { id: reservationId }, include: { participants: true } });
            if (!reservation || reservation.status !== 'RESERVED' || reservation.endsAt > now)
                return null;
            const creditParticipants = reservation.participants.filter((participant) => participant.creditUsed && participant.creditMinutes > 0);
            const credits = await tx.trainingCredit.findMany({ where: { profileId: { in: creditParticipants.map((participant) => participant.profileId) } }, select: { profileId: true, balanceMinutes: true, reservedMinutes: true } });
            const available = new Map(credits.map((credit) => [credit.profileId, credit]));
            const insufficient = creditParticipants.find((participant) => {
                const credit = available.get(participant.profileId);
                return !credit || credit.balanceMinutes < participant.creditMinutes || credit.reservedMinutes < participant.creditMinutes;
            });
            if (insufficient) {
                this.logger.warn(`Reservation ${reservationId} remains reserved: client ${insufficient.profileId} has insufficient balance or reserved hours.`);
                return null;
            }
            for (const participant of creditParticipants) {
                const debit = await tx.trainingCredit.updateMany({ where: { profileId: participant.profileId, balanceMinutes: { gte: participant.creditMinutes }, reservedMinutes: { gte: participant.creditMinutes } }, data: { balanceMinutes: { decrement: participant.creditMinutes }, reservedMinutes: { decrement: participant.creditMinutes } } });
                if (!debit.count)
                    throw new Error(`Credit balance changed during settlement for client ${participant.profileId}.`);
                await tx.trainingCreditLedger.create({ data: { profileId: participant.profileId, participantId: participant.id, minutes: -participant.creditMinutes, reason: 'RESERVATION_COMPLETED' } });
            }
            const result = await tx.reservation.updateMany({ where: { id: reservationId, status: 'RESERVED', endsAt: { lte: now } }, data: { status: 'COMPLETED' } });
            if (!result.count)
                throw new Error(`Reservation ${reservationId} changed state during settlement.`);
            const settledReservationInclude = {
                participants: {
                    include: {
                        profile: {
                            select: {
                                id: true,
                                fullName: true,
                                credit: { select: { balanceMinutes: true, reservedMinutes: true } },
                            },
                        },
                    },
                },
            };
            return tx.reservation.findUnique({ where: { id: reservationId }, include: settledReservationInclude });
        }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable });
    }
};
exports.SettlementService = SettlementService;
exports.SettlementService = SettlementService = SettlementService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Function])
], SettlementService);
//# sourceMappingURL=settlement.service.js.map