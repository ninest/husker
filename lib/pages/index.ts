import { Page } from "@/types/page";
import { mdxFromFile } from "../mdx";

export async function getPage(filepath: string): Promise<Page> {
  const page: Page = await mdxFromFile(filepath);
  return page;
}
