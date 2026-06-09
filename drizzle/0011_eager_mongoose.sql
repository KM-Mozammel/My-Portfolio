CREATE TABLE "blog_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	CONSTRAINT "blog_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "meta_title" varchar(255);--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "meta_description" varchar(500);--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "canonical_url" varchar(500);--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "og_title" varchar(255);--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "og_description" varchar(500);--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "og_image" varchar(500);--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "keywords" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "summary" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "reading_time" varchar(20);