import fs from "fs";
import path from "path";

const root = process.cwd();

export function fileExists(filepath: string) {
  return fs.existsSync(path.join(root, "content", `${filepath}`));
}