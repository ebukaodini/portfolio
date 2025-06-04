// Helper function to create MDX content with front matter
export function createMDXContent(
  frontMatter: Record<string, any>,
  content: string
): string {
  const frontMatterYaml = Object.entries(frontMatter)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return `${key}: "${value}"`;
      } else if (Array.isArray(value)) {
        return `${key}: [${value.map((v) => `"${v}"`).join(", ")}]`;
      } else if (value instanceof Date) {
        return `${key}: ${value.toISOString()}`;
      } else {
        return `${key}: ${value}`;
      }
    })
    .join("\n");

  return `---
${frontMatterYaml}
---

${content}`;
}

export function parseMDXContent<T>(mdx: string): object {
  const frontMatterEnd = mdx.indexOf("---", 3);
  if (frontMatterEnd === -1) {
    throw new Error("Invalid MDX format: Missing front matter");
  }

  const frontMatter = mdx.slice(3, frontMatterEnd).trim();
  const content = mdx.slice(frontMatterEnd + 3).trim();

  const frontMatterObj: Record<string, any> = {};
  frontMatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    const value = valueParts.join(":").trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      frontMatterObj[key.trim()] = value.slice(1, -1); // Remove quotes
    } else if (value.startsWith("[") && value.endsWith("]")) {
      frontMatterObj[key.trim()] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^"|"$/g, "")); // Remove quotes from array items
    } else if (new Date(value).toString() !== "Invalid Date") {
      frontMatterObj[key.trim()] = new Date(value); // Parse date
    } else {
      frontMatterObj[key.trim()] = value; // Keep as string
    }
  });

  return { frontMatter: frontMatterObj as T, content };
}
