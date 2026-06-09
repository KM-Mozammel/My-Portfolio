export const blogCategoryMap = pgTable("blog_category_map", {
  blogId: uuid("blog_id").references(() => blogs.id),
  categoryId: uuid("category_id").references(() => blogCategories.id),
});