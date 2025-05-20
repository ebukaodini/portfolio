import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="code-background opacity-5"></div>
      </div>

      <header className="relative z-10 container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Ebuka Odini</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      <main className="relative z-10 flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Ebuka Odini</h1>
                  <p className="text-xl font-medium text-gray-500 md:text-2xl">
                    I build scalable tools and platforms for developers
                  </p>
                </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Senior Full Stack Engineer with expertise in building high-performance applications, distributed
                  systems, and developer-focused platforms. Passionate about creating elegant solutions to complex
                  problems.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="transition-all duration-300 hover:translate-y-[-2px]">
                    Read Blog
                    <FileText className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="secondary" className="transition-all duration-300 hover:translate-y-[-2px]">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center space-x-4 mt-8">
                  <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="code-card relative overflow-hidden rounded-lg border bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="code-card-header flex items-center gap-1 border-b pb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-gray-500">app.js</div>
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm">
                    <code className="language-javascript">
                      {`// Ebuka Odini
// Senior Full Stack Engineer

const skills = [
  'JavaScript', 'TypeScript',
  'React', 'Node.js', 'Next.js',
  'AWS', 'Docker', 'Kubernetes',
  'GraphQL', 'REST API Design',
  'System Architecture'
];

function buildScalableSolutions() {
  return {
    performance: 'Optimized',
    scalability: 'Horizontal & Vertical',
    reliability: '99.99%',
    maintainability: 'Clean Code'
  };
}

// Let's connect and build something amazing!`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
              © {new Date().getFullYear()} Ebuka Odini. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
