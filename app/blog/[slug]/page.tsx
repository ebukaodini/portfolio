import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

// This is a placeholder for the blog post page
// In a real application, you would fetch the blog post data based on the slug
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="outline">Engineering Notes</Badge>
            <span className="text-sm text-gray-500">
              <CalendarIcon className="mr-1 inline-block h-3 w-3" />
              {formatDate(new Date().toISOString())}
            </span>
            <span className="text-sm text-gray-500">
              <Clock className="mr-1 inline-block h-3 w-3" />8 min read
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {params.slug
              .split("-")
              .join(" ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </h1>

          <div className="mb-8 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="Ebuka Odini" fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium">Ebuka Odini</div>
              <div className="text-sm text-gray-500">Senior Full Stack Engineer</div>
            </div>
          </div>

          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Blog post cover"
              width={1280}
              height={720}
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p>
              This is a placeholder for the blog post content. In a real application, this would be rendered from
              Markdown content.
            </p>
            <p>The slug for this post is: {params.slug}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
