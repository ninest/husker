import { ArticleHead } from "@/components/ArticleHead";
import { GetServerSideProps } from "next/types";
import { JSDOM } from "jsdom";
import { Spacer } from "@/components/Spacer";
import { Button } from "@/components/Button";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pageId = params?.slug![0];
  const url = `https://huskypedia.miraheze.org/w/api.php?action=parse&page=${pageId}&format=json`;

  const res = await fetch(url);
  const data = await res.json()
  
  console.log(data);

  const title = data.parse.title;
  const html = data.parse.text["*"];

  const content = new JSDOM(html);
  const one =
    content.window.document.getElementsByClassName("mw-parser-output")[0];

  // Remove all edit tags
  const editTags = one.querySelectorAll(".mw-editsection");
  editTags.forEach((et) => et.remove());

  // Change all a tags
  const aTags = one.querySelectorAll("a");

  // underline tailwind class
  aTags.forEach((a) => (a.className += " underline"));

  // Replace link if links to another wiki page
  aTags.forEach((a) => {
    if (a.href.includes("huskypedia.miraheze.org")) {
      const pageId = a.href.split("wiki/")[1];
      a.href = `/wiki/${pageId}`;
    }
  });

  return { props: { pageId, title, html: one.innerHTML } };
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
