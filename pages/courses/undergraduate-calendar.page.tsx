import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { PDFEmbed } from "@/components/PDFEmbed";
import { Spacer } from "@/components/Spacer";
import { NextSeo } from "next-seo";

const UndergraduateCalendarPage = () => {
  const calendarHref2022 = "/files/calendar/2021-2022.pdf";
  const calendarHref2023 = "/files/calendar/2022-2023.pdf";

  return (
    <>
      <NextSeo
        title="Undergraduate Calendar"
        description="View the calendar for Northeastern"
      />
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Undergraduate Calendar 2021-2023"
      ></ArticleHead>

      <Spacer />

      <PDFEmbed href={calendarHref2022}></PDFEmbed>

      <Spacer />

      <div className="wrapper">
        <Button href={calendarHref2022} icon="download">
          Download
        </Button>
      </div>

      <Spacer size="2xl" />
      <div className="wrapper prose">
        <h2>2022-2023</h2>
      </div>
      <Spacer />
      <PDFEmbed href={calendarHref2023}></PDFEmbed>
    </>
  );
};

export default UndergraduateCalendarPage;
