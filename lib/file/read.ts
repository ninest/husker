import fs from "fs";
import path from "path";
import { fileExists } from "./exists";

const root = process.cwd();

// TODO: generic typings

export function readFile(filepath: string) {
  return fs.readFileSync(path.join(root, "content", `${filepath}`), "utf8");
}

// contentpath should nat have `.md`
export function readMarkdownFile(contentpath: string) {
  if (fileExists(`${contentpath}.md`)) {
    return readFile(`${contentpath}.md`);
  } else {
    return readFile(`${contentpath}/index.md`);
  }
}

export function fileNameExtension(filepath: string) {
  /* Split at last index of "." */
  const lastIndex = filepath.lastIndexOf(".");

  if (lastIndex == -1) {
    return { fileName: filepath, extension: null };
  }

  return {
    fileName: filepath.substr(0, lastIndex),
    extension: filepath.substr(lastIndex),
  };
}
