import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const experience = pgTable("experience", {
  id: uuid("id").defaultRandom().primaryKey(),

  company: varchar("company", { length: 150 }).notNull(),
  role: varchar("role", { length: 150 }).notNull(),

  description: text("description").notNull(),

  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),

  location: varchar("location", { length: 100 }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});