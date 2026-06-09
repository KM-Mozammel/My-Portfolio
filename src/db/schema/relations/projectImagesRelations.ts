import { relations } from "drizzle-orm";
import { projectImages } from "../../tables/projectImages";
import { projects } from "../../tables/projects";

export const projectImagesRelations = relations(projectImages, ({ one }) => ({
  project: one(projects, {
    fields: [projectImages.projectId],
    references: [projects.id],
  }),
}));