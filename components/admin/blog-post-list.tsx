"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/utils/cn";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "Building Scalable APIs with Node.js and Kafka",
    excerpt:
      "Learn how to design and implement high-throughput APIs using Node.js and Kafka for real-time event processing.",
    publishedAt: "2023-04-15T09:00:00Z",
    category: "Engineering Notes",
    status: "published",
  },
  {
    id: "2",
    title: "Advanced React Performance Optimization Techniques",
    excerpt:
      "Explore advanced techniques to optimize React applications for better performance and user experience.",
    publishedAt: "2023-03-22T10:30:00Z",
    category: "Engineering Notes",
    status: "published",
  },
  {
    id: "3",
    title: "Design Patterns in TypeScript: A Practical Guide",
    excerpt:
      "A comprehensive guide to implementing common design patterns in TypeScript with real-world examples.",
    publishedAt: "2023-02-18T08:45:00Z",
    category: "Engineering Notes",
    status: "published",
  },
  {
    id: "4",
    title: "Machine Learning for Software Developers: Where to Start",
    excerpt:
      "A beginner-friendly introduction to machine learning concepts for software developers looking to expand their skills.",
    publishedAt: "2023-05-10T11:15:00Z",
    category: "R&D Experiments",
    status: "draft",
  },
  {
    id: "5",
    title: "Exploring the Future of WebAssembly in Modern Web Apps",
    excerpt:
      "Investigating how WebAssembly is changing the landscape of web development and enabling new possibilities.",
    publishedAt: "2023-04-05T14:20:00Z",
    category: "R&D Experiments",
    status: "published",
  },
];

export function BlogPostList() {
  const [posts, setPosts] = useState(blogPosts);

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

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
            <TableRow key={post.id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className="font-medium">{post.title}</span>
                  <span className="hidden text-sm text-muted-foreground md:inline">
                    {post.excerpt.substring(0, 60)}...
                  </span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {post.category}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formatDate(post.publishedAt)}
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    post.status === "published" ? "default" : "secondary"
                  }
                >
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
                      <Link href={`/admin/blog/${post.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
