import {
    pgTable,
    uuid,
    text,
    jsonb,
    timestamp
} from "drizzle-orm/pg-core";

export const heroSections = pgTable("hero_sections", {
    id: uuid("id").defaultRandom().primaryKey(),

    greeting: text("greeting").notNull(),

    name: text("name").notNull(),

    tagline: text("tagline"),

    animatedServices: jsonb("animated_services"),

    roleTags: jsonb("role_tags"),

    primaryButton: jsonb("primary_button"),

    secondaryButton: jsonb("secondary_button"),

    createdAt: timestamp("created_at").defaultNow(),

    updatedAt: timestamp("updated_at").defaultNow(),
});