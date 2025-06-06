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
import { ProjectList } from "@/components/admin/project-list";
import { Project } from "@/interfaces/project";
import { getAllProjects } from "@/model/project";

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await getAllProjects();
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog projects on client side:", error);
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Manage Projects</CardTitle>
            <CardDescription>
              You have {projects.length} projects in your portfolio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <ProjectList />
      </div>
    </div>
  );
}
