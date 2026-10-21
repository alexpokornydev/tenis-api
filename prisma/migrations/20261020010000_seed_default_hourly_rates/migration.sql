ALTER TABLE "club_settings" ALTER COLUMN "default_hourly_rate_cents" SET DEFAULT 60000;
ALTER TABLE "club_settings" ALTER COLUMN "default_trainer_rate_cents" SET DEFAULT 20000;
INSERT INTO "club_settings" ("id", "default_hourly_rate_cents", "default_trainer_rate_cents", "updated_at") VALUES (1, 60000, 20000, CURRENT_TIMESTAMP) ON CONFLICT ("id") DO NOTHING;
