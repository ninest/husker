import { ArticleHead } from "@/components/ArticleHead";
import { QuickContribute } from "@/components/QuickContribute";
import { Spacer } from "@/components/util/Spacer";
import { getAllWikiPages } from "@/lib/wiki";
import { JSDOM } from "jsdom";
import { NextSeo } from "next-seo";
import { GetServerSideProps } from "next/types";

export const getStaticPaths = async () => {
  if (process.env.SKIP_BUILD) {
    return { paths: [], fallback: "blocking" };
  }

  const wikiPages = await getAllWikiPages();

  return {
    paths: wikiPages.map((wikiPage) => wikiPage.href),
    fallback: "blocking",
  };
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  console.log("Pre-rendering page");

  const pageId = params?.slug![0];
  console.log(`pageId ${pageId}\n\n`);
  const url = `https://huskypedia.miraheze.org/w/api.php?action=parse&page=${pageId}&format=json`;

  const res = await fetch(url);
  const data = JSON.parse(await res.text());

  const title = data.parse.title;
  const html = data.parse.text["*"];

  const dom = new JSDOM(html);
  const content = dom.window.document.getElementsByClassName("mw-parser-output")[0];

  // Remove all edit tags
  const editTags = content.querySelectorAll(".mw-editsection");
  editTags.forEach((et) => et.remove());

  // Remove all styles from all tags
  const allTags = content.querySelectorAll("*");
  allTags.forEach((tag) => tag.setAttribute("style", ""));

  // Change all a tags
  const aTags = content.querySelectorAll("a");

  // underline tailwind class
  aTags.forEach((a) => (a.className += " underline"));

  aTags.forEach((a) => {
    // Replace link if links to another wiki page
    if (a.href.includes("/wiki/")) {
      const pageId = a.href.split("/wiki/")[1];
      a.href = `/wiki/${pageId}`;
    }

    // Show link in red if
    if (a.href.includes("/w/index.php")) {
      const pageId = a.href.split("title=")[1].split("&")[0];
      a.className += " text-error";
      a.href = `/contribute?name=${pageId}`;
    }
  });

  // Remove TOC
  const toc = content.querySelector("#toc");
  toc?.remove();

  // Remove right side content
  const rightContent = content.querySelectorAll(".tright");
  rightContent.forEach((element) => element.remove());

  return { revalidate: 100, props: { pageId, title, html: content.innerHTML } };
};

interface WikiPageProps {
  pageId: string;
  title: string;
  html: string;
}

const WikiPage = ({ pageId, title, html }: WikiPageProps) => {
  const editHref = `https://huskypedia.miraheze.org/w/index.php?title=${pageId}&action=edit`;
  return (
    <>
      <NextSeo
        title={title}
        description={`${title} from the Huskypedia wiki`}
        openGraph={{
          images: [
            {
              // TODO: use env var
              url: `https://husker.vercel.app/api/og-image?name=${title}`,
            },
          ],
        }}
      />

      <ArticleHead backButtonHref="/wiki" backButtonText="Wiki" title={title} />

      <article className="wrapper">
        <QuickContribute editHref={editHref} />
        <Spacer size="md" />

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>

        <Spacer size="xl" />
        <QuickContribute editHref={editHref} fixLinksHref={editHref} />
      </article>
    </>
  );
};

export default WikiPage;
