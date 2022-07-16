import { Title } from "@/components/Title";
import { readFile } from "@/lib/file/read";
import { MarkdocPage } from "@/types/page";
import Markdoc, { Config } from "@markdoc/markdoc";
import yaml from "js-yaml";
import { headingNode } from "./nodes/heading";
import { expandableTag } from "./tags/expandable";
import { iconTag } from "./tags/icon";

const config: Config = {
  nodes: {
    heading: headingNode,
  },
  tags: {
    icon: iconTag,
    expandable: expandableTag,
  },
};

export const markdocComponents = {
  Title,
};

export const markdocFromFile = <T>(filepath: string) => {
  const source = readFile(`${filepath}/index.md`).trim();
  const ast = Markdoc.parse(source);
  const errors = Markdoc.validate(ast, config);
  const frontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

  console.log(frontmatter);

  const content = Markdoc.transform(ast, config);

  return {
    frontmatter,
    content,
    errors,
  } as unknown as T;
};

export const getMarkdocPage = (filepath: string): MarkdocPage => {
  const page: MarkdocPage = markdocFromFile(filepath);
  return page;
};
