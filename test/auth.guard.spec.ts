import { UnauthorizedException } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';

jest.mock('../src/auth/token-verifier', () => ({ TokenVerifier: class TokenVerifier {} }));

import { AuthGuard } from '../src/auth/auth.guard';

describe('AuthGuard', () => {
  it('rejects requests without a bearer token', async () => {
    const verifier = { verify: jest.fn() } as never;
    const prisma = {} as never;
    const guard = new AuthGuard(verifier, prisma);
    const request = { headers: {} };
    const context = { switchToHttp: () => ({ getRequest: () => request }) } as unknown as ExecutionContext;

    await expect(guard.canActivate(context)).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
