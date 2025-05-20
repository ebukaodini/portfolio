import type React from "react"
import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mb-12 grid gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl border-4 border-white shadow-xl">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Ebuka Odini"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Ebuka Odini</h1>
              <p className="text-lg text-gray-600">Senior Full Stack Engineer</p>
              <p className="text-sm text-gray-500">Utopia Tech Corp</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">About Me</h2>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  I'm a Senior Full Stack Engineer with 9 years of experience building scalable applications and
                  developer tools. Currently, I'm working at Utopia Tech Corp where I lead the development of
                  cloud-native platforms that empower developers to build better software faster.
                </p>
                <p>
                  My passion lies in creating elegant solutions to complex problems, with a focus on performance,
                  scalability, and developer experience. I enjoy working at the intersection of frontend and backend
                  technologies, and I'm constantly exploring new tools and methodologies to improve my craft.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical articles,
                  or mentoring junior developers. I believe in the power of knowledge sharing and community building.
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
            {/* Timeline items */}
            <TimelineItem
              year="2021 - Present"
              title="Senior Full Stack Engineer"
              company="Utopia Tech Corp"
              description="Leading the development of cloud-native platforms and developer tools. Architecting scalable solutions using React, Node.js, and AWS."
            />
            <TimelineItem
              year="2018 - 2021"
              title="Full Stack Developer"
              company="InnovateTech Solutions"
              description="Built and maintained enterprise applications using React, TypeScript, and Node.js. Implemented CI/CD pipelines and containerized applications."
            />
            <TimelineItem
              year="2016 - 2018"
              title="Frontend Developer"
              company="WebSphere Inc."
              description="Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces."
            />
            <TimelineItem
              year="2014 - 2016"
              title="Junior Web Developer"
              company="Digital Creations"
              description="Started my journey building websites using HTML, CSS, and JavaScript. Gained experience with PHP and MySQL."
            />
          </div>
        </section>

        {/* Core Skills Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Core Skills</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              icon={<Code />}
              title="Frontend Development"
              description="Building responsive, accessible, and performant user interfaces using modern frameworks and best practices."
            />
            <SkillCard
              icon={<Server />}
              title="Backend Development"
              description="Designing and implementing scalable APIs, microservices, and server-side applications."
            />
            <SkillCard
              icon={<Database />}
              title="Database Design"
              description="Creating efficient database schemas, optimizing queries, and working with both SQL and NoSQL databases."
            />
            <SkillCard
              icon={<Layers />}
              title="System Architecture"
              description="Designing scalable, maintainable, and secure system architectures for complex applications."
            />
            <SkillCard
              icon={<BookOpen />}
              title="Technical Leadership"
              description="Mentoring developers, leading technical discussions, and making architectural decisions."
            />
            <SkillCard
              icon={<Coffee />}
              title="Problem Solving"
              description="Analyzing complex problems and developing elegant, efficient solutions with a focus on user experience."
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <div className="space-y-4">
            <TechCategory category="Languages" technologies={["JavaScript", "TypeScript", "Python", "Go", "SQL"]} />
            <TechCategory
              category="Frontend"
              technologies={["React", "Next.js", "Vue.js", "Redux", "Tailwind CSS", "Styled Components"]}
            />
            <TechCategory
              category="Backend"
              technologies={["Node.js", "Express", "NestJS", "Django", "GraphQL", "REST"]}
            />
            <TechCategory
              category="Databases"
              technologies={["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Elasticsearch"]}
            />
            <TechCategory
              category="DevOps"
              technologies={["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "GitHub Actions"]}
            />
            <TechCategory category="Tools" technologies={["Git", "VS Code", "Postman", "Figma", "Jira", "Notion"]} />
          </div>
        </section>

        {/* Fun Facts Section */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Fun Facts About Me</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Coffee Enthusiast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  I've visited over 50 specialty coffee shops around the world and even learned how to roast my own
                  beans.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Open Source Contributor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  I've contributed to over 15 open source projects and maintain 3 of my own with a combined 2,000+
                  stars.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Marathon Runner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  I've completed 3 marathons and believe that long-distance running helps me think through complex
                  coding problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Multilingual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Besides programming languages, I speak English, French, and am currently learning Japanese.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tech Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  I've mentored over 20 junior developers who have gone on to work at companies like Google, Microsoft,
                  and Amazon.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mechanical Keyboard Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  I've built 5 custom mechanical keyboards and am always on the hunt for the perfect typing experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  company,
  description,
}: {
  year: string
  title: string
  company: string
  description: string
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute -left-[10px] h-5 w-5 rounded-full border-2 border-white bg-primary shadow"></div>
      <div className="mb-1 text-sm font-medium text-gray-500">{year}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mb-2 text-sm text-gray-600">{company}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function SkillCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
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
  )
}

function TechCategory({
  category,
  technologies,
}: {
  category: string
  technologies: string[]
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
  )
}
