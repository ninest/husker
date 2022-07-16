import fs from "fs";
import path from "path";
import { fileExists } from "./exists";

const root = process.cwd();

export function readFile(filepath: string) {
  if (fileExists(filepath)) {
    return fs.readFileSync(path.join(root, "content", `${filepath}`), "utf8");
  } else {
    // If the file doesn't exist, return the "index.ext" file
    const { fileName, extension } = fileNameExtension(filepath);
    return fs.readFileSync(
      path.join(root, "content", `${fileName}/index.${extension}`),
      "utf8"
    );
  }
}

export function fileNameExtension(filepath: string) {
  /* Split at last index of "." */
  const lastIndex = filepath.lastIndexOf(".");
  return {
    fileName: filepath.substr(0, lastIndex),
    extension: filepath.substr(lastIndex),
  };
}
