import yaml from "js-yaml";

export function createMDXContent(
  frontMatter: Record<string, any>,
  content: string
): string {
  const frontMatterYaml = yaml.dump(frontMatter, { lineWidth: 1000 }).trim();
  return `---\n${frontMatterYaml}\n---\n\n${content}`;
}

export function parseMDXContent<T>(mdx: string): {
  frontMatter: T;
  content: string;
} {
  const frontMatterEnd = mdx.indexOf("---", 3);
  if (frontMatterEnd === -1) {
    throw new Error("Invalid MDX format: Missing front matter");
  }

  const frontMatter = mdx.slice(3, frontMatterEnd).trim();
  const content = mdx.slice(frontMatterEnd + 3).trim();

  // Use js-yaml to parse the frontmatter, supporting nested objects/arrays
  const frontMatterObj = yaml.load(frontMatter) as T;

  return { frontMatter: frontMatterObj, content };
}
