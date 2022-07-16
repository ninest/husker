import path from "path";
import { readFile } from "@/lib/file/read";
import { bundleMDX } from "mdx-bundler";
import remarkCodeMeta from "remark-code-meta";
import math from "remark-math";
import katex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Page } from "@/types/page";

export async function mdxFromFile<T>(filepath: string) {
  const source = readFile(`${filepath}/index.md`).trim();

  /* 
  Fix for Nextjs esbuild ENOENT
  https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent 
  */
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(process.cwd(), "/content"),
    xdmOptions(options, frontmatter) {
      // Return xdmOptions: https://github.com/kentcdodds/mdx-bundler#xdmoptions
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkCodeMeta,
        math,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        katex,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), "/public/notouchy", filepath);
      options.loader = {
        ...options.loader,
        ".png": "file",
        ".jpg": "file",
        ".jpeg": "file",
        ".mp4": "file",
        ".pdf": "file",
      };

      options.publicPath = filepath;

      options.write = true;
      return options;
    },
  });

  /* Convert dates to string for Nextjs */
  Object.keys(frontmatter).forEach((key) => {
    if (frontmatter[key] instanceof Date) {
      frontmatter[key] = (frontmatter[key] as Date).toISOString();
    }
  });

  return {
    code,
    frontmatter,
  } as unknown as T;
}

export async function getPage(filepath: string): Promise<Page> {
  const page: Page = await mdxFromFile(filepath);
  return page;
}