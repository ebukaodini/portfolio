export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-|-$/g, "") // Remove leading and trailing hyphens
    .slice(0, 50) // Limit to 50 characters
    .toLowerCase();
}
