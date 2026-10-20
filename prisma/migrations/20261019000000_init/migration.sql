CREATE EXTENSION IF NOT EXISTS pgcrypto;
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
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "memberships" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "profile_id" UUID NOT NULL UNIQUE,
  "type" TEXT NOT NULL DEFAULT 'annual', "status" "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
  "valid_from" DATE NOT NULL, "valid_until" DATE, "annual_fee" INTEGER NOT NULL DEFAULT 3000,
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "memberships_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE
);
CREATE TABLE "training_credits" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "profile_id" UUID NOT NULL UNIQUE,
  "balance_minutes" INTEGER NOT NULL DEFAULT 0, "reserved_minutes" INTEGER NOT NULL DEFAULT 0,
  "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "training_credits_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE
);
CREATE TABLE "courts" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "name" TEXT NOT NULL UNIQUE,
  "active" BOOLEAN NOT NULL DEFAULT TRUE, "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "reservations" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "court_id" UUID NOT NULL, "trainer_id" UUID,
  "starts_at" TIMESTAMPTZ(3) NOT NULL, "ends_at" TIMESTAMPTZ(3) NOT NULL,
  "status" "ReservationStatus" NOT NULL DEFAULT 'RESERVED', "payment_method" "PaymentMethod" NOT NULL DEFAULT 'CASH',
  "price_cents" INTEGER NOT NULL DEFAULT 0, "capacity" INTEGER NOT NULL DEFAULT 1, "notes" TEXT,
  "cancelled_at" TIMESTAMPTZ(3), "cancelled_by" UUID, "created_by" UUID NOT NULL,
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "reservations_court_id_fkey" FOREIGN KEY ("court_id") REFERENCES "courts"("id") ON DELETE RESTRICT,
  CONSTRAINT "reservations_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "profiles"("id") ON DELETE SET NULL,
  CONSTRAINT "reservations_creator_id_fkey" FOREIGN KEY ("created_by") REFERENCES "profiles"("id") ON DELETE RESTRICT
);
CREATE TABLE "reservation_participants" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "reservation_id" UUID NOT NULL, "profile_id" UUID NOT NULL,
  "credit_used" BOOLEAN NOT NULL DEFAULT FALSE, "credit_minutes" INTEGER NOT NULL DEFAULT 0, "price_cents" INTEGER NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "reservation_participants_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "reservations"("id") ON DELETE CASCADE,
  CONSTRAINT "reservation_participants_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT,
  CONSTRAINT "reservation_participants_reservation_profile_key" UNIQUE ("reservation_id", "profile_id")
);
CREATE TABLE "training_credit_ledger" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "profile_id" UUID NOT NULL, "participant_id" UUID NOT NULL,
  "minutes" INTEGER NOT NULL, "reason" TEXT NOT NULL, "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "training_credit_ledger_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE,
  CONSTRAINT "training_credit_ledger_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "reservation_participants"("id") ON DELETE CASCADE,
  CONSTRAINT "training_credit_ledger_participant_reason_key" UNIQUE ("participant_id", "reason")
);
CREATE TABLE "cancellation_requests" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "reservation_id" UUID NOT NULL, "requester_id" UUID NOT NULL,
  "reason" TEXT, "status" "CancellationRequestStatus" NOT NULL DEFAULT 'PENDING', "reviewed_by" UUID,
  "reviewed_at" TIMESTAMPTZ(3), "review_note" TEXT, "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "cancellation_requests_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "reservations"("id") ON DELETE CASCADE,
  CONSTRAINT "cancellation_requests_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "profiles"("id") ON DELETE RESTRICT
);
CREATE TABLE "announcements" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(), "title" TEXT NOT NULL, "body" TEXT NOT NULL,
  "audience" TEXT[] NOT NULL DEFAULT ARRAY['CLIENT','TRAINER'], "published_at" TIMESTAMPTZ(3),
  "author_id" UUID NOT NULL, "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "announcements_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "profiles"("id") ON DELETE RESTRICT
);
CREATE INDEX "training_credit_ledger_profile_id_created_at_idx" ON "training_credit_ledger"("profile_id", "created_at");
CREATE INDEX "reservations_starts_at_ends_at_idx" ON "reservations"("starts_at", "ends_at");
CREATE INDEX "reservations_trainer_id_starts_at_idx" ON "reservations"("trainer_id", "starts_at");
CREATE INDEX "reservations_court_id_starts_at_idx" ON "reservations"("court_id", "starts_at");
CREATE INDEX "cancellation_requests_status_created_at_idx" ON "cancellation_requests"("status", "created_at");
CREATE INDEX "announcements_published_at_idx" ON "announcements"("published_at");
