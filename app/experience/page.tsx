import { Timeline, type TimelineExperience } from "@/components/timeline"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for Ebuka's professional experience
const experiences: TimelineExperience[] = [
  {
    id: "utopia-tech",
    company: "Utopia Tech Corp",
    position: "Senior Full Stack Engineer",
    duration: "2021 - Present",
    location: "San Francisco, CA (Remote)",
    description:
      "Leading the development of cloud-native platforms and developer tools that empower engineers to build better software faster.",
    impacts: [
      "Built identity service used by 40+ engineers across the organization",
      "Reduced CI/CD pipeline execution time by 70% through optimization",
      "Led migration from monolith to microservices architecture",
      "Mentored 5 junior developers who were promoted to mid-level roles",
      "Implemented event-driven architecture that processes 10M+ events daily",
    ],
  },
  {
    id: "seamlesshr",
    company: "SeamlessHR",
    position: "Full Stack Developer",
    duration: "2018 - 2021",
    location: "Lagos, Nigeria",
    description:
      "Developed enterprise HR management solutions for large organizations across Africa, focusing on performance and scalability.",
    impacts: [
      "Architected and built payroll system processing $5M+ monthly for 200+ companies",
      "Improved application performance by 60% through database optimization",
      "Implemented real-time analytics dashboard used by 500+ HR managers",
      "Developed API integrations with 15+ financial and productivity tools",
      "Led team of 4 developers to deliver major platform redesign on time and under budget",
    ],
  },
  {
    id: "safeli",
    company: "Safeli Technologies",
    position: "Frontend Developer",
    duration: "2016 - 2018",
    location: "Lagos, Nigeria",
    description:
      "Built responsive web applications for fintech products, focusing on user experience and accessibility.",
    impacts: [
      "Developed mobile-responsive interfaces that increased user engagement by 40%",
      "Created reusable component library that reduced development time by 30%",
      "Implemented A/B testing framework that improved conversion rates by 25%",
      "Optimized frontend performance, reducing load time by 2.5 seconds",
      "Collaborated with UX team to redesign core user flows, increasing retention by 15%",
    ],
  },
  {
    id: "digital-creations",
    company: "Digital Creations",
    position: "Junior Web Developer",
    duration: "2014 - 2016",
    location: "Port Harcourt, Nigeria",
    description:
      "Started my professional journey building websites and web applications for small businesses and startups.",
    impacts: [
      "Developed 20+ websites for local businesses, increasing their online presence",
      "Created custom CMS solutions that improved content management efficiency",
      "Implemented SEO best practices that improved client search rankings by 30%",
      "Built e-commerce functionality for 5 clients, generating $100K+ in online sales",
      "Designed and implemented responsive email templates with 25% higher open rates",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Professional Journey</h1>
          <p className="mt-4 text-lg text-muted-foreground">My career path and the impact I've made along the way</p>
        </div>

        <Tabs defaultValue="vertical" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList>
              <TabsTrigger value="vertical">Vertical Timeline</TabsTrigger>
              <TabsTrigger value="horizontal">Horizontal Timeline</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="vertical" className="mt-0">
            <Timeline experiences={experiences} orientation="vertical" />
          </TabsContent>

          <TabsContent value="horizontal" className="mt-0">
            <Timeline experiences={experiences} orientation="horizontal" />
          </TabsContent>
        </Tabs>

        <div className="mt-16 flex justify-center">
          <Button size="lg" className="px-8">
            Download Full Resume
          </Button>
        </div>
      </div>
    </div>
  )
}
