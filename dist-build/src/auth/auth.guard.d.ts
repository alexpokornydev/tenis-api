import type { CanActivate, ExecutionContext } from '@nestjs/common';
import type { TokenVerifier } from './token-verifier';
import type { PrismaService } from '../prisma/prisma.service';
export declare class AuthGuard implements CanActivate {
    private readonly verifier;
    private readonly prisma;
    constructor(verifier: TokenVerifier, prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
