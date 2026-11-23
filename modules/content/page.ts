import { readFile } from "node:fs/promises";
import path from "node:path";

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

/** A wiki page's Markdown from content/pages/<slug>.md, or null if it has none. */
export async function getPageMarkdown(slug: string): Promise<string | null> {
  // Slugs come from content/articles.json, but never read outside the folder.
  if (!/^[\w-]+$/.test(slug)) return null;
  try {
    return await readFile(path.join(PAGES_DIR, `${slug}.md`), "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
