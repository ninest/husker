import { ArticleHead } from "@/components/ArticleHead";
import { LinkSet } from "@/components/link/LinkSet";
import { wikiMap, wikiOtherPages } from "@/content/wiki";
import { getAllWikiPages, WikiPageInfo } from "@/lib/wiki";
import { Link } from "@/types/category";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const wikiPages = await getAllWikiPages();

  return { props: { wikiPages } };
};

interface Props {
  wikiPages: WikiPageInfo[];
}
const WikiIndexPage = ({ wikiPages }: Props) => {
  return (
    <>
      <NextSeo
        title={"Huskypedia Wiki"}
        description={"Map of Huskypedia"}
        openGraph={{
          images: [
            {
              // TODO: use env var
              url: `https://husker.vercel.app/api/og-image?name=Wiki`,
            },
          ],
        }}
      />

      <ArticleHead backButtonHref="/" backButtonText="Links" title="Wiki" />

      <article className="wrapper">
        <LinkSet showTitle={false} showFull links={wikiPages as Link[]} />
      </article>
    </>
  );
};

export default WikiIndexPage;
