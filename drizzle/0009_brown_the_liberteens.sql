ALTER TABLE "contacts" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "phone" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "location" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "website" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "github" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "linkedin" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "facebook" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "twitter" text;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN "subject";--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN "message";--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN "is_read";