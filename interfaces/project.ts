export interface ProjectDetails {
  challenge: string;
  solution: string;
  impact: string;
  features: string[];
}

export interface Screenshots {
  description: string;
  image: string;
}

export interface Project {
  slug?: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
  screenshots: Screenshots[];
  details: ProjectDetails;
  createdAt?: string;
  status?: "draft" | "published";
  featured: boolean;
  publishedAt?: string;
}
