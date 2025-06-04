import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This is a mock project data - in a real app, you would fetch this from an API or CMS
const projectData = {
  slug: "finance-tracker",
  title: "Finance Tracker Pro",
  shortDescription:
    "A real-time financial tracking platform for businesses and individuals",
  overview:
    "Finance Tracker Pro is a comprehensive financial management platform that helps businesses and individuals track expenses, manage budgets, and generate insights through advanced analytics. The application features real-time data processing, customizable dashboards, and integration with major banking APIs.",
  tags: ["NodeJS", "Kafka", "React", "MongoDB", "Docker", "AWS", "Serverless"],
  challenges: [
    {
      title: "Real-time Data Processing",
      description:
        "Processing thousands of financial transactions in real-time while maintaining system performance and data accuracy was a significant challenge.",
    },
    {
      title: "Banking API Integration",
      description:
        "Integrating with multiple banking APIs, each with different authentication methods and data formats, required a flexible and robust integration layer.",
    },
    {
      title: "Data Security",
      description:
        "Ensuring the highest level of security for sensitive financial data while maintaining ease of use and accessibility for users.",
    },
  ],
  solutions: [
    {
      title: "Event-Driven Architecture",
      description:
        "Implemented an event-driven architecture using Kafka to handle high-volume transaction processing and ensure data consistency across services.",
    },
    {
      title: "Adapter Pattern for APIs",
      description:
        "Developed a flexible adapter pattern to standardize interactions with various banking APIs, making it easy to add new integrations.",
    },
    {
      title: "Serverless Microservices",
      description:
        "Built the platform using serverless microservices on AWS Lambda to ensure scalability, reliability, and cost-effectiveness.",
    },
    {
      title: "End-to-End Encryption",
      description:
        "Implemented end-to-end encryption for all financial data, with a zero-knowledge architecture that ensures even our team cannot access user financial information.",
    },
  ],
  outcomes: [
    {
      metric: "50,000+",
      description: "Active users within the first year",
    },
    {
      metric: "99.99%",
      description: "System uptime",
    },
    {
      metric: "30%",
      description:
        "Average reduction in financial management time for businesses",
    },
    {
      metric: "$2.5M",
      description: "Annual recurring revenue",
    },
  ],
  screenshots: [
    {
      title: "Dashboard",
      image: "/placeholder.svg?height=720&width=1280",
      description:
        "The main dashboard showing financial overview and key metrics",
    },
    {
      title: "Transaction Analysis",
      image: "/placeholder.svg?height=720&width=1280",
      description:
        "Detailed transaction analysis with filtering and categorization",
    },
    {
      title: "Budget Planning",
      image: "/placeholder.svg?height=720&width=1280",
      description: "Interactive budget planning and forecasting tools",
    },
  ],
  demoVideo: "https://example.com/demo-video",
  liveUrl: "https://finance-tracker-pro.example.com",
  githubUrl: "https://github.com/example/finance-tracker-pro",
  teamSize: 6,
  duration: "8 months",
  role: "Lead Developer",
};

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              {projectData.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {projectData.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {projectData.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {projectData.liveUrl && (
              <Button asChild>
                <Link
                  href={projectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Link>
              </Button>
            )}
            {projectData.githubUrl && (
              <Button variant="outline" asChild>
                <Link
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            )}
            {projectData.demoVideo && (
              <Button variant="outline" asChild>
                <Link
                  href={projectData.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Project Overview</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p>{projectData.overview}</p>
              </div>
            </section>

            {/* Screenshots/Demo Section */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Screenshots & Demo</h2>
              <Tabs
                defaultValue={projectData.screenshots[0]?.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}
              >
                <TabsList className="mb-4">
                  {projectData.screenshots.map((screenshot) => (
                    <TabsTrigger
                      key={screenshot.title}
                      value={screenshot.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}
                    >
                      {screenshot.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {projectData.screenshots.map((screenshot) => (
                  <TabsContent
                    key={screenshot.title}
                    value={screenshot.title.toLowerCase().replace(/\s+/g, "-")}
                  >
                    <div className="overflow-hidden rounded-lg border">
                      <Image
                        src={screenshot.image || "/placeholder.svg"}
                        alt={screenshot.title}
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
            </section>

            {/* Challenges & Solutions Section */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">
                Challenges & Solutions
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Challenges</h3>
                  <div className="space-y-4">
                    {projectData.challenges.map((challenge, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h4 className="mb-2 font-medium">
                            {challenge.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {challenge.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Solutions</h3>
                  <div className="space-y-4">
                    {projectData.solutions.map((solution, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h4 className="mb-2 font-medium">{solution.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {solution.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
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
                      My Role
                    </dt>
                    <dd className="text-gray-900">{projectData.role}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Team Size
                    </dt>
                    <dd className="text-gray-900">
                      {projectData.teamSize} people
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Duration
                    </dt>
                    <dd className="text-gray-900">{projectData.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Tech Stack
                    </dt>
                    <dd className="mt-1 flex flex-wrap gap-1">
                      {projectData.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Outcomes Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Outcomes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {projectData.outcomes.map((outcome, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {outcome.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {outcome.description}
                      </div>
                    </div>
                  ))}
                </div>
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
                  {projectData.liveUrl && (
                    <Button variant="secondary" asChild className="w-full">
                      <Link
                        href={projectData.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Project
                      </Link>
                    </Button>
                  )}
                  {projectData.githubUrl && (
                    <Button
                      variant="outline"
                      asChild
                      className="w-full border-primary-foreground/20 hover:bg-primary-foreground/10"
                    >
                      <Link
                        href={projectData.githubUrl}
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
      </div>
    </div>
  );
}
