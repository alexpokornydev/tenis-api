import { Global, Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { TokenVerifier } from './token-verifier';
import { ProfileProvisioner } from './profile-provisioner';

@Global()
@Module({ providers: [TokenVerifier, AuthGuard, ProfileProvisioner], exports: [AuthGuard, TokenVerifier, ProfileProvisioner] })
export class AuthModule {}
