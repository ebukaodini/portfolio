// Estimate reading time (1 minute per 200 words)
export function readingTime(content: string): string {
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return `${readingTime} min read`;
}
