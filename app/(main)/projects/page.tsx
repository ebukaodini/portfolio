import { ProjectCard } from "@/components/project-card";
import { Project } from "@/interfaces/project";
import { getPublishedProjects } from "@/model/project";
import { Code, Layers, Smartphone } from "lucide-react";

export default async function ProjectsPage() {
  let projects: Project[] = [];
  let products: Project[] = [];
  let devTools: Project[] = [];
  let apps: Project[] = [];

  try {
    projects = await getPublishedProjects();
    // Filter projects into categories
    products = projects.filter((project) => project.category === "product");
    devTools = projects.filter((project) => project.category === "dev-tool");
    apps = projects.filter((project) => project.category === "app");
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog posts on client side:", error);
  }

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

        {/* Products Section */}
        {products.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Products I've Built</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </section>
        )}

        {/* Developer Tools Section */}
        {devTools.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Tools for Developers</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {devTools.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </section>
        )}

        {/* Mobile Apps Section */}
        {apps.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Mobile Apps</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
