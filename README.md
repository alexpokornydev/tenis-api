# Tenis Plzeň API

Persistent NestJS API for the Expo app. Uses Supabase Auth for identity and Supabase PostgreSQL through Prisma. Deploy this API as a persistent Node service (Railway, Render, Fly.io, or a container host). Do not run the reservation settlement timer in serverless functions.

## Deploy

Set server-only environment variables in your API host:

- `DATABASE_URL`: Supabase Postgres connection string; use the Session pooler URL for IPv4 hosts and append `?sslmode=require` when needed.
- `SUPABASE_URL`: `https://<project-ref>.supabase.co`
- `HOST=0.0.0.0`
- `PORT`: supplied by the host (usually automatic)
- `CORS_ORIGINS`: comma-separated browser origins. Native mobile clients do not require CORS allow-list entries.

Build command: `npm run build`
Start command: `npm run start:prod`
Health check: `/api/v1/health`

The build always runs `prisma generate` before Nest compilation. Deploy database changes with `npm run prisma:migrate` before routing real traffic.

## App

Set the Expo app's public values at build time:

```env
EXPO_PUBLIC_API_URL=https://your-persistent-api-host.example
EXPO_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Only a publishable Supabase key belongs in the app. Keep `DATABASE_URL`, secret keys, and service-role keys on the server.

## Auth and profiles

Clients authenticate through Supabase Auth. The API verifies Supabase JWTs and safely provisions a missing app profile as `CLIENT` on the first authenticated request. The submitted profile name is stored as the full name. The client cannot choose or elevate roles. Promote trainers and staff only through a trusted database/admin action.

Endpoints include public health, authenticated profile (`GET /api/v1/me`), role-protected client directory (`GET /api/v1/clients`, owner/admin only), reservation list/create/settlement, and minute-based hour credit tracking.
