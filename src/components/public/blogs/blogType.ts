export type BlogType = {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage: string | null;
    publishedAt: string | null;
    canonicalUrl?: string | null;

    // Additional fields as nullable
    content?: string | null;
    status?: string | null;
    author?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    ogTitle?: string | null;
    ogDescription?: string | null;
    ogImage?: string | null;
    keywords?: string | null;
    summary?: string | null;
    readingTime?: string | null;
    embeddings?: unknown | null;
};
