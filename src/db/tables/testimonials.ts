import { pgTable, uuid, varchar, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";

export const testimonials = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 150 }).notNull(),
  position: varchar("position", { length: 150 }),
  company: varchar("company", { length: 150 }),
  photo: text("photo"), // URL

  message: text("message").notNull(),

  rating: integer("rating").default(5), // 1–5 stars
  featured: boolean("featured").default(false),

  projectId: uuid("project_id"), // optional FK → projects.id

  createdAt: timestamp("created_at").defaultNow().notNull(),
});