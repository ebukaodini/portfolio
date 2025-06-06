import { useState } from "react";
import { createMDXContent } from "../utils/mdx";

// utils/githubClient.ts
interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
}

class GitHubClient {
  private config: GitHubConfig;

  constructor(config: GitHubConfig) {
    this.config = config;
  }

  async createFile(path: string, content: string, message: string) {
    const encodedContent = btoa(unescape(encodeURIComponent(content)));

    const response = await fetch(
      `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${path}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${this.config.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          content: encodedContent,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return response.json();
  }

  async fileExists(path: string): Promise<boolean> {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${path}`,
        {
          headers: {
            Authorization: `token ${this.config.token}`,
          },
        }
      );
      return response.ok;
    } catch {
      return false;
    }
  }
}

// Custom hook for GitHub operations
export const useGitHub = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [config, setConfig] = useState({
    owner: "EbukaOdini",
    repo: "portfolio",
    token: process.env.CONFIG_TOKEN!,
  });

  const saveToGitHub = async (
    content: string,
    frontMatter: Record<string, any>
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const client = new GitHubClient(config);
      const mdxContent = createMDXContent(frontMatter, content);
      const filename = frontMatter.slug;
      const path = `data/posts/${filename}.mdx`;

      // Check if file exists
      const exists = await client.fileExists(path);
      if (exists) {
        throw new Error(`File "${filename}.mdx" already exists`);
      }

      await client.createFile(
        path,
        mdxContent,
        `Add new post: ${frontMatter.title}`
      );

      return { success: true, filename: `${filename}.mdx`, path };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { saveToGitHub, isLoading, error };
};
