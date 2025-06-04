import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

interface Screenshot {
  title: string;
  image: string;
  description: string;
}

interface ProjectDetails {
  challenge: string;
  solution: string;
  impact: string;
  features: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
  screenshots: Screenshot[];
  details: ProjectDetails;
}

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {project.title || "Untitled Project"}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {project.description || "No description provided"}
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-sm">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        {project.demoUrl && (
          <Button asChild>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button variant="outline" asChild>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Link>
          </Button>
        )}
      </div>

      {project.image && (
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg border">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1280}
            height={720}
            className="object-cover"
          />
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          {/* Overview Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Project Overview</h2>
            <div className="prose max-w-none text-muted-foreground">
              <p>{project.description}</p>
            </div>
          </section>

          {/* Screenshots/Demo Section */}
          {project.screenshots.length > 0 && (
            <section>
              <h2 className="mb-6 text-2xl font-bold">Screenshots & Demo</h2>
              <Tabs
                defaultValue={
                  project.screenshots[0]?.title
                    .toLowerCase()
                    .replace(/\s+/g, "-") || "screenshot-1"
                }
              >
                <TabsList className="mb-4">
                  {project.screenshots.map((screenshot, index) => (
                    <TabsTrigger
                      key={index}
                      value={
                        screenshot.title
                          ? screenshot.title.toLowerCase().replace(/\s+/g, "-")
                          : `screenshot-${index + 1}`
                      }
                    >
                      {screenshot.title || `Screenshot ${index + 1}`}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {project.screenshots.map((screenshot, index) => (
                  <TabsContent
                    key={index}
                    value={
                      screenshot.title
                        ? screenshot.title.toLowerCase().replace(/\s+/g, "-")
                        : `screenshot-${index + 1}`
                    }
                  >
                    <div className="overflow-hidden rounded-lg border">
                      <Image
                        src={screenshot.image || "/placeholder.svg"}
                        alt={screenshot.title || `Screenshot ${index + 1}`}
                        width={1280}
                        height={720}
                        className="w-full object-cover"
                      />
                      <div className="bg-muted/50 p-4">
                        <p className="text-sm text-muted-foreground">
                          {screenshot.description || "No description provided"}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </section>
          )}

          {/* Challenges & Solutions Section */}
          {(project.details.challenge || project.details.solution) && (
            <section>
              <h2 className="mb-6 text-2xl font-bold">
                Challenges & Solutions
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.details.challenge && (
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Challenges</h3>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {project.details.challenge}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
                {project.details.solution && (
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Solutions</h3>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {project.details.solution}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-8">
          {/* Project Info Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Project Details</h3>
              <dl className="space-y-4">
                {project.techStack.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Tech Stack
                    </dt>
                    <dd className="mt-1 flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                )}
                {project.details.impact && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Impact
                    </dt>
                    <dd className="mt-1">
                      <p className="text-sm text-muted-foreground">
                        {project.details.impact}
                      </p>
                    </dd>
                  </div>
                )}
                {project.details.features &&
                  project.details.features.length > 0 && (
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">
                        Key Features
                      </dt>
                      <dd className="mt-1">
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          {project.details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                {project.details.impact && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Impact
                    </dt>
                    <dd className="mt-1">
                      <p className="text-sm text-muted-foreground">
                        {project.details.impact}
                      </p>
                    </dd>
                  </div>
                )}
                {project.details.features &&
                  project.details.features.length > 0 && (
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">
                        Key Features
                      </dt>
                      <dd className="mt-1">
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          {project.details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
              </dl>
            </CardContent>
          </Card>
          {/* Additional Resources Section */}
          {project.githubUrl && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Additional Resources</h3>
              <Button variant="outline" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
