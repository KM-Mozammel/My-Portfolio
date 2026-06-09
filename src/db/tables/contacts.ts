import {
  pgTable,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),

  email: text("email"),
  phone: text("phone"),
  location: text("location"),

  website: text("website"),

  github: text("github"),
  linkedin: text("linkedin"),
  facebook: text("facebook"),
  twitter: text("twitter"),

  updatedAt: timestamp("updated_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});