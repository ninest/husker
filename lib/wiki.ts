import { JSDOM } from "jsdom";

export interface WikiPageInfo {
  name: string;
  href: string;
}

export const getAllWikiPages = async (): Promise<WikiPageInfo[]> => {
  const response = await fetch("https://huskypedia.miraheze.org/wiki/Special:AllPages");
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const $list = document.querySelector(".mw-allpages-chunk");
  const $items = $list?.querySelectorAll("li");

  const wikiPages: WikiPageInfo[] = [];

  $items?.forEach(($item) => {
    const name = $item.textContent!;
    const $a = $item.querySelector("a");
    const href = $a?.getAttribute("href") ?? "/";

    wikiPages.push({ name, href });
  });

  return wikiPages;
};
