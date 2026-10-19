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
let AuthGuard = class AuthGuard {
    verifier;
    prisma;
    constructor(verifier, prisma) {
        this.verifier = verifier;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader?.startsWith('Bearer '))
            throw new common_1.UnauthorizedException('A Supabase access token is required.');
        const token = authHeader.slice('Bearer '.length).trim();
        if (!token)
            throw new common_1.UnauthorizedException('A Supabase access token is required.');
        let subject;
        let email;
        try {
            const verified = await this.verifier.verify(token);
            if (typeof verified.payload.sub !== 'string' || typeof verified.payload.email !== 'string') {
                throw new common_1.UnauthorizedException('The access token is missing required identity claims.');
            }
            subject = verified.payload.sub;
            email = verified.payload.email;
        }
        catch {
            throw new common_1.UnauthorizedException('Supabase access token is invalid or expired.');
        }
        const profile = await this.prisma.profile.findUnique({ where: { id: subject }, select: { id: true, email: true, role: true } });
        if (!profile)
            throw new common_1.UnauthorizedException('No application profile exists for this Supabase user. Ask a club owner to provision access.');
        request.user = { id: profile.id, email: profile.email || email, role: profile.role };
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Function, Function])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map