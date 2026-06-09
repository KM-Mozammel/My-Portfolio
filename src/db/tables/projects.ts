import { pgTable, uuid, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { jsonb } from "drizzle-orm/pg-core/columns/jsonb";

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  images: jsonb("images"),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});