# Development notes

## Data model

- Supabase Auth owns credentials and identities.
- `profiles.id` equals the Supabase Auth user UUID. `profiles.role` is the authoritative application role.
- Membership and free-training balance are separate records.
- Reservations hold a court/time/trainer and participant rows. Participant credit use is tracked per participant.
- Cancellation requests are stored separately and reviewed by Owner/Admin.
- Times are stored as UTC `timestamptz`; clients should send ISO-8601 timestamps with timezone and render in the club's chosen zone (`Europe/Prague`).

## Security checks before deployment

- Keep `.env` out of source control; use secret storage from the hosting platform.
- Provision staff roles only using a trusted owner-controlled process.
- Configure exact production CORS origins and HTTPS.
- Use a restricted database user if your Supabase connection setup supports one; avoid exposing database credentials in logs.
- Enable backups, database monitoring, and a tested restore process.
- Add rate limiting at the edge/API host before exposing public internet traffic.
- Review the migrations and Supabase RLS policies together. The API connects server-side and enforces role-scoped access; do not grant broad table access to the client anon key.
- Do not return auth tokens or secret configuration in API responses.

## Concurrency note

Reservation conflict checks run in a serializable Prisma transaction, but a high-contention deployment should also enforce court/trainer time exclusion at the database layer (Postgres exclusion constraints on time ranges) and retry serialization conflicts. Add those constraints in a reviewed migration after deciding how group sessions and court blocks are represented.
