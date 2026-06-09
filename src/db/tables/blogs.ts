import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { json } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: varchar("excerpt", { length: 500 }),
  content: text("content").notNull(),
  coverImage: varchar("cover_image", { length: 500 }),
  status: varchar("status", { length: 20 }).default("draft"),
  author: varchar("author", { length: 100 }),

  // SEO
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: varchar("meta_description", { length: 500 }),
  canonicalUrl: varchar("canonical_url", { length: 500 }),

  ogTitle: varchar("og_title", { length: 255 }),
  ogDescription: varchar("og_description", { length: 500 }),
  ogImage: varchar("og_image", { length: 500 }),
  keywords: text("keywords"), // comma separated
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  summary: text("summary"),
  readingTime: varchar("reading_time", {
    length: 20,
  }),
  embeddings: json("embeddings"),
});