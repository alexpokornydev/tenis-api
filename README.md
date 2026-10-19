# Tenis Plzeň API

NestJS REST API for the Expo app. It uses Supabase Auth for identity, Supabase PostgreSQL for app records, Prisma for typed database access, and server-side profile roles for authorization.

> The API and Expo app now include the REST/RealtIme integration path, but have not been configured against a live Supabase project. No secrets or live project settings are included. Demo mode remains available when backend environment variables are absent.

## Requirements

- Node.js 22 LTS
- npm 10+
- A Supabase project (Auth + PostgreSQL)

## Local setup

```sh
cd api
cp .env.example .env
# Fill in DATABASE_URL and SUPABASE_URL
npm install
npx prisma generate
npx prisma migrate deploy
npm run start:dev
```

Health check: `GET http://localhost:3000/api/v1/health` (public). API routes are under `/api/v1`.

## Supabase configuration

1. Create a Supabase project and enable the desired sign-in provider (email/password is supported by Supabase Auth; credentials are never handled by this API).
2. Copy the **Project URL** into `SUPABASE_URL`.
3. From **Project Settings → Database → Connection string**, use the Session pooler URI for a long-lived Node API or the direct connection string when your host supports IPv6. Add `?sslmode=require` if it is not already present. Keep the database password only in the server's environment.
4. Set `DATABASE_URL` to that connection string. The API uses Prisma's PostgreSQL driver adapter.
5. Apply migrations with `npx prisma migrate deploy`.
6. Set `CORS_ORIGINS` to exact frontend origins. Do not use `*` with credentials in production.
7. Deploy the API with `HOST=0.0.0.0`, a host-provided `PORT`, and TLS terminated by your hosting provider/reverse proxy.

Do **not** put a Supabase service-role key, database password, or API secret into the Expo app. Supabase Auth's public anon/publishable key belongs in the client when the app is later connected; privileged secrets remain server-only.

## Provision users and roles

Sign-up and password login belong to Supabase Auth, not this API. After a user signs up, a trusted provisioning process must create a `profiles` row whose `id` is that Supabase Auth user's UUID. New users should be provisioned with `CLIENT`. A club owner must assign `TRAINER`, `ADMIN`, or `OWNER` from a trusted admin-only operation, Supabase SQL dashboard action, or deployment seed process. Never take a role from a public request or trust a role sent by the app.

The first owner must be provisioned manually by a trusted operator in Supabase SQL/dashboard after Auth signup. Example (replace UUID and details with the actual Auth user):

```sql
INSERT INTO profiles (id, email, full_name, role)
VALUES ('<auth-user-uuid>', '<owner-email>', '<owner-name>', 'OWNER');
```

For a client, also provision membership and available training hours as appropriate. The app displays these as hours; the database stores exact minutes so sessions such as 90 minutes work correctly:

```sql
INSERT INTO memberships (profile_id, valid_from, valid_until, status)
VALUES ('<auth-user-uuid>', CURRENT_DATE, DATE '2026-12-31', 'ACTIVE');
INSERT INTO training_credits (profile_id, balance_minutes)
VALUES ('<auth-user-uuid>', 300); -- 5 total hours
-- New reservations hold some minutes so the client cannot spend the same hours twice.
-- balance_minutes decreases only after the booked training ends.
```

Do not use example values in production without choosing a real membership period and balance. Memberships and free-training balances are distinct.

## Authentication and authorization

All endpoints except `GET /api/v1/health` require `Authorization: Bearer <supabase-access-token>`. The API validates JWT signature/issuer/audience via the Supabase Auth JWKS endpoint, then loads the profile and role from Postgres. It does not accept client-provided user IDs or roles as actor identity. Missing profiles are denied.

Role rules:

- `OWNER`: all admin operations, reservation management, cancellation approvals, client credit adjustments.
- `ADMIN`: reservation and announcement management, cancellation approvals; cannot adjust client free-training credit.
- `TRAINER`: sees own reservations/trainer details and can request cancellation of own assigned training.
- `CLIENT`: sees their own reservations/profile and published announcements for clients; can request cancellation of their reservation.

Role enforcement in this API is a real authorization boundary. UI hiding alone is not.

## Endpoint overview

| Method | Path | Access | Purpose |
|---|---|---|---|
| GET | `/api/v1/health` | Public | Liveness check |
| GET | `/api/v1/me` | Any authenticated | Current profile, membership, credit balance |
| GET | `/api/v1/clients` | Owner/Admin | Search/list clients (client list currently returned unpaginated) |
| GET | `/api/v1/clients/:id` | Owner/Admin or that client | Profile, membership, credits, recent reservations |
| PATCH | `/api/v1/clients/:id/training-credit` | Owner | Adjust free-training balance |
| GET | `/api/v1/trainers` | Owner/Admin | Trainer list and upcoming schedule |
| GET | `/api/v1/trainers/:id` | Owner/Admin or that trainer | Trainer account and reservation history |
| GET | `/api/v1/reservations` | Any authenticated | Role-scoped reservations; optional `from`, `to`, `status` filters |
| GET | `/api/v1/reservations/:id` | Authorized participant/trainer or staff | Reservation detail |
| POST | `/api/v1/reservations` | Owner/Admin | Create reservation after conflict/capacity/hour-balance validation |
| POST | `/api/v1/reservations/:id/complete` | Owner/Admin or assigned Trainer | Complete an ended training and settle its hour balance |
| POST | `/api/v1/reservations/:id/complete` | Owner/Admin or assigned Trainer | Manually complete an ended session; minute balance is deducted atomically |
| DELETE | `/api/v1/reservations/:id` | Owner/Admin | Cancel an active reservation |
| POST | `/api/v1/reservations/:id/cancellation-requests` | Client/Trainer | Store a pending cancellation request |
| GET | `/api/v1/reservations/cancellation-requests/pending` | Owner/Admin | Review queue |
| PATCH | `/api/v1/reservations/cancellation-requests/:requestId` | Owner/Admin | Approve/reject; approval cancels reservation |
| GET | `/api/v1/announcements` | Any authenticated | Published audience-appropriate announcements |
| POST | `/api/v1/announcements` | Owner/Admin | Publish announcement |

Reservation creation body example:

```json
{
  "courtId": "<court-uuid>",
  "trainerId": "<trainer-profile-uuid>",
  "startsAt": "2026-11-21T18:00:00.000Z",
  "endsAt": "2026-11-21T19:30:00.000Z",
  "participantIds": ["<client-profile-uuid>"],
  "paymentMethod": "FREE_TRAINING",
  "priceCents": 0,
  "capacity": 6
}
```

A balance is reserved/validated at booking time but not deducted. After `endsAt`, a server scheduler checks ended reservations once per minute and marks them completed while atomically deducting the exact session duration from each participant who chose training-hours payment. A 60-minute session deducts 60 minutes (1 hour); 90 minutes deducts 90 minutes (1.5 hours). The assigned trainer or staff can also call the completion endpoint after the scheduled end. A transaction and ledger ensure retries cannot double-deduct. If the balance no longer covers the session, settlement is skipped and logged for staff follow-up. Cancelled sessions are never automatically charged.

## Hours and calendar behavior

Training balances are stored in minutes and displayed by the app as hours. A 60-minute reservation paid with training hours deducts 60 minutes (1 hour); a 90-minute reservation deducts 90 minutes (1.5 hours). At booking time the corresponding minutes are held (not deducted), preventing the same hours being promised twice. A native API interval checks every minute for ended reservations, settles them transactionally, deducts from the balance and releases the hold; cancellations release the hold without charging. A ledger supports auditing and idempotent retries. Manual completion is available to the assigned trainer or staff after the end time.

The mobile calendar now loads the selected month through the REST API, subscribes to Supabase Realtime changes for `reservations` and `reservation_participants`, and polls every minute as a fallback. Actual live updates require valid app/API environment variables and a deployed API. After creating your Supabase project, enable both tables for the `supabase_realtime` publication in Supabase Dashboard → Database → Publications. Realtime visibility must be governed by Supabase RLS policies; never expose private club data broadly through the anon key.

## Database, migrations, and operations

- Prisma schema: `prisma/schema.prisma`
- Initial SQL migration: `prisma/migrations/20261019000000_init/migration.sql`
- Run `npm run prisma:migrate:dev -- --name change_name` locally to author later migrations; review generated SQL before deploying.
- Use `npm run prisma:migrate` in deployment.
- `GET /api/v1/health` is a liveness endpoint; configure host health checks to call it.
- Back up Supabase and test restoring before launch.

## Validation

```sh
npm run build
npm test
npm run lint
```

## Not implemented yet / production checklist

- No live Supabase project has been configured. The app can run in demo mode, but real accounts, reservations, hour balances, and realtime require the API/Supabase environment setup described above.
- Provisioning/signup hook for `profiles` and owner-controlled staff role assignment.
- Attendance verification and policy for no-shows, early/late completion, cancellations after a session ends, and credit refunds.
- Payment collection, receipts, refunds, and trainer payroll/statistics.
- Email provider and delivery/retry pipeline for cancellation request notifications (requests are persisted, but no email is sent).
- Pagination/search for management lists, audit log, rate limiting, structured observability, and end-to-end tests against a disposable Supabase project.
- Confirm time-zone policy, court availability rules, capacity semantics, client cancellation limits, membership fees/validity, and retention/privacy policy with the club before production.
