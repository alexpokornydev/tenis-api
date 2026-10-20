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
let AuthGuard = class AuthGuard {
    verifier;
    prisma;
    reflector;
    constructor(verifier, prisma, reflector) {
        this.verifier = verifier;
        this.prisma = prisma;
        this.reflector = reflector;
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
        if (typeof id !== 'string' || typeof email !== 'string') {
            throw new common_1.UnauthorizedException('Supabase token does not include a user id and email.');
        }
        const metadata = verified.payload.user_metadata;
        try {
            const profile = await this.prisma.$transaction(async (tx) => {
                const current = await tx.profile.upsert({
                    where: { id },
                    update: { email },
                    create: { id, email, fullName: metadata?.full_name?.trim() || email.split('@')[0], role: 'CLIENT' },
                    select: { id: true, email: true, role: true },
                });
                await tx.trainingCredit.upsert({
                    where: { profileId: current.id },
                    update: {},
                    create: { profileId: current.id },
                });
                return current;
            });
            request.user = { id: profile.id, email: profile.email || email, role: profile.role };
            return true;
        }
        catch (error) {
            const prismaError = error;
            throw new common_1.InternalServerErrorException({
                message: 'Access token is valid, but the API could not create or load the profile. Check database connectivity and required migrations.',
                code: typeof prismaError?.code === 'string' ? prismaError.code : typeof prismaError?.meta?.code === 'string' ? prismaError.meta.code : error instanceof Error ? error.name : 'UNKNOWN_DATABASE_ERROR',
            });
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_verifier_1.TokenVerifier, prisma_service_1.PrismaService, core_1.Reflector])
], AuthGuard);
