import {
  pgTable,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const Settings = pgTable("settings", {
  id: uuid("id").defaultRandom().primaryKey(),

  siteTitle: text("site_title").notNull(),
  siteDescription: text("site_description"),

  email: text("email"),
  phone: text("phone"),
  location: text("location"),

  github: text("github"),
  linkedin: text("linkedin"),
  facebook: text("facebook"),
  twitter: text("twitter"),

  heroTitle: text("hero_title"),
  heroSubtitle: text("hero_subtitle"),

  aboutMe: text("about_me"),

  resumeUrl: text("resume_url"),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});