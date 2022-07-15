import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { PDFEmbed } from "@/components/embed/PDFEmbed";
import { Spacer } from "@/components/util/Spacer";
import { NextSeo } from "next-seo";

const CapacityPage = () => {
  const capacity21 = "/files/housing/capacity/2021.pdf";
  // const capacity21 = "/files/house/room-rates/first-year-2022.pdf";

  return (
    <>
      <NextSeo
        title="Housing Capacity"
        description="View the housing capacity to plan ahead for room selection"
      />
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Housing Capacity 2021"
      ></ArticleHead>

      <Spacer />

      <PDFEmbed href={capacity21}></PDFEmbed>

      <Spacer />

      <div className="wrapper">
        <Button href={capacity21} icon="download">
          Download
        </Button>
      </div>
    </>
  );
};

export default CapacityPage;
