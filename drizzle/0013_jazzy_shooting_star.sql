CREATE TABLE "heroSections" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"greeting" text NOT NULL,
	"name" text NOT NULL,
	"tagline" text,
	"animated_services" jsonb,
	"role_tags" jsonb,
	"primary_button" jsonb,
	"secondary_button" jsonb,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
