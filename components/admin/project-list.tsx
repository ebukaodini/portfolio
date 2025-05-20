"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, MoreHorizontal, Star, Trash } from "lucide-react"

// Mock data for projects
const projectsData = [
  {
    id: "1",
    title: "Finance Tracker Pro",
    description: "A real-time financial tracking platform for businesses and individuals",
    tags: ["Node.js", "Kafka", "React", "MongoDB"],
    featured: true,
  },
  {
    id: "2",
    title: "Spicy Guitar Academy",
    description:
      "An online platform for guitar enthusiasts to learn and master guitar playing through interactive lessons and exercises.",
    tags: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    featured: false,
  },
  {
    id: "3",
    title: "Pade HCM 3.0",
    description:
      "A comprehensive human capital management system for enterprises to manage employee data, payroll, and performance.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    id: "4",
    title: "Safeli Web3 Escrow",
    description:
      "A decentralized escrow service built on Ethereum that provides secure transactions between parties without intermediaries.",
    tags: ["Solidity", "React", "Ethers.js", "Hardhat"],
    featured: false,
  },
  {
    id: "5",
    title: "TypeSafe API Generator",
    description:
      "A CLI tool that automatically generates type-safe API clients from OpenAPI specifications for TypeScript applications.",
    tags: ["TypeScript", "Node.js", "OpenAPI", "CLI"],
    featured: false,
  },
]

export function ProjectList() {
  const [projects, setProjects] = useState(projectsData)

  const handleDelete = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  const toggleFeatured = (id: string) => {
    setProjects(projects.map((project) => (project.id === id ? { ...project, featured: !project.featured } : project)))
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead className="hidden md:table-cell">Tags</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className="font-medium">{project.title}</span>
                  <span className="hidden text-sm text-muted-foreground md:inline">
                    {project.description.substring(0, 60)}...
                  </span>
                </div>
              </TableCell>
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
                  onClick={() => toggleFeatured(project.id)}
                  className={project.featured ? "text-yellow-500" : "text-muted-foreground"}
                >
                  <Star className="h-4 w-4" fill={project.featured ? "currentColor" : "none"} />
                  <span className="sr-only">{project.featured ? "Unfeature" : "Feature"}</span>
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
                      <Link href={`/admin/projects/${project.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(project.id)}>
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
  )
}
