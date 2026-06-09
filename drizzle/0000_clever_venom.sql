CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"image_url" text,
	"github_url" text,
	"live_url" text,
	"featured" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL
);
