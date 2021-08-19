import fs from "fs";
import path from "path";
import glob from "glob";

const root = process.cwd();

export function getFile(filepath: string, extension: string) {
  // Check if file exists
  if (fs.existsSync(path.join(root, "content", `${filepath}.${extension}`))) {
    return fs.readFileSync(
      path.join(root, "content", `${filepath}.${extension}`),
      "utf8"
    );
  } else {
    // If it doesn't read index file in directory
    return fs.readFileSync(
      path.join(root, "content", `${filepath}/index.${extension}`),
      "utf8"
    );
  }
}

export function getAllFiles(folderpath: string, extension: string) {
  /* Returns ["folderpath", "filepath.ext"] */

  const files = glob.sync(
    path.join(root, "content", folderpath, `**/*.${extension}`)
  );
  return files.map((file) => {
    /*
    Convert path to list  
    /parent/folder/file.mdx => ["parent", "folder", "file"]
    */
    const filepath = file // parent/folder/file.mdx
      .split(`${folderpath}/`)[1] // folder/file.mdx
      .split(`.${extension}`)[0] // folder  /file
      .split("/"); // ["folder", "file"]
    return filepath;
  });
}

export function fileExists(filepath: string) {}
