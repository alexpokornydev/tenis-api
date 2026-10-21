ALTER TABLE "reservations" DROP CONSTRAINT IF EXISTS "reservations_court_id_fkey";
DROP INDEX IF EXISTS "reservations_court_id_starts_at_idx";
ALTER TABLE "reservations" DROP COLUMN IF EXISTS "court_id";
DROP TABLE IF EXISTS "courts";
