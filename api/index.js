"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    const config = app.get(config_1.ConfigService);
    const origins = config.get('CORS_ORIGINS', 'http://localhost:8081,http://localhost:19006').split(',').map((origin) => origin.trim()).filter(Boolean);
    app.enableCors({ origin: origins, credentials: true, methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'], allowedHeaders: ['Content-Type', 'Authorization'] });
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
    app.enableShutdownHooks();
    const port = config.get('PORT', 3000);
    const host = config.get('HOST', '0.0.0.0');
    await app.listen(port, host);
}
void bootstrap();
//# sourceMappingURL=main.js.map