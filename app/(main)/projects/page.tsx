import { ProjectCard } from "@/components/project-card";
import projects from "@/content/projects";

export default async function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my work, side projects, and contributions
          </p>
        </div>

        {projects.length > 0 && (
          <section className="mb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
