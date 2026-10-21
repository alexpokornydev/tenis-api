"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const auth_guard_1 = require("./auth/auth.guard");
const auth_module_1 = require("./auth/auth.module");
const clients_module_1 = require("./clients/clients.module");
const prisma_module_1 = require("./prisma/prisma.module");
const health_controller_1 = require("./health.controller");
const me_controller_1 = require("./me.controller");
const reservations_module_1 = require("./reservations/reservations.module");
const announcements_module_1 = require("./announcements/announcements.module");
const trainers_module_1 = require("./trainers/trainers.module");
const club_settings_controller_1 = require("./club-settings.controller");
const club_report_controller_1 = require("./club-report.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }), throttler_1.ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]), prisma_module_1.PrismaModule, auth_module_1.AuthModule, clients_module_1.ClientsModule, trainers_module_1.TrainersModule, reservations_module_1.ReservationsModule, announcements_module_1.AnnouncementsModule],
        controllers: [health_controller_1.HealthController, me_controller_1.MeController, club_settings_controller_1.ClubSettingsController, club_report_controller_1.ClubReportController],
        providers: [{ provide: core_1.APP_GUARD, useClass: auth_guard_1.AuthGuard }, { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard }],
    })
], AppModule);
