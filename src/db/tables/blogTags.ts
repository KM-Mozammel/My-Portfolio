import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const blogTags = pgTable("blog_tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
});