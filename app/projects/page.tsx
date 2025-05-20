import { ProjectCard } from "@/components/project-card"

// This is mock data - in a real app, you would fetch this from an API or CMS
const projects = [
  {
    slug: "finance-tracker",
    title: "Finance Tracker Pro",
    description: "A real-time financial tracking platform for businesses and individuals",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["NodeJS", "Kafka", "React", "MongoDB", "Docker", "AWS", "Serverless"],
    liveUrl: "https://finance-tracker-pro.example.com",
    githubUrl: "https://github.com/example/finance-tracker-pro",
  },
  {
    slug: "health-monitoring",
    title: "Health Monitoring System",
    description: "IoT-based health monitoring system for remote patient care",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Flutter", "Firebase", "IoT", "TensorFlow", "GCP"],
    liveUrl: "https://health-monitor.example.com",
    githubUrl: "https://github.com/example/health-monitor",
  },
  {
    slug: "e-learning",
    title: "Interactive E-Learning Platform",
    description: "Adaptive learning platform with personalized content delivery",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://adaptive-learning.example.com",
    githubUrl: "https://github.com/example/adaptive-learning",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">My Projects</h1>
          <p className="mt-4 text-lg text-gray-600">A showcase of my work and contributions</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
