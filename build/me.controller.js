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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const auth_guard_1 = require("./auth/auth.guard");
const current_user_decorator_1 = require("./auth/current-user.decorator");
const prisma_service_1 = require("./prisma/prisma.service");
let MeController = class MeController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMe(user) {
        try {
            const profile = await this.prisma.profile.findUnique({ where: { id: user.id }, select: { id: true, email: true, fullName: true, phone: true, role: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } } });
            if (!profile)
                throw new common_1.InternalServerErrorException({ message: 'Profile not found after authentication.', code: 'PROFILE_NOT_FOUND' });
            return { id: profile.id, email: profile.email, fullName: profile.fullName, phone: profile.phone, role: profile.role, membership: profile.membership, credit: profile.credit };
        }
        catch (error) {
            if (error instanceof common_1.InternalServerErrorException)
                throw error;
            const prismaError = error;
            const code = typeof prismaError?.code === 'string' ? prismaError.code : typeof prismaError?.meta?.code === 'string' ? prismaError.meta.code : error instanceof Error ? error.name : 'UNKNOWN_PROFILE_ERROR';
            console.error('[me] Profile query failed', { code, error: error instanceof Error ? error.message : String(error) });
            throw new common_1.InternalServerErrorException({ message: 'The API could not load the profile from the database.', code });
        }
    }
    async updateMe(user, body) {
        const parsed = zod_1.z.object({
            email: zod_1.z.string().trim().email().max(320),
            phone: zod_1.z.string().trim().max(40).nullable(),
        }).safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException('Zadejte platný e-mail a telefon do 40 znaků.');
        const existing = await this.prisma.profile.findFirst({ where: { email: parsed.data.email, id: { not: user.id } }, select: { id: true } });
        if (existing)
            throw new common_1.BadRequestException('Tento e-mail už používá jiný účet.');
        const profile = await this.prisma.profile.update({
            where: { id: user.id },
            data: { email: parsed.data.email, phone: parsed.data.phone?.trim() || null },
            include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } },
        });
        return { id: profile.id, email: profile.email, fullName: profile.fullName, phone: profile.phone, role: profile.role, membership: profile.membership, credit: profile.credit };
    }
};
exports.MeController = MeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "updateMe", null);
exports.MeController = MeController = __decorate([
    (0, common_1.Controller)('me'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MeController);
