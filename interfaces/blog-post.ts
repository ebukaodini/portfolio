export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  status: "draft" | "published";
  createdAt: string;
  publishedAt?: string;
  featured?: boolean;
}
