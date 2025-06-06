"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Github,
  Linkedin,
  Twitter,
  Briefcase,
  Code,
  Database,
  Server,
  Coffee,
  Award,
  Layers,
  BookOpen,
  ChevronUp,
  ChevronDown,
  Gamepad,
  Dumbbell,
  Music,
  Utensils,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TimelineItem, workExperience } from "@/components/timeline-item";
import { TechCategory, techStack } from "@/components/tech-category";

const skills = [
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "System Architecture",
    description:
      "Designing scalable, maintainable, and secure system architectures for complex applications.",
  },
  {
    icon: <Server className="h-6 w-6 text-primary" />,
    title: "Backend Development",
    description:
      "Designing and implementing scalable APIs, microservices, and server-side applications.",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces using modern frameworks and best practices.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Database Design",
    description:
      "Creating efficient database schemas, optimizing queries, and working with both SQL and NoSQL databases.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Technical Leadership",
    description:
      "Mentoring developers, leading technical discussions, and making architectural decisions.",
  },
  {
    icon: <Coffee className="h-6 w-6 text-primary" />,
    title: "Problem Solving",
    description:
      "Analyzing complex problems and developing elegant, efficient solutions with a focus on user experience.",
  },
];

const funFacts = [
  {
    icon: <Gamepad className="h-6 w-6 text-primary" />,
    title: "Mobile Gamer",
    description:
      "I can demolish bug reports by day and enemies in CoD Mobile by night. Gaming keeps my reflexes sharp — and my thumbs even sharper.",
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    title: "Workout Pro",
    description:
      "Whether it's deadlifts or debugging, I don’t skip leg day. The gym is my second IDE — strong code, strong core.",
  },
  {
    icon: <Music className="h-6 w-6 text-primary" />,
    title: "Music Lover",
    description:
      "My playlists are a mix of chill Lo-fi, afrobeats, and coding jams. There’s always music playing when I’m in the zone.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Business Enthusiast",
    description:
      "I love building products, but I’m just as excited about the business behind them. Lean strategies and startup energy are my thing.",
  },
  {
    icon: <Utensils className="h-6 w-6 text-primary" />,
    title: "Fun Chef",
    description:
      "I experiment in the kitchen like I do with code — sometimes I break things, sometimes I discover magic. Ask me about my jollof rice supremacy.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-primary" />,
    title: "Nature Lover",
    description:
      "I balance screen time with green time. Long walks, fresh air, and road trips are how I recharge and refactor mentally.",
  },
];

export default function AboutPage() {
  const [expanded, toggleExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        <div className="mb-12 grid gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl border-4 border-white shadow-xl">
              <Image
                src="/pfp.jpg?height=256&width=256"
                alt="Ebuka Odini"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Ebuka Odini</h1>
              <p className="text-lg text-muted-foreground">
                Senior Full Stack Engineer
              </p>
              <p className="text-sm text-gray-500">Utopia Tech Corp</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/ebukaodini"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://linkedin.com/in/ebuka-odini"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://x.com/ebukaOdini_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button className="w-full" asChild>
              <Link href="resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">About Me</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  I'm a Senior Full Stack Engineer at Utopia Tech Corp where I
                  and my teammates work on advanced trading platforms designed
                  to empower financial institutions and brokers with
                  cutting-edge trading capabilities
                </p>
                <p>
                  With 9+ years of hands-on experience, I help teams turn ideas
                  into high-performance products, focusing on reliability,
                  performance, and great developer experience. Whether it's
                  building internal tools, public platforms, or infrastructure
                  services, I work across the stack — from UI to APIs to cloud
                  deployment. I enjoy contributing to open-source projects and
                  building systems that make other engineers more productive.
                </p>
                <p>
                  When I'm not coding, you'll find me gaming, working out at the
                  gym, or mentoring junior developers. I believe in the power of
                  knowledge sharing and community building.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Journey Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Professional Journey</h2>
          </div>

          <div className="relative space-y-8 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gray-200">
            {workExperience.map((item, index) => (
              <TimelineItem
                key={index}
                hidden={index > 2 && expanded === false}
                duration={item.duration}
                position={item.position}
                company={item.company}
                companyUrl={item.companyUrl}
                impacts={item.impacts}
                location={item.location}
              />
            ))}

            <button
              onClick={() => toggleExpanded(!expanded)}
              className={`flex items-center gap-1 text-sm font-medium text-primary`}
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </section>

        {/* Core Skills Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Core Skills</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              // <SkillCard
              //   key={index}
              //   icon={skill.icon}
              //   title={skill.title}
              //   description={skill.description}
              // />
              <Card
                key={index}
                className="p-6 rounded-2xl shadow-md border bg-background hover:shadow-lg transition-all"
              >
                <CardHeader className="flex flex-row items-center p-0 gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <div className="space-y-4">
            {techStack.map((stack, index) => (
              <TechCategory
                key={index}
                category={stack.category}
                technologies={stack.technologies}
              />
            ))}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">
            Beyond Code: A Few Fun Facts
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((fact, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl shadow-md border bg-background hover:shadow-lg transition-all"
              >
                <CardHeader className="flex flex-row items-center p-0 gap-4 mb-4">
                  {fact.icon}
                  <h3 className="text-lg font-semibold">{fact.title}</h3>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
