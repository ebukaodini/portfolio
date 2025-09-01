import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notFound } from "next/navigation";
import projects from "@/content/projects";

// This is a mock project data - in a real app, you would fetch this from an API or CMS
// const project = {
//   slug: "finance-tracker",
//   title: "Finance Tracker Pro",
//   shortDescription:
//     "A real-time financial tracking platform for businesses and individuals",
//   overview:
//     "Finance Tracker Pro is a comprehensive financial management platform that helps businesses and individuals track expenses, manage budgets, and generate insights through advanced analytics. The application features real-time data processing, customizable dashboards, and integration with major banking APIs.",
//   tags: ["NodeJS", "Kafka", "React", "MongoDB", "Docker", "AWS", "Serverless"],
//   challenges: [
//     {
//       title: "Real-time Data Processing",
//       description:
//         "Processing thousands of financial transactions in real-time while maintaining system performance and data accuracy was a significant challenge.",
//     },
//     {
//       title: "Banking API Integration",
//       description:
//         "Integrating with multiple banking APIs, each with different authentication methods and data formats, required a flexible and robust integration layer.",
//     },
//     {
//       title: "Data Security",
//       description:
//         "Ensuring the highest level of security for sensitive financial data while maintaining ease of use and accessibility for users.",
//     },
//   ],
//   solutions: [
//     {
//       title: "Event-Driven Architecture",
//       description:
//         "Implemented an event-driven architecture using Kafka to handle high-volume transaction processing and ensure data consistency across services.",
//     },
//     {
//       title: "Adapter Pattern for APIs",
//       description:
//         "Developed a flexible adapter pattern to standardize interactions with various banking APIs, making it easy to add new integrations.",
//     },
//     {
//       title: "Serverless Microservices",
//       description:
//         "Built the platform using serverless microservices on AWS Lambda to ensure scalability, reliability, and cost-effectiveness.",
//     },
//     {
//       title: "End-to-End Encryption",
//       description:
//         "Implemented end-to-end encryption for all financial data, with a zero-knowledge architecture that ensures even our team cannot access user financial information.",
//     },
//   ],
//   outcomes: [
//     {
//       metric: "50,000+",
//       description: "Active users within the first year",
//     },
//     {
//       metric: "99.99%",
//       description: "System uptime",
//     },
//     {
//       metric: "30%",
//       description:
//         "Average reduction in financial management time for businesses",
//     },
//     {
//       metric: "$2.5M",
//       description: "Annual recurring revenue",
//     },
//   ],
//   screenshots: [
//     {
//       title: "Dashboard",
//       image: "/placeholder.svg?height=720&width=1280",
//       description:
//         "The main dashboard showing financial overview and key metrics",
//     },
//     {
//       title: "Transaction Analysis",
//       image: "/placeholder.svg?height=720&width=1280",
//       description:
//         "Detailed transaction analysis with filtering and categorization",
//     },
//     {
//       title: "Budget Planning",
//       image: "/placeholder.svg?height=720&width=1280",
//       description: "Interactive budget planning and forecasting tools",
//     },
//   ],
//   demoVideo: "https://example.com/demo-video",
//   liveUrl: "https://finance-tracker-pro.example.com",
//   githubUrl: "https://github.com/example/finance-tracker-pro",
//   teamSize: 6,
//   duration: "8 months",
//   role: "Lead Developer",
// };

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let project;
  try {
    project = projects.find((p) => p.slug === params.slug);
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch project on client side:", error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black primary-800">
        <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
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
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        {/* <div className="container mx-auto px-4 py-12 md:px-6"> */}
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
            <section>
              <h2 className="mb-6 text-2xl font-bold">Screenshots & Demo</h2>
              {project.screenshots?.length === 0 ? (
                <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-muted-foreground">
                    No screenshots
                  </p>
                </div>
              ) : (
                <Tabs defaultValue={`screenshot-1`}>
                  <TabsList className="mb-4">
                    {project.screenshots.map((screenshot, index) => (
                      <TabsTrigger
                        key={`screenshot-${index + 1}`}
                        value={`screenshot-${index + 1}`}
                      >
                        Screenshot ${index + 1}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {project.screenshots.map((screenshot, index) => (
                    <TabsContent
                      key={`screenshot-${index + 1}`}
                      value={`screenshot-${index + 1}`}
                    >
                      <div className="overflow-hidden rounded-lg border">
                        <Image
                          src={screenshot.image || "/placeholder.svg"}
                          alt={`screenshot-image-${index + 1}`}
                          width={1280}
                          height={720}
                          className="w-full object-cover"
                        />
                        <div className="bg-gray-50 p-4">
                          <p className="text-sm text-muted-foreground">
                            {screenshot.description}
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </section>

            {/* Challenges & Solutions Section */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Challenge & Solutions</h2>
              <div className="flex flex-col gap-6">
                <Card className="p-4 space-y-4">
                  <CardTitle className="text-xl">Challenge</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">
                      {project.details.challenge}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-4 space-y-4">
                  <CardTitle className="text-xl">Solutions</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">
                      {project.details.solution}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-4 space-y-4">
                  <CardTitle className="text-xl">Impact</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">
                      {project.details.impact}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Project Info Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Tech Stack
                    </dt>
                    <dd className="mt-1 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </dd>
                  </div>

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

            {/* Call to Action */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Interested in this project?
                </h3>
                <p className="mb-4 text-sm opacity-90">
                  Check out the live version or explore the source code to learn
                  more about how it was built.
                </p>
                <div className="flex flex-col gap-2">
                  {project.demoUrl && (
                    <Button variant="secondary" asChild className="w-full">
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
                    <Button variant="secondary" asChild>
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
              </CardContent>
            </Card>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
