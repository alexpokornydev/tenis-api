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
exports.TrainersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const roles_decorator_1 = require("../common/roles.decorator");
const roles_guard_1 = require("../common/roles.guard");
let TrainersController = class TrainersController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list() {
        return this.prisma.profile.findMany({ where: { role: 'TRAINER' }, select: { id: true, email: true, fullName: true, phone: true, reservationsAsTrainer: { where: { startsAt: { gte: new Date() } }, orderBy: { startsAt: 'asc' }, take: 5, include: { court: true, participants: { include: { profile: { select: { id: true, fullName: true } } } } } } }, orderBy: { fullName: 'asc' } });
    }
    async get(id, user) {
        if (user.role === 'TRAINER' && user.id !== id)
            throw new common_1.ForbiddenException();
        if (!['OWNER', 'ADMIN', 'TRAINER'].includes(user.role))
            throw new common_1.ForbiddenException();
        const trainer = await this.prisma.profile.findUnique({ where: { id, role: 'TRAINER' }, select: { id: true, email: true, fullName: true, phone: true, reservationsAsTrainer: { orderBy: { startsAt: 'desc' }, take: 25, include: { court: true, participants: { include: { profile: { select: { id: true, fullName: true } } } } } } } });
        if (!trainer)
            throw new common_1.NotFoundException('Trainer profile not found.');
        return trainer;
    }
};
exports.TrainersController = TrainersController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TrainersController.prototype, "get", null);
exports.TrainersController = TrainersController = __decorate([
    (0, common_1.Controller)('trainers'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [Function])
], TrainersController);
//# sourceMappingURL=trainers.controller.js.map