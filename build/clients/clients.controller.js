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
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_1 = require("../auth/roles");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientsController = class ClientsController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async get(id) {
        const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true, email: true, fullName: true, phone: true, createdAt: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } }, reservationsAsClient: { take: 10, orderBy: { reservation: { startsAt: 'desc' } }, include: { reservation: { include: { court: true, trainer: { select: { id: true, fullName: true } } } } } } } });
        if (!client)
            throw new common_1.NotFoundException('Client not found.');
        return client;
    }
    list(search) {
        const term = search?.trim();
        return this.prisma.profile.findMany({
            where: { role: 'CLIENT', ...(term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {}) },
            select: { id: true, email: true, fullName: true, phone: true, createdAt: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } },
            orderBy: { fullName: 'asc' },
            take: 200,
        });
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "list", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsController);
