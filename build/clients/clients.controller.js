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
const roles_guard_1 = require("../auth/roles.guard");
const roles_1 = require("../auth/roles");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientsController = class ClientsController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async setMembership(id, body) {
        const parsed = zod_1.z.object({ active: zod_1.z.boolean() }).safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException('Membership active must be a boolean.');
        const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true } });
        if (!client)
            throw new common_1.NotFoundException('Client not found.');
        if (!parsed.data.active) {
            await this.prisma.membership.deleteMany({ where: { profileId: id } });
            return { active: false };
        }
        const today = new Date();
        const validFrom = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
        const validUntil = new Date(Date.UTC(today.getUTCFullYear(), 11, 31));
        const membership = await this.prisma.membership.upsert({
            where: { profileId: id },
            create: { profileId: id, type: 'annual', status: 'ACTIVE', validFrom, validUntil },
            update: { status: 'ACTIVE', validFrom, validUntil },
            select: { type: true, status: true, validUntil: true },
        });
        return { active: true, membership };
    }
    async addCredit(id, body) {
        const parsed = zod_1.z.object({ hours: zod_1.z.number().finite().positive().max(1000) }).safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException('Hours must be a positive number no greater than 1000.');
        const minutes = Math.round(parsed.data.hours * 60);
        if (minutes < 1)
            throw new common_1.BadRequestException('The credit amount is too small.');
        const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true } });
        if (!client)
            throw new common_1.NotFoundException('Client not found.');
        const credit = await this.prisma.trainingCredit.upsert({
            where: { profileId: id },
            create: { profileId: id, balanceMinutes: minutes },
            update: { balanceMinutes: { increment: minutes } },
            select: { balanceMinutes: true, reservedMinutes: true },
        });
        return { addedMinutes: minutes, credit };
    }
    async setClientRate(id, body) {
        const parsed = zod_1.z.object({ hourlyRate: zod_1.z.number().finite().nonnegative().max(100000).nullable() }).safeParse(body);
        if (!parsed.success)
            throw new common_1.BadRequestException('Client hourly rate must be a non-negative number or null.');
        const client = await this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true } });
        if (!client)
            throw new common_1.NotFoundException('Client not found.');
        const updated = await this.prisma.profile.update({ where: { id }, data: { clientHourlyRateCents: parsed.data.hourlyRate === null ? null : Math.round(parsed.data.hourlyRate * 100) }, select: { clientHourlyRateCents: true } });
        const settings = await this.prisma.clubSettings.findUnique({ where: { id: 1 } });
        return {
            hourlyRate: updated.clientHourlyRateCents === null ? null : updated.clientHourlyRateCents / 100,
            effectiveHourlyRate: (updated.clientHourlyRateCents ?? settings?.defaultHourlyRateCents ?? 60000) / 100,
        };
    }
    async get(id) {
        const [client, settings] = await Promise.all([
            this.prisma.profile.findFirst({ where: { id, role: 'CLIENT' }, select: { id: true, email: true, fullName: true, phone: true, createdAt: true, clientHourlyRateCents: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } }, reservationsAsClient: { take: 10, orderBy: { reservation: { startsAt: 'desc' } }, include: { reservation: { include: { trainer: { select: { id: true, fullName: true } } } } } } } }),
            this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
        ]);
        if (!client)
            throw new common_1.NotFoundException('Client not found.');
        return { ...client, effectiveClientHourlyRateCents: client.clientHourlyRateCents ?? settings?.defaultHourlyRateCents ?? 60000 };
    }
    async list(search) {
        const term = search?.trim();
        const [clients, settings] = await Promise.all([
            this.prisma.profile.findMany({
                where: { role: 'CLIENT', ...(term ? { OR: [{ fullName: { contains: term, mode: 'insensitive' } }, { email: { contains: term, mode: 'insensitive' } }] } : {}) },
                select: { id: true, email: true, fullName: true, phone: true, createdAt: true, clientHourlyRateCents: true, membership: true, credit: { select: { balanceMinutes: true, reservedMinutes: true } } },
                orderBy: { fullName: 'asc' },
                take: 200,
            }),
            this.prisma.clubSettings.findUnique({ where: { id: 1 } }),
        ]);
        const defaultHourlyRateCents = settings?.defaultHourlyRateCents ?? 60000;
        return clients.map((client) => ({ ...client, effectiveClientHourlyRateCents: client.clientHourlyRateCents ?? defaultHourlyRateCents }));
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Patch)(':id/membership'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "setMembership", null);
__decorate([
    (0, common_1.Patch)(':id/credit'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "addCredit", null);
__decorate([
    (0, common_1.Patch)(':id/rate'),
    (0, roles_1.Roles)('OWNER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "setClientRate", null);
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
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "list", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsController);
