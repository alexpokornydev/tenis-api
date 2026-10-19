import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { RolesGuard } from '../common/roles.guard';
import { AuthGuard } from './auth.guard';
import { TokenVerifier } from './token-verifier';

@Module({ providers: [TokenVerifier, AuthGuard, { provide: APP_GUARD, useClass: AuthGuard }, RolesGuard], exports: [AuthGuard, RolesGuard] })
export class AuthModule {}
