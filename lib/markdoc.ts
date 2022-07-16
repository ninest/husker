import Markdoc from "@markdoc/markdoc";
import yaml from "js-yaml";
import { readFile } from "@/lib/file/read";

export const markdocFromFile = <T>(filepath: string) => {
  const source = readFile(`${filepath}/index.md`).trim();
  const ast = Markdoc.parse(source);

  const frontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

  const content = Markdoc.transform(ast /* config */);

  const html = Markdoc.renderers.html(content);

  return {
    frontmatter,
    html,
  } as unknown as T;
};
