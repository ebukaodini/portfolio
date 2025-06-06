"use server";

import { Project } from "@/interfaces/project";
import { createMDXContent, parseMDXContent } from "@/utils/mdx";
import fs from "fs";
import path from "path";

// Get the project directory path
async function getProjectDirectory(): Promise<string> {
  return path.join(process.cwd(), "content", "projects");
}

export async function getAllProjects(): Promise<Project[]> {
  // This only works during build process
  if (typeof window !== "undefined") {
    throw new Error("getAllProjects can only be called at build time");
  }

  const projectDirectory = await getProjectDirectory();

  // Check if directory exists
  if (!fs.existsSync(projectDirectory)) {
    console.warn(`Project directory not found: ${projectDirectory}`);
    return [];
  }

  // Get all .mdx files
  const filenames = fs
    .readdirSync(projectDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  const projects: Project[] = [];

  filenames.forEach((filename) => {
    try {
      const filePath = path.join(projectDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { frontMatter, content } = parseMDXContent<Project>(fileContent);

      // Extract slug from filename (remove .mdx extension)
      const slug = filename.replace(".mdx", "");

      // Ensure slug is set in frontMatter (use filename as fallback)
      if (!frontMatter.slug) {
        frontMatter.slug = slug;
      }

      projects.push({
        ...frontMatter,
        // content,
      });
    } catch (error) {
      console.error(`Error parsing ${filename}:`, error);
    }
  });

  // Sort projects by published date (newest first)
  return projects.sort((a, b) => {
    const dateA = new Date(a.publishedAt!);
    const dateB = new Date(b.publishedAt!);
    return dateB.getTime() - dateA.getTime();
  });
}

// Get a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projectDirectory = await getProjectDirectory();
  const filePath = path.join(projectDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { frontMatter, content } = parseMDXContent<Project>(fileContent);

    // Ensure slug is set
    if (!frontMatter.slug) {
      frontMatter.slug = slug;
    }

    return {
      ...frontMatter,
      // content,
    };
  } catch (error) {
    console.error(`Error parsing project ${slug}:`, error);
    return null;
  }
}

// Get all published projects (excludes drafts)
export async function getPublishedProjects(): Promise<Project[]> {
  return (await getAllProjects()).filter(
    (project) => project.status === "published"
  );
}

// Get projects by category
// export async function getProjectsByCategory(category: string): Promise<Project[]> {
//   return getPublishedProjects().filter(
//     (project) => project.category.toLowerCase() === category.toLowerCase()
//   );
// }

// Get projects by tag
export async function getProjectsByTag(tag: string): Promise<Project[]> {
  return (await getPublishedProjects()).filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

// Get all unique categories
// export async function getAllCategories(): string[] {
//   const projects = getPublishedProjects();
//   const categories = projects.map((project) => project.category);
//   return [...new Set(categories)];
// }

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const projects = await getPublishedProjects();
  const tags = projects.flatMap((project) => project.tags);
  return [...new Set(tags)];
}

// Get project slugs for generateStaticParams
export async function getProjectSlugs(): Promise<string[]> {
  return (await getPublishedProjects()).map((project) => project.slug!);
}

// Delete a blog post by slug
export async function deleteProjectBySlug(slug: string): Promise<void> {
  const blogDirectory = await getProjectDirectory();
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project with slug "${slug}" does not exist.`);
  }

  // Delete the file
  fs.unlinkSync(filePath);
}

// Toggle featured status of a project
export async function toggleFeaturedProject(slug: string): Promise<void> {
  const project = await getProjectBySlug(slug);
  if (!project) {
    throw new Error(`Project with slug "${slug}" does not exist.`);
  }

  // Toggle the featured status
  project.featured = !project.featured;

  // Save the updated project back to file
  const projectDirectory = await getProjectDirectory();
  const filePath = path.join(projectDirectory, `${slug}.mdx`);

  // Write the updated front matter back to the file
  const frontMatterContent = createMDXContent(project, "");
  fs.writeFileSync(filePath, frontMatterContent, "utf8");
  console.log(`Project ${slug} featured status updated to ${project.featured}`);
}

// Create a new project
export async function createProject(project: Project): Promise<string> {
  const projectDirectory = await getProjectDirectory();
  const filePath = path.join(projectDirectory, `${project.slug}.mdx`);

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    throw new Error(`Project with slug "${project.slug}" already exists.`);
  }

  // Create the front matter content
  const frontMatterContent = createMDXContent(project, "");

  // Write the new project to file
  fs.writeFileSync(filePath, frontMatterContent, "utf8");

  return `Project ${project.slug} created successfully`;
}

// Update an existing project
export async function updateProject(
  slug: string,
  updatedProject: Partial<Project>
): Promise<string> {
  const project = await getProjectBySlug(slug);
  if (!project) {
    throw new Error(`Project with slug "${slug}" does not exist.`);
  }

  // Update the project properties
  Object.assign(project, updatedProject);

  // Save the updated project back to file
  const projectDirectory = await getProjectDirectory();
  const filePath = path.join(projectDirectory, `${slug}.mdx`);

  // Write the updated front matter back to the file
  const frontMatterContent = createMDXContent(project, "");
  fs.writeFileSync(filePath, frontMatterContent, "utf8");

  return `Project ${slug} updated successfully`;
}
