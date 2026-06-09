CREATE TABLE "site_settings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"site_title" text NOT NULL,
	"site_description" text,
	"email" text,
	"phone" text,
	"location" text,
	"github" text,
	"linkedin" text,
	"facebook" text,
	"twitter" text,
	"hero_title" text,
	"hero_subtitle" text,
	"about_me" text,
	"resume_url" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
