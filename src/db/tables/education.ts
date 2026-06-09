import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const education = pgTable("education", {
  id: uuid("id").defaultRandom().primaryKey(),

  institution: varchar("institution", { length: 200 }).notNull(),
  degree: varchar("degree", { length: 150 }).notNull(),
  fieldOfStudy: varchar("field_of_study", { length: 150 }),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  description: text("description"),
});