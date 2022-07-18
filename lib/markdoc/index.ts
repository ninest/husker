import { Title } from "@/components/Title";
import { readFile } from "@/lib/file/read";
import { MarkdocPage } from "@/types/page";
import Markdoc, { Config } from "@markdoc/markdoc";
import yaml from "js-yaml";
import { headingNode } from "./nodes/heading";
import { imageNode } from "./nodes/img";
import { commentTag } from "./tags/comment";
import { divTag } from "./tags/div";
import { dormsTag } from "./tags/dorms";
import { expandableTag } from "./tags/expandable";
import { gridTag } from "./tags/grid";
import { iconTag } from "./tags/icon";
import { linkButtonGridTag } from "./tags/linkButtonGrid";
import { videoTag } from "./tags/video";
import { youtubeTag } from "./tags/youtube";

const config: Config = {
  nodes: {
    heading: headingNode,
    image: imageNode,
  },
  tags: {
    icon: iconTag,
    expandable: expandableTag,
    dorms: dormsTag,
    linkButtonGrid: linkButtonGridTag,
    youtube: youtubeTag,
    grid: gridTag,
    comment: commentTag,
    video: videoTag,
    div: divTag,
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
