"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
jest.mock('../src/auth/token-verifier', () => ({ TokenVerifier: class TokenVerifier {
    } }));
const auth_guard_1 = require("../src/auth/auth.guard");
describe('AuthGuard', () => {
    it('rejects requests without a bearer token', async () => {
        const verifier = { verify: jest.fn() };
        const prisma = {};
        const guard = new auth_guard_1.AuthGuard(verifier, prisma);
        const request = { headers: {} };
        const context = { switchToHttp: () => ({ getRequest: () => request }) };
        await expect(guard.canActivate(context)).rejects.toBeInstanceOf(common_1.UnauthorizedException);
    });
});
//# sourceMappingURL=auth.guard.spec.js.map