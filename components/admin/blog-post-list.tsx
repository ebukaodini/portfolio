import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogPost } from "@/interfaces/blog-post";
import { getAllBlogPosts } from "@/model/blog";
import { BlogPostTableRow } from "./blog-post-table-row";

export async function BlogPostList() {
  let posts: BlogPost[] = [];

  try {
    posts = await getAllBlogPosts();
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog posts on client side:", error);
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <BlogPostTableRow
              key={post.slug}
              post={post}
              // handleDelete={handleDeleteClient(post.slug!)}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
