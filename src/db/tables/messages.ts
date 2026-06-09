import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),

  senderName: varchar("sender_name", { length: 150 }).notNull(),
  senderEmail: varchar("sender_email", { length: 150 }).notNull(),

  subject: varchar("subject", { length: 200 }), // optional
  body: text("body").notNull(),

  isRead: boolean("is_read").default(false).notNull(),

  status: varchar("status", { length: 50 }).default("new").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});