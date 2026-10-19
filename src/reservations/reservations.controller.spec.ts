import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import type { AuthenticatedUser } from '../auth/auth.types';

describe('ReservationsController access and validation', () => {
  const createController = () => new ReservationsController({} as never, {} as never);

  it('does not expose another client reservation', () => {
    const controller = createController();
    const client = { id: 'client-a', role: 'CLIENT' } as AuthenticatedUser;
    expect(() => (controller as unknown as { assertCanView: (r: unknown, u: AuthenticatedUser) => void }).assertCanView({ trainerId: null, participants: [{ profileId: 'client-b' }] }, client)).toThrow(ForbiddenException);
  });

  it('does not expose a trainer assigned to someone else', () => {
    const controller = createController();
    const trainer = { id: 'trainer-a', role: 'TRAINER' } as AuthenticatedUser;
    expect(() => (controller as unknown as { assertCanView: (r: unknown, u: AuthenticatedUser) => void }).assertCanView({ trainerId: 'trainer-b', participants: [] }, trainer)).toThrow(ForbiddenException);
  });

  it('rejects invalid date filters', () => {
    const controller = createController();
    expect(() => (controller as unknown as { validDate: (value: string) => Date }).validDate('not-a-date')).toThrow(BadRequestException);
  });
});
