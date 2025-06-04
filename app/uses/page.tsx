import type React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Terminal,
  Layers,
  Palette,
  Zap,
  Laptop,
  Coffee,
  Headphones,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Setup & Tools
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive list of all the tools, apps, hardware, and services
            I use on a daily basis.
          </p>
        </div>

        <Tabs defaultValue="software" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="software">Software & Tools</TabsTrigger>
            <TabsTrigger value="hardware">Hardware & Gear</TabsTrigger>
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
          </TabsList>

          {/* Software & Tools Tab */}
          <TabsContent value="software" className="space-y-12">
            {/* Editor & IDE Section */}
            <Section
              icon={<Code />}
              title="Editor & IDE"
              description="The tools I use to write and edit code."
            >
              <ToolCard
                title="Visual Studio Code"
                description="My primary code editor for most projects. I've customized it extensively with extensions and settings."
                image="/placeholder.svg?height=60&width=60"
                tags={["VSCode", "Editor", "Microsoft"]}
              >
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Favorite Extensions:</h4>
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    <li>GitHub Copilot</li>
                    <li>ESLint</li>
                    <li>Prettier</li>
                    <li>GitLens</li>
                    <li>Material Icon Theme</li>
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Theme:</h4>
                  <p className="text-sm text-muted-foreground">
                    I use the <span className="font-medium">Night Owl</span>{" "}
                    theme by Sarah Drasner with a few custom tweaks for better
                    contrast.
                  </p>
                </div>
              </ToolCard>

              <ToolCard
                title="JetBrains WebStorm"
                description="For larger projects, I sometimes switch to WebStorm for its powerful refactoring tools and deeper language integration."
                image="/placeholder.svg?height=60&width=60"
                tags={["WebStorm", "JetBrains", "IDE"]}
              />

              <ToolCard
                title="Vim"
                description="I use Vim for quick edits on servers and have a basic .vimrc configuration that I carry around."
                image="/placeholder.svg?height=60&width=60"
                tags={["Vim", "Terminal", "Editor"]}
              />
            </Section>

            {/* Terminal Setup Section */}
            <Section
              icon={<Terminal />}
              title="Terminal Setup"
              description="My terminal configuration for maximum productivity."
            >
              <ToolCard
                title="iTerm2"
                description="A more feature-rich terminal replacement for macOS with split panes, search, and autocomplete."
                image="/placeholder.svg?height=60&width=60"
                tags={["iTerm2", "Terminal", "macOS"]}
              >
                <div className="mt-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="iTerm2 Screenshot"
                      width={800}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </ToolCard>

              <ToolCard
                title="Oh My Zsh"
                description="Framework for managing Zsh configuration with themes, plugins, and functions."
                image="/placeholder.svg?height=60&width=60"
                tags={["Zsh", "Shell", "Terminal"]}
              >
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Favorite Plugins:</h4>
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    <li>git</li>
                    <li>node</li>
                    <li>docker</li>
                    <li>aws</li>
                    <li>z (directory jumping)</li>
                  </ul>
                </div>
              </ToolCard>

              <ToolCard
                title="Starship Prompt"
                description="A minimal, blazing-fast, and infinitely customizable prompt for any shell."
                image="/placeholder.svg?height=60&width=60"
                tags={["Starship", "Terminal", "Prompt"]}
              />
            </Section>

            {/* Frameworks Section */}
            <Section
              icon={<Layers />}
              title="Frameworks I Love"
              description="The frameworks and libraries I prefer to work with."
            >
              <ToolCard
                title="Next.js"
                description="My go-to React framework for building full-stack web applications with server-side rendering and static site generation."
                image="/placeholder.svg?height=60&width=60"
                tags={["Next.js", "React", "JavaScript", "TypeScript"]}
              />

              <ToolCard
                title="NestJS"
                description="A progressive Node.js framework for building efficient, reliable, and scalable server-side applications."
                image="/placeholder.svg?height=60&width=60"
                tags={["NestJS", "Node.js", "TypeScript", "API"]}
              />

              <ToolCard
                title="Serverless Framework"
                description="Framework for building applications on AWS Lambda and other serverless platforms."
                image="/placeholder.svg?height=60&width=60"
                tags={["Serverless", "AWS", "Lambda", "Cloud"]}
              />

              <ToolCard
                title="Kafka"
                description="For event-driven architectures and high-throughput data streaming applications."
                image="/placeholder.svg?height=60&width=60"
                tags={["Kafka", "Streaming", "Event-Driven"]}
              />
            </Section>

            {/* Design Tools Section */}
            <Section
              icon={<Palette />}
              title="Design Tools"
              description="Tools I use for design and visual work."
            >
              <ToolCard
                title="Figma"
                description="Collaborative interface design tool that I use for wireframing, prototyping, and design systems."
                image="/placeholder.svg?height=60&width=60"
                tags={["Figma", "Design", "UI/UX"]}
              />

              <ToolCard
                title="Excalidraw"
                description="Virtual whiteboard for sketching diagrams with a hand-drawn feel."
                image="/placeholder.svg?height=60&width=60"
                tags={["Excalidraw", "Diagrams", "Whiteboarding"]}
              />

              <ToolCard
                title="Tailwind CSS"
                description="Utility-first CSS framework that I use for rapidly building custom designs."
                image="/placeholder.svg?height=60&width=60"
                tags={["Tailwind", "CSS", "Design System"]}
              />
            </Section>

            {/* Workflow Automations Section */}
            <Section
              icon={<Zap />}
              title="Workflow Automations"
              description="Tools and scripts that save me time and effort."
            >
              <ToolCard
                title="GitHub Actions"
                description="CI/CD workflows for automated testing, building, and deployment of my projects."
                image="/placeholder.svg?height=60&width=60"
                tags={["GitHub", "CI/CD", "Automation"]}
              >
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Common Workflows:</h4>
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    <li>Automated testing on pull requests</li>
                    <li>Dependency updates with Dependabot</li>
                    <li>Automated deployments to staging/production</li>
                    <li>Release management</li>
                  </ul>
                </div>
              </ToolCard>

              <ToolCard
                title="Custom Shell Scripts"
                description="A collection of bash and zsh scripts for automating repetitive tasks."
                image="/placeholder.svg?height=60&width=60"
                tags={["Bash", "Shell", "Automation"]}
              />

              <ToolCard
                title="Keyboard Maestro"
                description="Powerful macOS automation tool for creating custom keyboard shortcuts and macros."
                image="/placeholder.svg?height=60&width=60"
                tags={["Keyboard Maestro", "macOS", "Automation"]}
              />
            </Section>
          </TabsContent>

          {/* Hardware & Gear Tab */}
          <TabsContent value="hardware" className="space-y-12">
            {/* Computer & Devices Section */}
            <Section
              icon={<Laptop />}
              title="Computer & Devices"
              description="The hardware I use for development and work."
            >
              <ToolCard
                title="MacBook Pro 16-inch (2021)"
                description="M1 Max with 64GB RAM and 2TB SSD. My primary development machine for all projects."
                image="/placeholder.svg?height=60&width=60"
                tags={["Apple", "MacBook", "M1"]}
              />

              <ToolCard
                title="Dell U3219Q 32-inch 4K Monitor"
                description="My primary external display with excellent color accuracy and screen real estate."
                image="/placeholder.svg?height=60&width=60"
                tags={["Dell", "Monitor", "4K"]}
              />

              <ToolCard
                title="iPad Pro 12.9-inch"
                description="Used for reading documentation, sketching ideas, and as a secondary display with Sidecar."
                image="/placeholder.svg?height=60&width=60"
                tags={["Apple", "iPad", "Tablet"]}
              />
            </Section>

            {/* Peripherals Section */}
            <Section
              icon={<Headphones />}
              title="Peripherals & Accessories"
              description="The accessories that complete my setup."
            >
              <ToolCard
                title="GMMK Pro Mechanical Keyboard"
                description="Custom mechanical keyboard with Boba U4T switches, PBT keycaps, and sound dampening foam."
                image="/placeholder.svg?height=60&width=60"
                tags={["Mechanical Keyboard", "GMMK", "Custom"]}
              >
                <div className="mt-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Keyboard Setup"
                      width={800}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </ToolCard>

              <ToolCard
                title="Logitech MX Master 3"
                description="Ergonomic mouse with customizable buttons and excellent tracking on any surface."
                image="/placeholder.svg?height=60&width=60"
                tags={["Logitech", "Mouse", "Ergonomic"]}
              />

              <ToolCard
                title="Sony WH-1000XM4 Headphones"
                description="Noise-cancelling headphones for focused work and virtual meetings."
                image="/placeholder.svg?height=60&width=60"
                tags={["Sony", "Headphones", "Audio"]}
              />

              <ToolCard
                title="Shure MV7 Microphone"
                description="USB/XLR dynamic microphone for clear audio in meetings and recordings."
                image="/placeholder.svg?height=60&width=60"
                tags={["Shure", "Microphone", "Audio"]}
              />
            </Section>

            {/* Desk Setup Section */}
            <Section
              icon={<Coffee />}
              title="Desk Setup"
              description="My workspace configuration for comfort and productivity."
            >
              <ToolCard
                title="Fully Jarvis Standing Desk"
                description="Electric standing desk that I alternate between sitting and standing throughout the day."
                image="/placeholder.svg?height=60&width=60"
                tags={["Standing Desk", "Ergonomic", "Workspace"]}
              />

              <ToolCard
                title="Herman Miller Embody Chair"
                description="Ergonomic office chair that supports good posture during long coding sessions."
                image="/placeholder.svg?height=60&width=60"
                tags={["Herman Miller", "Chair", "Ergonomic"]}
              />

              <ToolCard
                title="Elgato Key Light Air"
                description="Adjustable LED panel light for video calls and recordings with customizable temperature and brightness."
                image="/placeholder.svg?height=60&width=60"
                tags={["Elgato", "Lighting", "Streaming"]}
              />
            </Section>
          </TabsContent>

          {/* Productivity Tab */}
          <TabsContent value="productivity" className="space-y-12">
            {/* Productivity Apps Section */}
            <Section
              icon={<Zap />}
              title="Productivity Apps"
              description="Applications that help me stay organized and efficient."
            >
              <ToolCard
                title="Notion"
                description="My second brain for notes, documentation, project planning, and knowledge management."
                image="/placeholder.svg?height=60&width=60"
                tags={["Notion", "Notes", "Organization"]}
              >
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">How I Use It:</h4>
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    <li>Project documentation and planning</li>
                    <li>Personal knowledge base</li>
                    <li>Meeting notes and action items</li>
                    <li>Content calendar for blog posts</li>
                  </ul>
                </div>
              </ToolCard>

              <ToolCard
                title="Raycast"
                description="Productivity tool that replaces Spotlight with powerful extensions and workflows."
                image="/placeholder.svg?height=60&width=60"
                tags={["Raycast", "Productivity", "macOS"]}
              />

              <ToolCard
                title="Arc Browser"
                description="My primary browser with workspaces, command bar, and built-in notes."
                image="/placeholder.svg?height=60&width=60"
                tags={["Arc", "Browser", "Productivity"]}
              />
            </Section>

            {/* Time Management Section */}
            <Section
              icon={<BookOpen />}
              title="Time Management & Focus"
              description="Tools and techniques I use to manage my time and stay focused."
            >
              <ToolCard
                title="Pomodoro Technique"
                description="I work in focused 25-minute intervals with 5-minute breaks to maintain productivity and prevent burnout."
                image="/placeholder.svg?height=60&width=60"
                tags={["Pomodoro", "Time Management", "Focus"]}
              />

              <ToolCard
                title="Forest App"
                description="Gamified focus timer that helps me stay off my phone during deep work sessions."
                image="/placeholder.svg?height=60&width=60"
                tags={["Forest", "Focus", "Productivity"]}
              />

              <ToolCard
                title="Centered"
                description="Flow state app that combines task management, focus music, and distraction blocking."
                image="/placeholder.svg?height=60&width=60"
                tags={["Centered", "Focus", "Flow"]}
              />
            </Section>

            {/* Learning Resources Section */}
            <Section
              icon={<BookOpen />}
              title="Learning Resources"
              description="Resources I use to stay updated and continue learning."
            >
              <ToolCard
                title="Frontend Masters"
                description="My go-to platform for in-depth courses on frontend technologies and frameworks."
                image="/placeholder.svg?height=60&width=60"
                tags={["Frontend Masters", "Learning", "Courses"]}
              />

              <ToolCard
                title="Readwise"
                description="Tool for highlighting and revisiting important passages from books, articles, and tweets."
                image="/placeholder.svg?height=60&width=60"
                tags={["Readwise", "Reading", "Knowledge Management"]}
              />

              <ToolCard
                title="Pocket Casts"
                description="Podcast player for listening to tech podcasts during commutes and workouts."
                image="/placeholder.svg?height=60&width=60"
                tags={["Podcasts", "Learning", "Audio"]}
              >
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Favorite Tech Podcasts:</h4>
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    <li>Syntax</li>
                    <li>JS Party</li>
                    <li>The Changelog</li>
                    <li>Frontend Happy Hour</li>
                  </ul>
                </div>
              </ToolCard>
            </Section>
          </TabsContent>
        </Tabs>

        <div className="mt-16 rounded-lg border bg-background p-6">
          <h2 className="mb-4 text-xl font-bold">A Note on Tools</h2>
          <p className="text-muted-foreground">
            Tools are just that—tools. They're meant to serve you, not the other
            way around. I'm constantly experimenting with new tools and
            workflows, so this page will evolve over time. The best tool is the
            one that works for you and your specific needs.
          </p>
          <p className="mt-4 text-muted-foreground">
            If you have questions about any of these tools or want to share your
            own recommendations, feel free to{" "}
            <Link href="#" className="font-medium text-primary hover:underline">
              reach out
            </Link>
            . I'm always interested in improving my setup!
          </p>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}

function Section({ icon, title, description, children }: SectionProps) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

interface ToolCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  children?: React.ReactNode;
  link?: string;
}

function ToolCard({
  title,
  description,
  image,
  tags,
  children,
  link,
}: ToolCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <Link
          href={link}
          className="block h-full transition-all hover:opacity-90"
        >
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="relative h-12 w-12 overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              {title}
              {link && <ExternalLink className="h-4 w-4 text-gray-400" />}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
          {children}
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
