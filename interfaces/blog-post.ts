export interface BlogPost {
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  status: "draft" | "published";
  featured: boolean;
  createdAt: string;
  publishedAt?: string;
}
