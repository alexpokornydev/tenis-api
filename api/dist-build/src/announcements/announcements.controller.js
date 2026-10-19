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
exports.AnnouncementsController = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const auth_guard_1 = require("../auth/auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const roles_decorator_1 = require("../common/roles.decorator");
const roles_guard_1 = require("../common/roles.guard");
const announcementSchema = zod_1.z.object({ title: zod_1.z.string().trim().min(3).max(150), body: zod_1.z.string().trim().min(1).max(10000), audience: zod_1.z.array(zod_1.z.enum(['CLIENT', 'TRAINER'])).min(1).default(['CLIENT', 'TRAINER']), publishedAt: zod_1.z.iso.datetime().optional() });
let AnnouncementsController = class AnnouncementsController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(user) {
        return this.prisma.announcement.findMany({ where: { publishedAt: { lte: new Date() }, ...(user.role === 'CLIENT' ? { audience: { has: 'CLIENT' } } : user.role === 'TRAINER' ? { audience: { has: 'TRAINER' } } : {}) }, include: { author: { select: { id: true, fullName: true } } }, orderBy: { publishedAt: 'desc' } });
    }
    async create(body, user) {
        const input = announcementSchema.safeParse(body);
        if (!input.success)
            throw new common_1.BadRequestException(input.error.issues.map((issue) => issue.message).join('; '));
        return this.prisma.announcement.create({ data: { ...input.data, publishedAt: input.data.publishedAt ? new Date(input.data.publishedAt) : new Date(), authorId: user.id }, include: { author: { select: { id: true, fullName: true } } } });
    }
};
exports.AnnouncementsController = AnnouncementsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnnouncementsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnnouncementsController.prototype, "create", null);
exports.AnnouncementsController = AnnouncementsController = __decorate([
    (0, common_1.Controller)('announcements'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [Function])
], AnnouncementsController);
//# sourceMappingURL=announcements.controller.js.map