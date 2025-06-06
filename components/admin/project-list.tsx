import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllProjects } from "@/model/project";
import { Project } from "@/interfaces/project";
import { ProjectTableRow } from "./project-table-row";

// // Mock data for projects
// const projectsData = [
//   {
//     id: "1",
//     title: "Finance Tracker Pro",
//     description: "A real-time financial tracking platform for businesses and individuals",
//     tags: ["Node.js", "Kafka", "React", "MongoDB"],
//     featured: true,
//   },
//   {
//     id: "2",
//     title: "Spicy Guitar Academy",
//     description:
//       "An online platform for guitar enthusiasts to learn and master guitar playing through interactive lessons and exercises.",
//     tags: ["Next.js", "TypeScript", "Stripe", "Supabase"],
//     featured: false,
//   },
//   {
//     id: "3",
//     title: "Pade HCM 3.0",
//     description:
//       "A comprehensive human capital management system for enterprises to manage employee data, payroll, and performance.",
//     tags: ["React", "Node.js", "PostgreSQL", "Docker"],
//     featured: true,
//   },
//   {
//     id: "4",
//     title: "Safeli Web3 Escrow",
//     description:
//       "A decentralized escrow service built on Ethereum that provides secure transactions between parties without intermediaries.",
//     tags: ["Solidity", "React", "Ethers.js", "Hardhat"],
//     featured: false,
//   },
//   {
//     id: "5",
//     title: "TypeSafe API Generator",
//     description:
//       "A CLI tool that automatically generates type-safe API clients from OpenAPI specifications for TypeScript applications.",
//     tags: ["TypeScript", "Node.js", "OpenAPI", "CLI"],
//     featured: false,
//   },
// ]

export async function ProjectList() {
  let projects: Project[] = [];

  try {
    projects = await getAllProjects();
  } catch (error) {
    // If we're on the client side, this will throw
    console.error("Cannot fetch blog projects on client side:", error);
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">Tags</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <ProjectTableRow key={project.slug} project={project} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
