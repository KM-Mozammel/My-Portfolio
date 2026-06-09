import { relations } from "drizzle-orm";
import { projects } from "../../tables/projects";
import { projectTags } from "../../tables/projectTags";
import { projectImages } from "../../tables/projectImages";

export const projectsRelations = relations(projects, ({ many }) => ({
  tags: many(projectTags),
  images: many(projectImages),
}));