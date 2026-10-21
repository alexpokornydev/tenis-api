ALTER TABLE "profiles" ADD COLUMN "trainer_rate_cents" INTEGER, ADD COLUMN "client_hourly_rate_cents" INTEGER;
CREATE TABLE "club_settings" (
  "id" INTEGER NOT NULL DEFAULT 1,
  "default_hourly_rate_cents" INTEGER NOT NULL DEFAULT 60000,
  "default_trainer_rate_cents" INTEGER NOT NULL DEFAULT 20000,
  "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "club_settings_pkey" PRIMARY KEY ("id")
);
