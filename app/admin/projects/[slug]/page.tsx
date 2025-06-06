import { ProjectForm } from "@/components/admin/project-form";
import { getProjectBySlug } from "@/model/project";
import { redirect } from "next/navigation";

// export async function generateStaticParams() {
//   return [{ slug: "new" }];
// }

export default async function EditProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const isNewProject = params.slug === "new";
  let project;

  if (!isNewProject) {
    project = await getProjectBySlug(params.slug);
    if (!project) {
      // Redirect to blog list with a query param
      redirect("/admin/project?notfound=1");
    }
  } else {
    project = {
      title: "",
      description: "",
      tags: [],
      image: "",
      demoUrl: "",
      githubUrl: "",
      featured: false,
      techStack: [],
      screenshots: [],
      details: {
        challenge: "",
        solution: "",
        impact: "",
        features: [],
      },
      category: "",
      createdAt: new Date().toISOString(),
      status: "draft" as "draft",
    };
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          {isNewProject ? "Create Project" : "Edit Project"}
        </h2>
      </div>
      <ProjectForm initialData={project} />
    </div>
  );
}
