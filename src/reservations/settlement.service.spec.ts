import { SettlementService } from './settlement.service';

describe('SettlementService', () => {
  it('runs the ended reservation scan with the current server time', async () => {
    const prisma = { reservation: { findMany: jest.fn().mockResolvedValue([]) } };
    const service = new SettlementService(prisma as never);
    await service.settleEndedReservations();
    expect(prisma.reservation.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { status: 'RESERVED', endsAt: { lte: expect.any(Date) } }, take: 100 }));
  });

  it('deducts exact hour-minutes and releases held hours in a transaction once the session ends', async () => {
    const participant = { id: 'participant-id', profileId: 'client-id', creditUsed: true, creditMinutes: 60 };
    const reservation = { id: 'reservation-id', status: 'RESERVED', endsAt: new Date('2026-01-01T11:00:00.000Z'), participants: [participant] };
    const tx = {
      reservation: {
        findUnique: jest.fn().mockResolvedValueOnce(reservation).mockResolvedValueOnce({ ...reservation, status: 'COMPLETED' }),
        updateMany: jest.fn().mockResolvedValue({ count: 1 }),
      },
      trainingCredit: {
        findMany: jest.fn().mockResolvedValue([{ profileId: 'client-id', balanceMinutes: 240, reservedMinutes: 60 }]),
        updateMany: jest.fn().mockResolvedValue({ count: 1 }),
      },
      trainingCreditLedger: { create: jest.fn().mockResolvedValue({}) },
    };
    const prisma = { $transaction: jest.fn((callback: (txArg: typeof tx) => unknown) => callback(tx)) };
    const service = new SettlementService(prisma as never);
    await service.settleReservation('reservation-id', new Date('2026-01-01T11:01:00.000Z'));

    expect(tx.trainingCredit.updateMany).toHaveBeenCalledWith({ where: { profileId: 'client-id', balanceMinutes: { gte: 60 }, reservedMinutes: { gte: 60 } }, data: { balanceMinutes: { decrement: 60 }, reservedMinutes: { decrement: 60 } } });
    expect(tx.trainingCreditLedger.create).toHaveBeenCalledWith({ data: { profileId: 'client-id', participantId: 'participant-id', minutes: -60, reason: 'RESERVATION_COMPLETED' } });
    expect(tx.reservation.updateMany).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'reservation-id', status: 'RESERVED', endsAt: { lte: expect.any(Date) } }, data: { status: 'COMPLETED' } }));
  });
});
