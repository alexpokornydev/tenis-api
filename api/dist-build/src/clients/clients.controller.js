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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const auth_guard_1 = require("../auth/auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const roles_decorator_1 = require("../common/roles.decorator");
const roles_guard_1 = require("../common/roles.guard");
const adjustCreditsSchema = zod_1.z.object({ adjustmentMinutes: zod_1.z.number().int().min(-60000).max(60000), reason: zod_1.z.string().trim().min(3).max(300) });
let ClientsController = class ClientsController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list() {
        return this.prisma.profile.findMany({ where: { role: 'CLIENT' }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } }, orderBy: { fullName: 'asc' } });
    }
    async get(id, user) {
        if (user.role === 'CLIENT' && user.id !== id)
            throw new common_1.ForbiddenException();
        if (!['OWNER', 'ADMIN', 'CLIENT'].includes(user.role))
            throw new common_1.ForbiddenException();
        const profile = await this.prisma.profile.findUnique({ where: { id, role: 'CLIENT' }, include: { membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } }, reservationsAsClient: { take: 10, orderBy: { reservation: { startsAt: 'desc' } }, include: { reservation: { include: { court: true, trainer: { select: { id: true, fullName: true } } } } } } } });
        if (!profile)
            throw new common_1.NotFoundException('Client profile not found.');
        return profile;
    }
    async adjustCredits(id, body) {
        const parsed = adjustCreditsSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
        return this.prisma.$transaction(async (tx) => {
            const client = await tx.profile.findUnique({ where: { id, role: 'CLIENT' }, include: { credit: true } });
            if (!client)
                throw new common_1.NotFoundException('Client profile not found.');
            const current = client.credit?.balanceMinutes ?? 0;
            const reserved = client.credit?.reservedMinutes ?? 0;
            const balanceMinutes = current + parsed.data.adjustmentMinutes;
            if (balanceMinutes < reserved)
                throw new common_1.BadRequestException('The new hours balance cannot be below the hours reserved for upcoming sessions.');
            return tx.trainingCredit.upsert({ where: { profileId: id }, create: { profileId: id, balanceMinutes }, update: { balanceMinutes } });
        });
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)(':id/training-credit'),
    (0, roles_decorator_1.Roles)('OWNER'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "adjustCredits", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [Function])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map