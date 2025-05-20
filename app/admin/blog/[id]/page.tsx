import { BlogPostForm } from "@/components/admin/blog-post-form"

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the blog post data based on the ID
  // For this example, we'll use mock data
  const isNewPost = params.id === "new"

  const blogPost = isNewPost
    ? {
        id: "",
        title: "",
        excerpt: "",
        content: "",
        publishedAt: "",
        category: "",
        tags: [],
        coverImage: "",
        status: "draft",
      }
    : {
        id: params.id,
        title: "Building Scalable APIs with Node.js and Kafka",
        excerpt:
          "Learn how to design and implement high-throughput APIs using Node.js and Kafka for real-time event processing.",
        content:
          "# Building Scalable APIs with Node.js and Kafka\n\nIn this post, we'll explore how to build highly scalable APIs using Node.js and Kafka...",
        publishedAt: "2023-04-15T09:00:00Z",
        category: "Engineering Notes",
        tags: ["Node.js", "Kafka", "API Design", "Microservices"],
        coverImage: "/placeholder.svg?height=400&width=600",
        status: "published",
      }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{isNewPost ? "Create Blog Post" : "Edit Blog Post"}</h2>
      </div>
      <BlogPostForm initialData={blogPost} />
    </div>
  )
}
