import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SettlementService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(SettlementService.name);
  private timer?: ReturnType<typeof setInterval>;
  constructor(private readonly prisma: PrismaService) {}
  onModuleInit() { this.timer = setInterval(() => void this.settleEnded(), 60_000); this.timer.unref(); }
  onModuleDestroy() { if (this.timer) clearInterval(this.timer); }

  async settleEnded() {
    const ended = await this.prisma.reservation.findMany({ where: { status: 'RESERVED', endsAt: { lte: new Date() } }, select: { id: true }, take: 100 });
    for (const reservation of ended) {
      try { await this.settle(reservation.id); }
      catch (error) { this.logger.error(`Settlement failed for ${reservation.id}`, error instanceof Error ? error.stack : String(error)); }
    }
  }

  async settle(id: string, now = new Date()) {
    return this.prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.findUnique({ where: { id }, include: { participants: true } });
      if (!reservation || reservation.status !== 'RESERVED' || reservation.endsAt > now) return null;
      for (const participant of reservation.participants.filter((p) => p.creditUsed && p.creditMinutes > 0)) {
        const result = await tx.trainingCredit.updateMany({ where: { profileId: participant.profileId, balanceMinutes: { gte: participant.creditMinutes }, reservedMinutes: { gte: participant.creditMinutes } }, data: { balanceMinutes: { decrement: participant.creditMinutes }, reservedMinutes: { decrement: participant.creditMinutes } } });
        if (!result.count) throw new Error(`Insufficient held balance for ${participant.profileId}`);
        await tx.trainingCreditLedger.create({ data: { profileId: participant.profileId, participantId: participant.id, minutes: -participant.creditMinutes, reason: 'RESERVATION_COMPLETED' } });
      }
      return tx.reservation.update({ where: { id }, data: { status: 'COMPLETED' } });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
  }
}
