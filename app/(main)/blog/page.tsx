import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  Clock,
  Code,
  FlaskRoundIcon as Flask,
  Lightbulb,
  Coffee,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatDate } from "@/utils/date";
import { BlogPost } from "@/interfaces/blog-post";
import { readingTime } from "@/utils/reading-time";
import { getPublishedBlogPosts } from "@/model/blog";

// Mock data for blog posts - in a real app, you would fetch this from a CMS or API
// const blogPosts = [
//   {
// id: "react-performance",
// title: "Advanced React Performance Optimization Techniques",
// excerpt:
//   "Explore advanced techniques to optimize React applications for better performance and user experience.",
// publishedAt: "2023-03-22T10:30:00Z",
// readingTime: "12 min read",
// category: "Engineering Notes",
// tags: ["React", "Performance", "JavaScript", "Web Development"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "typescript-patterns",
//     title: "Design Patterns in TypeScript: A Practical Guide",
//     excerpt:
//       "A comprehensive guide to implementing common design patterns in TypeScript with real-world examples.",
//     publishedAt: "2023-02-18T08:45:00Z",
//     readingTime: "15 min read",
//     category: "Engineering Notes",
//     tags: ["TypeScript", "Design Patterns", "Software Architecture"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "ml-for-developers",
//     title: "Machine Learning for Software Developers: Where to Start",
//     excerpt:
//       "A beginner-friendly introduction to machine learning concepts for software developers looking to expand their skills.",
//     publishedAt: "2023-05-10T11:15:00Z",
//     readingTime: "10 min read",
//     category: "R&D Experiments",
//     tags: ["Machine Learning", "AI", "Python", "Data Science"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "webassembly-future",
//     title: "Exploring the Future of WebAssembly in Modern Web Apps",
//     excerpt:
//       "Investigating how WebAssembly is changing the landscape of web development and enabling new possibilities.",
//     publishedAt: "2023-04-05T14:20:00Z",
//     readingTime: "9 min read",
//     category: "R&D Experiments",
//     tags: ["WebAssembly", "Rust", "Web Development", "Performance"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "blockchain-experiments",
//     title: "Building a Decentralized Application: Lessons Learned",
//     excerpt:
//       "Insights and challenges from building a decentralized application on Ethereum and IPFS.",
//     publishedAt: "2023-03-12T09:30:00Z",
//     readingTime: "14 min read",
//     category: "R&D Experiments",
//     tags: ["Blockchain", "Ethereum", "Solidity", "Web3"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "senior-engineer-path",
//     title: "The Path to Becoming a Senior Software Engineer",
//     excerpt:
//       "Reflections on my journey to becoming a senior software engineer and advice for those on the same path.",
//     publishedAt: "2023-05-20T10:00:00Z",
//     readingTime: "7 min read",
//     category: "Career Insights",
//     tags: ["Career Development", "Software Engineering", "Leadership"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "tech-interviews",
//     title: "Mastering Technical Interviews: A Comprehensive Guide",
//     excerpt:
//       "Strategies and preparation tips for excelling in technical interviews at top tech companies.",
//     publishedAt: "2023-02-28T13:45:00Z",
//     readingTime: "11 min read",
//     category: "Career Insights",
//     tags: ["Interviews", "Career", "Algorithms", "Problem Solving"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "remote-work",
//     title: "Thriving as a Remote Software Engineer: Tools and Practices",
//     excerpt:
//       "Essential tools, practices, and mindsets for being productive and maintaining well-being as a remote engineer.",
//     publishedAt: "2023-01-15T08:30:00Z",
//     readingTime: "8 min read",
//     category: "Career Insights",
//     tags: ["Remote Work", "Productivity", "Work-Life Balance"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "mechanical-keyboards",
//     title: "Down the Rabbit Hole: My Mechanical Keyboard Obsession",
//     excerpt:
//       "A personal journey into the world of mechanical keyboards, custom builds, and the pursuit of the perfect typing experience.",
//     publishedAt: "2023-04-28T15:30:00Z",
//     readingTime: "6 min read",
//     category: "Life Beyond Code",
//     tags: ["Mechanical Keyboards", "Hobbies", "Hardware"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "marathon-training",
//     title: "How Marathon Training Made Me a Better Developer",
//     excerpt:
//       "Unexpected parallels between long-distance running and software development, and how physical discipline improves mental performance.",
//     publishedAt: "2023-03-05T09:15:00Z",
//     readingTime: "7 min read",
//     category: "Life Beyond Code",
//     tags: ["Running", "Health", "Productivity", "Mental Health"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "coffee-journey",
//     title: "From Commodity to Craft: My Coffee Journey",
//     excerpt:
//       "Exploring the world of specialty coffee, home brewing methods, and how a good cup of coffee enhances my coding sessions.",
//     publishedAt: "2023-02-10T11:00:00Z",
//     readingTime: "5 min read",
//     category: "Life Beyond Code",
//     tags: ["Coffee", "Hobbies", "Lifestyle"],
//     coverImage: "/placeholder.svg?height=400&width=600",
//   },
// ];

export default async function BlogPage() {
  // Fetch published blog posts
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getPublishedBlogPosts();
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog posts on client side:", error);
  }

  // Group posts by category
  const groupedPosts = blogPosts.reduce((acc, post) => {
    if (!post.featured) {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
    }
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured);

  // Category icons mapping
  const categoryIcons = {
    "Engineering Notes": <Code className="h-5 w-5" />,
    "R&D Experiments": <Flask className="h-5 w-5" />,
    "Career Insights": <Lightbulb className="h-5 w-5" />,
    "Life Beyond Code": <Coffee className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-60 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ebuka's Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts, insights, and explorations in software engineering and
            beyond
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16">
            <div className="mb-6 flex items-center">
              <span className="mr-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Featured
              </span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={featuredPost.coverImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <span className="text-sm text-gray-500">
                      <CalendarIcon className="mr-1 inline-block h-3 w-3" />
                      {formatDate(featuredPost.publishedAt!)}
                    </span>
                    <span className="text-sm text-gray-500">
                      <Clock className="mr-1 inline-block h-3 w-3" />
                      {readingTime(featuredPost.content)}
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Blog Categories */}
        {Object.entries(groupedPosts).map(([category, posts]) => (
          <section key={category} className="mb-16">
            <div className="mb-8 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                {categoryIcons[category as keyof typeof categoryIcons]}
              </div>
              <h2 className="text-2xl font-bold">{category}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4 pb-0">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {post.category}
            </Badge>
          </div>
          <h3 className="line-clamp-2 text-lg font-bold">{post.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          <div className="flex items-center text-xs text-gray-500">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {formatDate(post.publishedAt!)}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="mr-1 h-3 w-3" />
            {readingTime(post.content)}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
