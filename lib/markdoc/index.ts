import { readMarkdownFile } from "@/lib/file/read";
import { headingNode } from "@/lib/markdoc/nodes/heading";
import { imageNode } from "@/lib/markdoc/nodes/img";
import { blockTag } from "@/lib/markdoc/tags/block";
import { buttonSetTag } from "@/lib/markdoc/tags/buttonSet";
import { commentTag } from "@/lib/markdoc/tags/comment";
import { diningTags } from "@/lib/markdoc/tags/dining";
import { divTag } from "@/lib/markdoc/tags/div";
import { dormsTag } from "@/lib/markdoc/tags/dorms";
import { expandableTag } from "@/lib/markdoc/tags/expandable";
import { gridTag } from "@/lib/markdoc/tags/grid";
import { iconTag } from "@/lib/markdoc/tags/icon";
import { linkButtonGridTag } from "@/lib/markdoc/tags/linkButtonGrid";
import { videoTag } from "@/lib/markdoc/tags/video";
import { youtubeTag } from "@/lib/markdoc/tags/youtube";
import { MarkdocPage } from "@/types/page";
import Markdoc, { Config } from "@markdoc/markdoc";
import yaml from "js-yaml";
import { linkNode } from "./nodes/link";
import { iframeTag } from "./tags/iframe";
import { linksTag } from "./tags/links";

const config: Config = {
  nodes: {
    heading: headingNode,
    image: imageNode,
    link: linkNode,
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
    block: blockTag,
    ...diningTags,
    buttonSet: buttonSetTag,
    links: linksTag,
    iframe: iframeTag,
  },
};

export const markdocFromFile = <T>(filepath: string) => {
  const source = readMarkdownFile(`${filepath}`).trim();
  const ast = Markdoc.parse(source);
  const errors = Markdoc.validate(ast, config);
  const frontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};

  const content = Markdoc.transform(ast, config);

  return {
    frontmatter,
    content,
    errors,
  } as unknown as T;
};

// This function seems to be useless
// TODO: remove
export const getMarkdocPage = (filepath: string): MarkdocPage => {
  const page: MarkdocPage = markdocFromFile(filepath);
  return page;
};
