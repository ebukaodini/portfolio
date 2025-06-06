"use server";

import { BlogPost } from "@/interfaces/blog-post";
import { createMDXContent, parseMDXContent } from "@/utils/mdx";
import fs from "fs";
import path from "path";

// Get the blog directory path
async function getBlogDirectory(): Promise<string> {
  return path.join(process.cwd(), "content", "blogs");
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (typeof window !== "undefined") {
    throw new Error("getAllBlogPosts can only be called at build time");
  }

  const blogDirectory = await getBlogDirectory();

  // Check if directory exists
  if (!fs.existsSync(blogDirectory)) {
    console.warn(`Blog directory not found: ${blogDirectory}`);
    return [];
  }

  // Get all .mdx files
  const filenames = fs
    .readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  const posts: BlogPost[] = [];

  filenames.forEach((filename) => {
    try {
      const filePath = path.join(blogDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { frontMatter, content } = parseMDXContent<BlogPost>(fileContent);

      // Extract slug from filename (remove .mdx extension)
      const slug = filename.replace(".mdx", "");

      // Ensure slug is set in frontMatter (use filename as fallback)
      if (!frontMatter.slug) {
        frontMatter.slug = slug;
      }

      posts.push({
        ...frontMatter,
        content,
      });
    } catch (error) {
      console.error(`Error parsing ${filename}:`, error);
    }
  });

  // Sort posts by published date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt!);
    const dateB = new Date(b.publishedAt!);
    return dateB.getTime() - dateA.getTime();
  });
}

// Get a single blog post by slug
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const blogDirectory = await getBlogDirectory();
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { frontMatter, content } = parseMDXContent<BlogPost>(fileContent);

    // Ensure slug is set
    if (!frontMatter.slug) {
      frontMatter.slug = slug;
    }

    return {
      ...frontMatter,
      content,
    };
  } catch (error) {
    console.error(`Error parsing blog post ${slug}:`, error);
    return null;
  }
}

// Get all published blog posts (excludes drafts)
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  return (await getAllBlogPosts()).filter(
    (post) => post.status === "published"
  );
}

// Get blog posts by category
export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  return (await getPublishedBlogPosts()).filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  return (await getPublishedBlogPosts()).filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  const posts = await getPublishedBlogPosts();
  const categories = posts.map((post) => post.category);
  return [...new Set(categories)];
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getPublishedBlogPosts();
  const tags = posts.flatMap((post) => post.tags);
  return [...new Set(tags)];
}

// Get blog post slugs for generateStaticParams
export async function getBlogPostSlugs(): Promise<string[]> {
  return (await getPublishedBlogPosts()).map((post) => post.slug!);
}

// Delete a blog post by slug
export async function deleteBlogPostBySlug(slug: string): Promise<void> {
  const blogDirectory = await getBlogDirectory();
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post with slug "${slug}" does not exist.`);
  }

  // Delete the file
  fs.unlinkSync(filePath);
}

// create a new blog post
export async function createBlogPost(post: BlogPost): Promise<string> {
  const blogDirectory = await getBlogDirectory();
  const filePath = path.join(blogDirectory, `${post.slug}.mdx`);

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    throw new Error(`Blog post with slug "${post.slug}" already exists.`);
  }

  const frontMatterContent = createMDXContent(post, post.content);
  fs.writeFileSync(filePath, frontMatterContent, "utf8");

  return `Blog post created at ${filePath}`;
}

// Update an existing blog post
export async function updateBlogPost(post: BlogPost): Promise<string> {
  const blogDirectory = await getBlogDirectory();
  const filePath = path.join(blogDirectory, `${post.slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post with slug "${post.slug}" does not exist.`);
  }

  const frontMatterContent = createMDXContent(post, post.content);
  fs.writeFileSync(filePath, frontMatterContent, "utf8");

  return `Blog post updated at ${filePath}`;
}
