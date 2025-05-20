import { ProjectForm } from "@/components/admin/project-form"

export default function EditProjectPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the project data based on the ID
  // For this example, we'll use mock data
  const isNewProject = params.id === "new"

  const project = isNewProject
    ? {
        id: "",
        title: "",
        description: "",
        tags: [],
        image: "",
        demoUrl: "",
        githubUrl: "",
        featured: false,
        techStack: [],
        screenshots: [],
        details: {
          challenge: "",
          solution: "",
          impact: "",
          features: [],
        },
      }
    : {
        id: params.id,
        title: "Finance Tracker Pro",
        description: "A real-time financial tracking platform for businesses and individuals",
        tags: ["Node.js", "Kafka", "React", "MongoDB", "Docker", "AWS", "Serverless"],
        image: "/placeholder.svg?height=400&width=600",
        demoUrl: "https://finance-tracker-pro.example.com",
        githubUrl: "https://github.com/example/finance-tracker-pro",
        featured: true,
        techStack: ["React", "Node.js", "MongoDB", "Kafka", "Docker", "AWS Lambda"],
        screenshots: [
          {
            title: "Dashboard",
            image: "/placeholder.svg?height=720&width=1280",
            description: "The main dashboard showing financial overview and key metrics",
          },
          {
            title: "Transaction Analysis",
            image: "/placeholder.svg?height=720&width=1280",
            description: "Detailed transaction analysis with filtering and categorization",
          },
        ],
        details: {
          challenge:
            "Processing thousands of financial transactions in real-time while maintaining system performance and data accuracy was a significant challenge.",
          solution:
            "Implemented an event-driven architecture using Kafka to handle high-volume transaction processing and ensure data consistency across services.",
          impact: "50,000+ active users within the first year",
          features: [
            "Real-time transaction processing",
            "Custom dashboards",
            "Budget planning",
            "Financial forecasting",
          ],
        },
      }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{isNewProject ? "Create Project" : "Edit Project"}</h2>
      </div>
      <ProjectForm initialData={project} />
    </div>
  )
}
