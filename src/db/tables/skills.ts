import { pgTable, uuid, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const skills = pgTable("skills", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 100 }).notNull(),
  category: varchar("category", { length: 100 }),

  level: integer("level").default(50),

  icon: varchar("icon", { length: 255 }), // ✅ add this
  displayOrder: integer("display_order").default(0), // ✅ add this

  createdAt: timestamp("created_at").defaultNow().notNull(),
});