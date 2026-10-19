import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const config = app.get(ConfigService);
  const vercelRuntime = config.get<string>('VERCEL') === '1';
  const origins = config.get<string>('CORS_ORIGINS', 'http://localhost:8081,http://localhost:19006').split(',').map((origin) => origin.trim()).filter(Boolean);
  const allowedOrigin = (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
    if (vercelRuntime || !origin || origins.includes(origin)) callback(null, true);
    else callback(new Error('Origin is not allowed by CORS.'));
  };

  app.enableCors({ origin: allowedOrigin, credentials: true, methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'], allowedHeaders: ['Content-Type', 'Authorization', 'apikey'] });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
  app.enableShutdownHooks();
  const port = config.get<number>('PORT', 3000);
  const host = config.get<string>('HOST', '0.0.0.0');
  if (config.get<string>('VERCEL') === '1') {
    await app.init();
    return app;
  }
  await app.listen(port, host);
  return app;
}

void bootstrap();

export { bootstrap };
