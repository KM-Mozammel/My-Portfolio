import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const profile = pgTable("profile", {
  id: uuid("id").defaultRandom().primaryKey(),

  fullName: varchar("full_name", { length: 150 }).notNull(),
  title: varchar("title", { length: 150 }).notNull(), // "Full Stack Developer"

  bio: text("bio").notNull(),

  email: varchar("email", { length: 150 }),
  location: varchar("location", { length: 100 }),

  github: varchar("github", { length: 255 }),
  linkedin: varchar("linkedin", { length: 255 }),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});