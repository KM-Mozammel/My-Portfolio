ALTER TABLE "testimonials" ADD COLUMN "name" varchar(150) NOT NULL;--> statement-breakpoint
ALTER TABLE "testimonials" ADD COLUMN "position" varchar(150);--> statement-breakpoint
ALTER TABLE "testimonials" ADD COLUMN "company" varchar(150);--> statement-breakpoint
ALTER TABLE "testimonials" ADD COLUMN "photo" text;--> statement-breakpoint
ALTER TABLE "testimonials" ADD COLUMN "rating" integer DEFAULT 5;--> statement-breakpoint
ALTER TABLE "testimonials" ADD COLUMN "featured" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "testimonials" DROP COLUMN "author_name";--> statement-breakpoint
ALTER TABLE "testimonials" DROP COLUMN "author_role";