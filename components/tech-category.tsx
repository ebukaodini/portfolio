import { Badge } from "./ui/badge";

export const techStack = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
  },
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Zustand",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "NestJS", "Django", "GraphQL", "REST"],
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    category: "DevOps",
    technologies: [
      "Docker",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    category: "Tools",
    technologies: ["Git", "VS Code", "Postman", "Figma", "Jira", "Notion"],
  },
];

export function TechCategory({
  category,
  technologies,
}: {
  category: string;
  technologies: string[];
}) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
