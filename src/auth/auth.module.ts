import { Global, Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { TokenVerifier } from './token-verifier';

@Global()
@Module({ providers: [TokenVerifier, AuthGuard], exports: [AuthGuard, TokenVerifier] })
export class AuthModule {}
