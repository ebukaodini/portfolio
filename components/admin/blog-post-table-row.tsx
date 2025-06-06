"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate } from "@/utils/date";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { BlogPost } from "@/interfaces/blog-post";
import { deleteBlogPostBySlug } from "@/model/blog";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function BlogPostTableRow({ post }: { post: BlogPost }) {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const handleDelete = (slug: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deleteBlogPostBySlug(slug)
        .then(() => {
          toast({
            title: "Success",
            description: "Blog post deleted successfully!",
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
          toast({
            title: "Error",
            description: "Failed to delete the post. Please try again.",
            variant: "destructive",
          });
        });
    }
  };

  useEffect(() => {
    if (searchParams.get("notfound") === "1") {
      toast({
        title: "Error",
        description: "Blog post not found.",
        variant: "destructive",
      });
      // Clear the search params to avoid showing the toast again
      const url = new URL(window.location.href);
      url.searchParams.delete("notfound");
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchParams, toast]);

  return (
    <TableRow key={post.slug}>
      <TableCell className="font-medium">
        <div className="flex flex-col">
          <span className="font-medium">{post.title}</span>
          <span className="hidden text-sm text-muted-foreground md:inline">
            {post.excerpt.substring(0, 60)}...
          </span>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{post.category}</TableCell>
      <TableCell className="hidden md:table-cell">
        {formatDate(post.publishedAt!)}
      </TableCell>
      <TableCell>
        <Badge variant={post.status === "published" ? "default" : "secondary"}>
          {post.status === "published" ? "Published" : "Draft"}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/admin/blog/${post.slug}`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => handleDelete(post.slug!)}
            >
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
