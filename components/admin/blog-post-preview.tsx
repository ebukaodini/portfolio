import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { CalendarIcon, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface BlogPost {
  title: string
  excerpt: string
  content: string
  publishedAt: string
  category: string
  tags: string[]
  coverImage: string
}

interface BlogPostPreviewProps {
  post: BlogPost
}

export function BlogPostPreview({ post }: BlogPostPreviewProps) {
  // Use current date if publishedAt is empty
  const publishDate = post.publishedAt || new Date().toISOString()

  // Estimate reading time (1 minute per 200 words)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Badge variant="outline">{post.category || "Uncategorized"}</Badge>
        <span className="text-sm text-muted-foreground">
          <CalendarIcon className="mr-1 inline-block h-3 w-3" />
          {formatDate(publishDate)}
        </span>
        <span className="text-sm text-muted-foreground">
          <Clock className="mr-1 inline-block h-3 w-3" />
          {readingTime} min read
        </span>
      </div>

      <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{post.title || "Untitled Post"}</h1>

      {post.coverImage && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={1280}
            height={720}
            className="object-cover"
          />
        </div>
      )}

      <div className="prose max-w-none dark:prose-invert">
        <ReactMarkdown>{post.content || "*No content yet*"}</ReactMarkdown>
      </div>

      {post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
