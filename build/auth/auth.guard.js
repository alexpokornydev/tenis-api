"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const token_verifier_1 = require("./token-verifier");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
const profile_provisioner_1 = require("./profile-provisioner");
let AuthGuard = class AuthGuard {
    verifier;
    prisma;
    reflector;
    provisioner;
    constructor(verifier, prisma, reflector, provisioner) {
        this.verifier = verifier;
        this.prisma = prisma;
        this.reflector = reflector;
        this.provisioner = provisioner;
    }
    async canActivate(context) {
        if (this.reflector.get('isPublic', context.getHandler()))
            return true;
        const request = context.switchToHttp().getRequest();
        const header = request.headers.authorization;
        if (!header?.startsWith('Bearer '))
            throw new common_1.UnauthorizedException('Supabase access token required.');
        let verified;
        try {
            verified = await this.verifier.verify(header.slice(7).trim());
        }
        catch {
            throw new common_1.UnauthorizedException('Supabase access token is invalid or expired. Sign in again and retry.');
        }
        const id = verified.payload.sub;
        const email = verified.payload.email;
        const appMetadata = verified.payload.app_metadata;
        const metadataRole = appMetadata?.role;
        const role = metadataRole === client_1.UserRole.OWNER || metadataRole === client_1.UserRole.ADMIN || metadataRole === client_1.UserRole.TRAINER || metadataRole === client_1.UserRole.CLIENT
            ? metadataRole
            : undefined;
        if (typeof id !== 'string' || typeof email !== 'string') {
            throw new common_1.UnauthorizedException('Supabase token does not include a user id and email.');
        }
        const metadata = verified.payload.user_metadata;
        try {
            const profile = await this.provisioner.ensureProfile({
                id,
                email,
                fullName: metadata?.full_name,
                role,
            });
            request.user = { id: profile.id, email: profile.email || email, role: profile.role, fullName: profile.fullName };
            return true;
        }
        catch (error) {
            const prismaError = error;
            const code = typeof prismaError?.code === 'string' ? prismaError.code : typeof prismaError?.meta?.code === 'string' ? prismaError.meta.code : error instanceof Error ? error.name : 'UNKNOWN_DATABASE_ERROR';
            console.error('[auth] Profile provisioning failed', { code, error: error instanceof Error ? error.message : String(error) });
            throw new common_1.InternalServerErrorException({
                message: 'Access token is valid, but the API could not create or load the profile. Check database connectivity and required migrations.',
                code,
            });
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_verifier_1.TokenVerifier, prisma_service_1.PrismaService, core_1.Reflector, profile_provisioner_1.ProfileProvisioner])
], AuthGuard);
