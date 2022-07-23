import { ArticleHead } from "@/components/ArticleHead";
import { Block } from "@/components/Block";
import { ButtonSet } from "@/components/button/ButtonSet";
import { MutedButton } from "@/components/button/MutedButton";
import { Video } from "@/components/embed/Video";
import { YoutubeEmbed } from "@/components/embed/YoutubeEmbed";
import { Expandable } from "@/components/Expandable";
import { Icon } from "@/components/Icon";
import { LinkButtonGrid } from "@/components/link/LinkButton";
import { LinkSet } from "@/components/link/LinkSet";
import { MarkdocDiv } from "@/components/markdoc/MarkdocDiv";
import { MarkdocImage } from "@/components/markdoc/MarkdocImage";
import { SmartLink } from "@/components/SmartLink";
import { MealExchangeDining, OffCampusDining, OnCampusDining } from "@/components/special/Dining";
import { Dorms } from "@/components/special/Dorms";
import { Title } from "@/components/Title";
import { Debug } from "@/components/util/Debug";
import { Grid } from "@/components/util/Grid";
import { Spacer } from "@/components/util/Spacer";
import { dorms } from "@/content/housing";
import { contentMap, pages } from "@/content/map";
import { listToFilepath } from "@/lib/file/list-to-file";
import { getMarkdocPage } from "@/lib/markdoc";
import { objectEmpty } from "@/utils/object";
import Markdoc from "@markdoc/markdoc";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryPaths = contentMap.map((category) => `/${category.slug}`);
  const otherPagePaths = pages.map((page) => `${page}`);

  return {
    paths: [...categoryPaths, ...otherPagePaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugList = params?.slug! as string[]; // [services, free]
  const slug = listToFilepath(slugList); // "services/free"

  /* Create back button attributes */
  const href = slugList.length == 1 ? `/` : `/${slugList[0]}`; // First item in slug; "/services"
  const text = slugList.length == 1 ? `Links` : (await getMarkdocPage(href)).frontmatter.title; // "Services"
  const back = { href, text };

  /* Markdoc page */
  const { frontmatter, content, errors } = getMarkdocPage(slug);

  /* Category page? */
  const isCategoryPage =
    slugList.length === 1 && // it's a top level page ...
    contentMap.find((category) => category.slug === slug); // and the cat slug is valid
  const category = contentMap.find((cat) => cat.slug === slugList[0]) ?? null;

  /* Should contain link set */
  const isHousePage = !!dorms.find((dorm) => dorm.slug == slugList[1]);

  const containsLinkSet = isCategoryPage || isHousePage;

  let links = null;
  let pages = null;

  if (containsLinkSet) {
    links = category?.links ?? null;
    pages = category?.pages ?? null;
  }

  // For housing pages, the "category" is either "house" or "housing"
  if (slugList.length > 1 && isHousePage) {
    const dormSlug = slugList[slugList.length - 1]; // The last part of the URL
    const dorm = dorms.find((dorm) => dorm.slug == dormSlug);
    links = dorm?.links ?? null;
    pages = dorm?.pages ?? null;
  }

  return {
    props: {
      back,
      category,
      containsLinkSet,
      links,
      pages,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)), //TODO: fix date serialization
      content: JSON.stringify(content),
      errors: JSON.stringify(errors),
    },
  };
};

const ContentPage = ({
  back,
  category,
  links,
  pages,
  frontmatter,
  content,
  errors,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const showLinkSet = links || pages;
  const parsedContent = JSON.parse(content);
  const renderedContent = Markdoc.renderers.react(parsedContent, React, {
    // TODO: move somewhere else
    components: {
      Title,
      Icon,
      Expandable,
      Dorms,
      LinkButtonGrid,
      YoutubeEmbed,
      Grid,
      MarkdocImage,
      Video,
      MarkdocDiv,
      Block,
      OffCampusDining,
      OnCampusDining,
      MealExchangeDining,
      ButtonSet,
      SmartLink,
    },
  });
  const parsedErrors = JSON.parse(errors);

  // @ts-ignore
  const containsProse = !objectEmpty(renderedContent.props);

  return (
    <>
      <NextSeo title={frontmatter.title} description={frontmatter.description} />

      <ArticleHead
        backButtonHref={back.href}
        backButtonText={back.text}
        title={frontmatter.title}
      />

      <div className="wrapper">
        {showLinkSet && (
          <>
            <LinkSet showFull links={links} pages={pages} />
            <Spacer size="xl" />
          </>
        )}

        {parsedErrors.length > 0 && (
          <>
            <Expandable variant="error" title="Markdoc errors" open containsProse>
              <p>
                You should <b>not</b> be able to see this! Please review the errors:
              </p>
              <Debug data={parsedErrors} noSpaceAbove />
            </Expandable>
            <Spacer size="xl" />
          </>
        )}

        {containsProse && (
          <>
            <div className="prose">{renderedContent}</div>
            <Spacer size="xl"></Spacer>
          </>
        )}

        <div className="flex flex-col items-start justify-center space-y-xs md:space-y-sm">
          <MutedButton
            href={{
              pathname: "/contribute",
              query: { name: frontmatter.title },
            }}
            icon="pen"
            size="sm"
          >
            Edit
          </MutedButton>
          <MutedButton
            href={{
              pathname: "/contribute",
              query: { name: frontmatter.title, fixLinks: true },
            }}
            icon="bug"
            size="sm"
          >
            Links broken?
          </MutedButton>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
