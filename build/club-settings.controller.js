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
exports.ClubSettingsController = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const auth_guard_1 = require("./auth/auth.guard");
const roles_guard_1 = require("./auth/roles.guard");
const roles_1 = require("./auth/roles");
const prisma_service_1 = require("./prisma/prisma.service");
const settingsSchema = zod_1.z.object({ defaultHourlyRate: zod_1.z.number().finite().nonnegative().max(100000), defaultTrainerRate: zod_1.z.number().finite().nonnegative().max(100000) });
let ClubSettingsController = class ClubSettingsController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async get() {
        const settings = await this.prisma.clubSettings.findUnique({ where: { id: 1 } });
        return settings ?? { id: 1, defaultHourlyRateCents: 60000, defaultTrainerRateCents: 20000 };
    }
    async update(body) {
        const parsed = settingsSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
        return this.prisma.clubSettings.upsert({
            where: { id: 1 },
            create: { id: 1, defaultHourlyRateCents: Math.round(parsed.data.defaultHourlyRate * 100), defaultTrainerRateCents: Math.round(parsed.data.defaultTrainerRate * 100) },
            update: { defaultHourlyRateCents: Math.round(parsed.data.defaultHourlyRate * 100), defaultTrainerRateCents: Math.round(parsed.data.defaultTrainerRate * 100) },
        });
    }
};
exports.ClubSettingsController = ClubSettingsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClubSettingsController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClubSettingsController.prototype, "update", null);
exports.ClubSettingsController = ClubSettingsController = __decorate([
    (0, common_1.Controller)('settings'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClubSettingsController);
