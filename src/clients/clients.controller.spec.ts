import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service';

jest.mock('../prisma/prisma.service', () => ({ PrismaService: class PrismaService {} }));
jest.mock('../generated/prisma/client', () => ({ UserRole: { CLIENT: 'CLIENT' } }));

import { ClientsController } from './clients.controller';

describe('ClientsController credit management', () => {
  const prisma = {
    profile: { findFirst: jest.fn() },
    trainingCredit: { upsert: jest.fn() },
  };
  const controller = new ClientsController(prisma as unknown as PrismaService);

  beforeEach(() => jest.clearAllMocks());

  it('adds hours to a client credit balance as minutes', async () => {
    prisma.profile.findFirst.mockResolvedValue({ id: 'client-id' });
    prisma.trainingCredit.upsert.mockResolvedValue({ balanceMinutes: 240, reservedMinutes: 60 });

    await expect(controller.addCredit('client-id', { hours: 2 })).resolves.toEqual({
      addedMinutes: 120,
      credit: { balanceMinutes: 240, reservedMinutes: 60 },
    });
    expect(prisma.trainingCredit.upsert).toHaveBeenCalledWith({
      where: { profileId: 'client-id' },
      create: { profileId: 'client-id', balanceMinutes: 120 },
      update: { balanceMinutes: { increment: 120 } },
      select: { balanceMinutes: true, reservedMinutes: true },
    });
  });

  it('rejects a credit change for a missing client', async () => {
    prisma.profile.findFirst.mockResolvedValue(null);
    await expect(controller.addCredit('missing-id', { hours: 1 })).rejects.toBeInstanceOf(NotFoundException);
    expect(prisma.trainingCredit.upsert).not.toHaveBeenCalled();
  });

  it('rejects invalid hour amounts', async () => {
    await expect(controller.addCredit('client-id', { hours: 0 })).rejects.toBeInstanceOf(BadRequestException);
    expect(prisma.profile.findFirst).not.toHaveBeenCalled();
  });
});
