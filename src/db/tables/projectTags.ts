import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { projects } from "./projects";

export const projectTags = pgTable("project_tags", {
  id: uuid("id").defaultRandom().primaryKey(),

  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),

  tag: varchar("tag", { length: 100 }).notNull(),
});