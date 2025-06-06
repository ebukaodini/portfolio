"use client";

import { useEffect } from "react";
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
import { Edit, MoreHorizontal, Star, Trash } from "lucide-react";
import { deleteProjectBySlug, toggleFeaturedProject } from "@/model/project";
import { Project } from "@/interfaces/project";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export function ProjectTableRow({ project }: { project: Project }) {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const handleDelete = (slug: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProjectBySlug(slug)
        .then(() => {
          toast({
            title: "Success",
            description: "Project deleted successfully!",
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error deleting project:", error);
          toast({
            title: "Error",
            description: "Failed to delete the project. Please try again.",
            variant: "destructive",
          });
        });
    }
  };

  const toggleFeatured = (slug: string) => {
    slug;
    toggleFeaturedProject(slug)
      .then(() => {
        toast({
          title: "Success",
          description: "Project updated successfully!",
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        toast({
          title: "Error",
          description: "Failed to update the project. Please try again.",
          variant: "destructive",
        });
      });
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
    <TableRow key={project.slug}>
      <TableCell className="font-medium">
        <div className="flex flex-col">
          <span className="font-medium">{project.title}</span>
          <span className="hidden text-sm text-muted-foreground md:inline">
            {project.description.substring(0, 60)}...
          </span>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{project.category}</TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 2}
            </Badge>
          )}
        </div>
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleFeatured(project.slug!)}
          className={
            project.featured ? "text-yellow-500" : "text-muted-foreground"
          }
        >
          <Star
            className="h-4 w-4"
            fill={project.featured ? "currentColor" : "none"}
          />
          <span className="sr-only">
            {project.featured ? "Unfeature" : "Feature"}
          </span>
        </Button>
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
              <Link href={`/admin/projects/${project.slug!}`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => handleDelete(project.slug!)}
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
