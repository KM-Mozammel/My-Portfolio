import { relations } from "drizzle-orm";
import { projectTags } from "../../tables/projectTags";
import { projects } from "../../tables/projects";

export const projectTagsRelations = relations(projectTags, ({ one }) => ({
  project: one(projects, {
    fields: [projectTags.projectId],
    references: [projects.id],
  }),
}));