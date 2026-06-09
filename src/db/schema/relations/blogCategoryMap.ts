import { pgTable, uuid } from "drizzle-orm/pg-core";
import { blogs } from "../../tables/blogs";
import { blogCategories } from "../../tables/blogCategories";

export const blogCategoryMap = pgTable("blog_category_map", {
  blogId: uuid("blog_id").references(() => blogs.id),
  categoryId: uuid("category_id").references(() => blogCategories.id),
});