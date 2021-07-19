import path from "path";
import { bundleMDX } from "mdx-bundler";
import { getFile } from "@/lib/file";
import { Guide } from "@/types/guide";


export async function getMDX<T>(filepath: string) {
  const markdownSource = getFile(`guides/${filepath}/index`, "md").trim();

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

  const { code, frontmatter } = await bundleMDX(markdownSource, {
    cwd: process.cwd(),
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      return options;
    },
    esbuildOptions(options) {
      options.platform = "node";
      options.outdir = path.join(process.cwd(), "/public/notouchy", filepath);
      options.loader = {
        ...options.loader,
        ".png": "file",
      };
      options.publicPath = filepath;
      options.write = true;

      return options;
    },
  });

  /* Convert dates to string */
  Object.keys(frontmatter).forEach((key) => {
    if (frontmatter[key] instanceof Date) {
      frontmatter[key] = frontmatter[key].toISOString();
    }
  });

  return {
    code,
    frontmatter,
  } as unknown as T;
}
