import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenVerifier } from './token-verifier';
import { ProfileProvisioner } from './profile-provisioner';
export declare class AuthGuard implements CanActivate {
    private readonly verifier;
    private readonly reflector;
    private readonly provisioner;
    constructor(verifier: TokenVerifier, reflector: Reflector, provisioner: ProfileProvisioner);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
