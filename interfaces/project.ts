type ProjectTag = string | "product" | "dev-tool";

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  url: string;
  featured: boolean;
}
