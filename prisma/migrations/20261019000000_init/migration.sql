CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS btree_gist;

CREATE TYPE "UserRole" AS ENUM ('OWNER', 'ADMIN', 'TRAINER', 'CLIENT');
CREATE TYPE "MembershipStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'SUSPENDED', 'NONE');
CREATE TYPE "ReservationStatus" AS ENUM ('RESERVED', 'CANCELLED', 'COMPLETED');
CREATE TYPE "PaymentMethod" AS ENUM ('FREE_TRAINING', 'CASH', 'CARD', 'BANK_TRANSFER');
CREATE TYPE "CancellationRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

CREATE TABLE "profiles" (
  "id" UUID PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "full_name" TEXT NOT NULL,
  "phone" TEXT,
  "role" "UserRole" NOT NULL DEFAULT 'CLIENT',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "memberships" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "profile_id" UUID NOT NULL UNIQUE REFERENCES "profiles"("id") ON DELETE CASCADE,
  "type" TEXT NOT NULL DEFAULT 'annual',
  "status" "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
  "valid_from" DATE NOT NULL,
  "valid_until" DATE,
  "annual_fee" INTEGER NOT NULL DEFAULT 3000,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "training_credits" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "profile_id" UUID NOT NULL UNIQUE REFERENCES "profiles"("id") ON DELETE CASCADE,
  "balance_minutes" INTEGER NOT NULL DEFAULT 0 CHECK ("balance_minutes" >= 0),
  "reserved_minutes" INTEGER NOT NULL DEFAULT 0 CHECK ("reserved_minutes" >= 0 AND "reserved_minutes" <= "balance_minutes"),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "courts" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL UNIQUE,
  "active" BOOLEAN NOT NULL DEFAULT TRUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "reservations" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "court_id" UUID NOT NULL REFERENCES "courts"("id") ON DELETE RESTRICT,
  "trainer_id" UUID REFERENCES "profiles"("id") ON DELETE SET NULL,
  "starts_at" TIMESTAMPTZ NOT NULL,
  "ends_at" TIMESTAMPTZ NOT NULL,
  "status" "ReservationStatus" NOT NULL DEFAULT 'RESERVED',
  "payment_method" "PaymentMethod" NOT NULL DEFAULT 'CASH',
  "price_cents" INTEGER NOT NULL DEFAULT 0 CHECK ("price_cents" >= 0),
  "capacity" INTEGER NOT NULL DEFAULT 1 CHECK ("capacity" > 0),
  "notes" TEXT,
  "cancelled_at" TIMESTAMPTZ,
  "cancelled_by" UUID,
  "created_by" UUID NOT NULL REFERENCES "profiles"("id") ON DELETE RESTRICT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CHECK ("ends_at" > "starts_at")
);
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_court_no_overlap" EXCLUDE USING gist ("court_id" WITH =, tstzrange("starts_at", "ends_at", '[)') WITH &&) WHERE ("status" = 'RESERVED');
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_trainer_no_overlap" EXCLUDE USING gist ("trainer_id" WITH =, tstzrange("starts_at", "ends_at", '[)') WITH &&) WHERE ("status" = 'RESERVED' AND "trainer_id" IS NOT NULL);
CREATE INDEX "reservations_starts_ends_idx" ON "reservations"("starts_at", "ends_at");
CREATE INDEX "reservations_trainer_starts_idx" ON "reservations"("trainer_id", "starts_at");
CREATE INDEX "reservations_court_starts_idx" ON "reservations"("court_id", "starts_at");
CREATE TABLE "reservation_participants" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "reservation_id" UUID NOT NULL REFERENCES "reservations"("id") ON DELETE CASCADE,
  "profile_id" UUID NOT NULL REFERENCES "profiles"("id") ON DELETE RESTRICT,
  "credit_used" BOOLEAN NOT NULL DEFAULT FALSE,
  "credit_minutes" INTEGER NOT NULL DEFAULT 0 CHECK ("credit_minutes" >= 0),
  "price_cents" INTEGER NOT NULL DEFAULT 0 CHECK ("price_cents" >= 0),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE ("reservation_id", "profile_id")
);
CREATE TABLE "training_credit_ledger" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "profile_id" UUID NOT NULL REFERENCES "profiles"("id") ON DELETE CASCADE,
  "participant_id" UUID NOT NULL REFERENCES "reservation_participants"("id") ON DELETE CASCADE,
  "minutes" INTEGER NOT NULL,
  "reason" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE ("participant_id", "reason")
);
CREATE INDEX "training_credit_ledger_profile_created_idx" ON "training_credit_ledger"("profile_id", "created_at");
CREATE TABLE "cancellation_requests" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "reservation_id" UUID NOT NULL REFERENCES "reservations"("id") ON DELETE CASCADE,
  "requester_id" UUID NOT NULL REFERENCES "profiles"("id") ON DELETE RESTRICT,
  "reason" TEXT,
  "status" "CancellationRequestStatus" NOT NULL DEFAULT 'PENDING',
  "reviewed_by" UUID,
  "reviewed_at" TIMESTAMPTZ,
  "review_note" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "cancellation_requests_status_created_idx" ON "cancellation_requests"("status", "created_at");
CREATE TABLE "announcements" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "audience" TEXT[] NOT NULL DEFAULT ARRAY['CLIENT', 'TRAINER']::TEXT[],
  "published_at" TIMESTAMPTZ,
  "author_id" UUID NOT NULL REFERENCES "profiles"("id") ON DELETE RESTRICT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "announcements_published_idx" ON "announcements"("published_at");
INSERT INTO "courts" ("name") VALUES ('Kurt 1'), ('Kurt 2');
