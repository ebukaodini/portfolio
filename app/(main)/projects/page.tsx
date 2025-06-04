import { ProjectCard } from "@/components/project-card";
import { Code, Layers, Smartphone } from "lucide-react";

// This is mock data - in a real app, you would fetch this from an API or CMS
export const products = [
  {
    slug: "spicy-guitar-academy",
    title: "Spicy Guitar Academy",
    description:
      "An online platform for guitar enthusiasts to learn and master guitar playing through interactive lessons and exercises.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    url: "https://spicyguitar.example.com",
    githubUrl: "https://github.com/example/spicy-guitar",
    details: {
      challenge:
        "Creating an interactive learning platform with video lessons, progress tracking, and a subscription model.",
      solution:
        "Built a Next.js application with Supabase for authentication and database, integrated Stripe for payments, and implemented a custom video player with interactive exercises.",
      impact:
        "Acquired over 5,000 users in the first year, with a 70% retention rate for paid subscribers.",
      features: [
        "Interactive video lessons",
        "Progress tracking",
        "Community forum",
        "Subscription management",
        "Offline mode for premium users",
      ],
    },
  },
  {
    slug: "pade-hcm-3",
    title: "Pade HCM 3.0",
    description:
      "A comprehensive human capital management system for enterprises to manage employee data, payroll, and performance.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    url: "https://padehcm.example.com",
    githubUrl: "https://github.com/example/pade-hcm",
    details: {
      challenge:
        "Redesigning a legacy HCM system to improve performance, user experience, and add modern features.",
      solution:
        "Rebuilt the frontend with React and Material UI, modernized the backend with Node.js microservices, and implemented a robust data migration strategy.",
      impact:
        "Reduced page load times by 60%, increased user satisfaction by 45%, and enabled seamless onboarding of 10,000+ employees.",
      features: [
        "Employee self-service portal",
        "Advanced reporting",
        "Payroll automation",
        "Performance management",
        "Integration with third-party HR tools",
      ],
    },
  },
  {
    slug: "safeli-web3-escrow",
    title: "Safeli Web3 Escrow",
    description:
      "A decentralized escrow service built on Ethereum that provides secure transactions between parties without intermediaries.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Solidity", "React", "Ethers.js", "Hardhat"],
    url: "https://safeli.example.com",
    githubUrl: "https://github.com/example/safeli-escrow",
    details: {
      challenge:
        "Building a trustless escrow system that ensures security and transparency for all parties involved.",
      solution:
        "Developed smart contracts with Solidity, created a user-friendly frontend with React, and implemented comprehensive testing with Hardhat.",
      impact:
        "Facilitated over $2M in secure transactions with zero security incidents in the first six months.",
      features: [
        "Multi-signature approval",
        "Dispute resolution mechanism",
        "Transaction history",
        "Fee optimization",
        "Cross-chain compatibility",
      ],
    },
  },
];

const devTools = [
  {
    slug: "typesafe-api-generator",
    title: "TypeSafe API Generator",
    description:
      "A CLI tool that automatically generates type-safe API clients from OpenAPI specifications for TypeScript applications.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["TypeScript", "Node.js", "OpenAPI", "CLI"],
    githubUrl: "https://github.com/example/typesafe-api",
    details: {
      challenge:
        "Eliminating type inconsistencies between API specifications and client-side code.",
      solution:
        "Created a Node.js CLI tool that parses OpenAPI specs and generates fully typed API clients with runtime validation.",
      impact:
        "Adopted by 20+ development teams, reducing API-related bugs by 80% and improving developer productivity.",
      features: [
        "OpenAPI 3.0 support",
        "Custom type mappings",
        "Runtime validation",
        "Framework-agnostic output",
        "Incremental generation",
      ],
    },
  },
  {
    slug: "devops-dashboard",
    title: "DevOps Dashboard",
    description:
      "A unified dashboard for monitoring CI/CD pipelines, deployments, and infrastructure across multiple cloud providers.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Vue.js", "Express", "MongoDB", "Docker"],
    url: "https://devops-dashboard.example.com",
    githubUrl: "https://github.com/example/devops-dashboard",
    details: {
      challenge:
        "Creating a single pane of glass for DevOps teams to monitor and manage diverse infrastructure and deployment pipelines.",
      solution:
        "Built a Vue.js frontend with real-time updates, integrated with multiple cloud provider APIs, and implemented a flexible plugin system.",
      impact:
        "Reduced incident response time by 40% and improved cross-team visibility for infrastructure changes.",
      features: [
        "Real-time monitoring",
        "Alert management",
        "Deployment tracking",
        "Cost analysis",
        "Custom plugin system",
      ],
    },
  },
  {
    slug: "schema-validator-pro",
    title: "Schema Validator Pro",
    description:
      "A powerful JSON and XML schema validation library with advanced features for complex data structures.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "JSON Schema", "XML", "npm package"],
    url: "https://schema-validator.example.com",
    githubUrl: "https://github.com/example/schema-validator",
    details: {
      challenge:
        "Building a flexible validation library that handles complex nested structures while remaining performant.",
      solution:
        "Implemented a custom validation engine with support for JSON Schema and XML Schema, with optimizations for large datasets.",
      impact:
        "Downloaded over 500,000 times on npm, used by enterprise applications processing millions of records daily.",
      features: [
        "Custom validation rules",
        "Detailed error reporting",
        "Schema composition",
        "Performance optimizations",
        "Browser and Node.js support",
      ],
    },
  },
];

const apps = [
  {
    slug: "fittrack-pro",
    title: "FitTrack Pro",
    description:
      "A fitness tracking app that uses machine learning to provide personalized workout recommendations and progress analysis.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "Firebase", "TensorFlow.js", "Expo"],
    url: "https://fittrack.example.com",
    githubUrl: "https://github.com/example/fittrack",
    details: {
      challenge:
        "Creating an intelligent fitness app that provides personalized recommendations while respecting user privacy.",
      solution:
        "Built with React Native for cross-platform compatibility, implemented on-device ML for workout analysis, and used Firebase for backend services.",
      impact:
        "Reached 100,000+ downloads with a 4.7-star average rating across app stores.",
      features: [
        "Workout tracking",
        "AI-powered recommendations",
        "Progress visualization",
        "Social sharing",
        "Offline support",
      ],
    },
  },
  {
    slug: "localeats",
    title: "LocalEats",
    description:
      "A location-based app that helps users discover local restaurants and food vendors that aren't listed on major platforms.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Flutter", "Dart", "Google Maps API", "Firebase"],
    url: "https://localeats.example.com",
    githubUrl: "https://github.com/example/localeats",
    details: {
      challenge:
        "Building a community-driven platform to highlight small, local food businesses that are often overlooked.",
      solution:
        "Developed with Flutter for native performance, integrated with Google Maps for location services, and implemented a crowdsourced submission system.",
      impact:
        "Helped over 500 small food businesses increase their visibility and customer base in the first year.",
      features: [
        "Location-based discovery",
        "User reviews",
        "Business submission",
        "Favorites and lists",
        "Offline maps",
      ],
    },
  },
  {
    slug: "mindful-minutes",
    title: "MindfulMinutes",
    description:
      "A meditation and mindfulness app focused on short, effective practices for busy professionals.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Swift", "SwiftUI", "Core Data", "AVFoundation"],
    url: "https://mindfulminutes.example.com",
    githubUrl: "https://github.com/example/mindful-minutes",
    details: {
      challenge:
        "Creating an accessible mindfulness app that fits into busy schedules and provides measurable benefits.",
      solution:
        "Built a native iOS app with SwiftUI for a polished user experience, implemented custom audio controls, and designed guided meditations specifically for short time periods.",
      impact:
        "Featured in Apple's App Store, with users reporting 30% reduction in stress levels after 30 days of use.",
      features: [
        "Guided meditations",
        "Progress tracking",
        "Customizable reminders",
        "Sleep stories",
        "Breathing exercises",
      ],
    },
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my work, side projects, and contributions
          </p>
        </div>

        {/* Products Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Products I've Built</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>

        {/* Developer Tools Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Tools for Developers</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devTools.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>

        {/* Mobile Apps Section */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Mobile Apps</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
