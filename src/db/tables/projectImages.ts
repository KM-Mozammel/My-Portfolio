import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { projects } from "./projects";

export const projectImages = pgTable("project_images", {
  id: uuid("id").defaultRandom().primaryKey(),

  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),

  imageUrl: text("image_url").notNull(),
});