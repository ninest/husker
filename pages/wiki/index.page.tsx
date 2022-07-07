import { ArticleHead } from "@/components/ArticleHead";
import { LinkSet } from "@/components/link/LinkSet";
import { wikiMap, wikiOtherPages } from "@/content/wiki";
import { NextSeo } from "next-seo";

const WikiIndexPage = () => {
  const links = wikiMap;
  const pages = wikiOtherPages;

  return (
    <>
      <NextSeo title={"Wiki"} description={"Map of Huskypedia"} />

      <ArticleHead backButtonHref="/" backButtonText="Links" title="Wiki" />

      <article className="wrapper">
        <LinkSet showTitle={false} showFull links={links} pages={pages} />
      </article>
    </>
  );
};

export default WikiIndexPage;
