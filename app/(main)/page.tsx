import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  FileText,
  Twitter,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { Card, CardContent } from "@/components/ui/card";
import { getPublishedProjects } from "@/model/project";
import { Project } from "@/interfaces/project";
import TypeTitles from "@/components/type-titles";

export default async function Home() {
  let projects: Project[] = [];
  let featured: Project[] = [];

  try {
    projects = await getPublishedProjects();
    // Filter projects into categories
    featured = projects.filter((project) => project.category === "product");
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch projects on client side:", error);
  }

  return (
    <div className="relative min-h-screen bg-background">
      <main className="relative z-10 flex-1">
        <section className="w-full p y-12 md:p y-24 lg:p y-32">
          <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
            <div className="flex gap-6 lg:gap-12 flex-col-reverse md:flex-row justify-between items-start">
              <div className="flex flex-col justify-center space-y-7">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ebuka Odini
                  </h1>
                  <p className="text-xl font-medium text-gray-500 md:text-2xl">
                    <span className="mr-2">I'm a</span>
                    <span className="text-primary">
                      <TypeTitles />
                    </span>
                  </p>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Turning ideas into products that scale. Full-stack engineer
                    with a passion for mentoring, developer experience, and
                    clean architectures. Sharing lessons learned from 9+ years
                    of building tools, products, and services on the web.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      asChild
                      className="transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <Link href={"/about"}>
                        More About Me
                        <ArrowRight className="ml-2 h-4 w-4 hover:translate-x-[-50px]" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <Link href={"/blog"}>
                        Read Blog
                        <FileText className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {/* <Button
                      asChild
                      variant="secondary"
                      className="transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <Link href={"/contact"}>Connect</Link>
                    </Button> */}
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <Link
                      href="https://github.com/ebukaodini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="https://linkedin.com/in/ebuka-odini/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://x.com/ebukaOdini_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">X</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src="/pfp.jpg?height=256&width=256"
                  alt="Ebuka Odini"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <hr className="my-10 md:my-16" />

            {featured.length > 0 && (
              <div className="flex flex-col gap-y-8">
                <div className="mb-4 flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Featured Projects</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {featured.map((project) => (
                    <ProjectCard key={project.slug} {...project} />
                  ))}
                </div>
                <Button
                  asChild
                  variant={"ghost"}
                  className="w-fit transition-all duration-300 hover:bg-transparent hover:text-inherit hover:translate-y-[-2px]"
                >
                  <Link href={"/projects"}>
                    More Projects
                    <ArrowRight className="ml-2 h-4 w-4 hover:translate-x-[-50px]" />
                  </Link>
                </Button>
              </div>
            )}

            <div className="mt-16">
              <Card className="bg-muted/50">
                <CardContent className="flex flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Looking for my resume?
                    </h3>
                    <p className="text-muted-foreground">
                      Check out my experience and qualifications to see if we're
                      a good fit.
                    </p>
                  </div>
                  <Button asChild>
                    <Link
                      href="resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
