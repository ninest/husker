import { ArticleHead } from "@/components/ArticleHead";
import { GetServerSideProps } from "next/types";
import { JSDOM } from "jsdom";
import { Spacer } from "@/components/util/Spacer";
import { Button } from "@/components/Button";
import { NextSeo } from "next-seo";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pageId = params?.slug![0];
  const url = `https://huskypedia.miraheze.org/w/api.php?action=parse&page=${pageId}&format=json`;

  const res = await fetch(url);
  const data = await res.json();

  const title = data.parse.title;
  const html = data.parse.text["*"];

  const dom = new JSDOM(html);
  const content =
    dom.window.document.getElementsByClassName("mw-parser-output")[0];

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
      console.log(pageId);
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

  return { props: { pageId, title, html: content.innerHTML } };
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
      <NextSeo title={title} description={title} />

      <ArticleHead backButtonHref="/wiki" backButtonText="Wiki" title={title} />

      <article className="wrapper">
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>

        <Spacer size="xl" />
        <div className="flex items-center space-x-base">
          <Button href={editHref} icon="pen" size="sm">
            Edit
          </Button>
        </div>
      </article>
    </>
  );
};

export default WikiPage;
