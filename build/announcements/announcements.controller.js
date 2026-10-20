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
const roles_guard_1 = require("../auth/roles.guard");
const roles_1 = require("../auth/roles");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const announcementSchema = zod_1.z.object({
    title: zod_1.z.string().trim().min(1).max(160),
    body: zod_1.z.string().trim().min(1).max(10_000),
    audience: zod_1.z.array(zod_1.z.enum(['CLIENT', 'TRAINER'])).min(1).default(['CLIENT', 'TRAINER']),
    publishedAt: zod_1.z.iso.datetime().optional(),
});
let AnnouncementsController = class AnnouncementsController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(user) {
        return this.prisma.announcement.findMany({
            where: {
                publishedAt: { lte: new Date() },
                ...(user.role === 'CLIENT' ? { audience: { has: 'CLIENT' } } : user.role === 'TRAINER' ? { audience: { has: 'TRAINER' } } : {}),
            },
            include: { author: { select: { id: true, fullName: true } } },
            orderBy: { publishedAt: 'desc' },
            take: 100,
        });
    }
    create(body, user) {
        const parsed = announcementSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException(parsed.error.issues.map((issue) => issue.message).join('; '));
        return this.prisma.announcement.create({
            data: {
                title: parsed.data.title,
                body: parsed.data.body,
                audience: parsed.data.audience,
                publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : new Date(),
                authorId: user.id,
            },
            include: { author: { select: { id: true, fullName: true } } },
        });
    }
};
exports.AnnouncementsController = AnnouncementsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN', 'TRAINER', 'CLIENT'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnnouncementsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AnnouncementsController.prototype, "create", null);
exports.AnnouncementsController = AnnouncementsController = __decorate([
    (0, common_1.Controller)('announcements'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnnouncementsController);
