ALTER TABLE "messages" ADD COLUMN "is_read" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "status" varchar(50) DEFAULT 'new' NOT NULL;