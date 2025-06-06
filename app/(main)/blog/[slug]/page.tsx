import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/date";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/model/blog";
import Editor from "@/components/admin/editor";
import { readingTime } from "@/utils/reading-time";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getBlogPostBySlug(params.slug);
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog post on client side:", error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="outline">{post.category}</Badge>
            <span className="text-sm text-gray-500">
              <CalendarIcon className="mr-1 inline-block h-3 w-3" />
              {formatDate(post.publishedAt!)}
            </span>
            <span className="text-sm text-gray-500">
              <Clock className="mr-1 inline-block h-3 w-3" />
              {readingTime(post.content)}
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {post.title.replace(/\b\w/g, (l) => l.toUpperCase())}
          </h1>

          <div className="mb-8 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/pfp.jpg?height=40&width=40"
                alt="Ebuka Odini"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">Ebuka Odini</div>
              <div className="text-sm text-gray-500">
                Senior Full Stack Engineer
              </div>
            </div>
          </div>

          <div className="relative mb-8 aspect-auto w-full overflow-hidden rounded-lg">
            <Image
              src={post.coverImage || "/placeholder.svg?height=720&width=1280"}
              alt="Blog post cover"
              width={1280}
              height={420}
              className="object-cover"
            />
          </div>

          <div className="mb-6 flex flex-wrap items-center">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="mr-2 mb-2 inline-flex"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <Editor markdown={post.content} readonly={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
