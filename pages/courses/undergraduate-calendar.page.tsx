import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { PDFEmbed } from "@/components/PDFEmbed";
import { Spacer } from "@/components/Spacer";
import { NextSeo } from "next-seo";

const UndergraduateCalendarPage = () => {
  const calendarHref = "/files/calendar-2021-2022.pdf";

  return (
    <>
      <NextSeo
        title="Undergraduate Calendar"
        description="View the calendar for Northeastern"
      />
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Undergraduate Calendar 2021-2022"
      ></ArticleHead>

      <PDFEmbed href={calendarHref}></PDFEmbed>

      <Spacer />

      <div className="wrapper">
        <Button href={calendarHref} icon="download">
          Download
        </Button>
      </div>
    </>
  );
};

export default UndergraduateCalendarPage;
