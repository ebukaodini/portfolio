import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { BlogPostList } from "@/components/admin/blog-post-list";
import { getAllBlogPosts } from "@/model/blog";
import { BlogPost } from "@/interfaces/blog-post";

export default async function BlogPostsPage() {
  let posts: BlogPost[] = [];
  let publishedPosts: number = 0;
  let draftPosts: number = 0;

  try {
    posts = await getAllBlogPosts();
    publishedPosts = posts.filter((blog) => blog.status === "published").length;
    draftPosts = posts.filter((blog) => blog.status === "draft").length;
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog posts on client side:", error);
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Manage Posts</CardTitle>
            <CardDescription>
              You have {publishedPosts}
              {publishedPosts > 0
                ? publishedPosts > 1
                  ? " published blog posts "
                  : " published blog post "
                : " no blog posts "}
              and {draftPosts}
              {draftPosts > 0
                ? draftPosts > 1
                  ? " drafts. "
                  : " draft. "
                : " no drafts. "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search posts..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <BlogPostList />
      </div>
    </div>
  );
}
