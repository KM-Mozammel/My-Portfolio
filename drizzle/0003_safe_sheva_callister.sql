CREATE TABLE "education" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"institution" varchar(200) NOT NULL,
	"degree" varchar(150) NOT NULL,
	"field_of_study" varchar(150),
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "blog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(200) NOT NULL,
	"content" text NOT NULL,
	"author_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_name" varchar(150) NOT NULL,
	"author_role" varchar(150),
	"message" text NOT NULL,
	"project_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sender_name" varchar(150) NOT NULL,
	"sender_email" varchar(150) NOT NULL,
	"subject" varchar(200),
	"body" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
