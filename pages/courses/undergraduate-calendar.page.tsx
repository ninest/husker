import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { PDFEmbed } from "@/components/PDFEmbed";
import { Spacer } from "@/components/Spacer";

const UndergraduateCalendarPage = () => {
  const calendarHref = "/files/calendar-2021-2022.pdf";

  return (
    <>
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Undergraduate Calendar 2021-2022"
      ></ArticleHead>

      {/* <object
        className="w-full"
        style={{
          height: "calc(100vh - 10rem)",
        }}
        data={calendarHref}
        type="application/pdf"
      >
        <embed src={calendarHref} type="application/pdf" />
      </object> */}

      {/* <object
        data={calendarHref}
        type="application/pdf"
        className="w-full"
        style={{
          height: "calc(100vh - 10rem)",
        }}
      >
        <embed
          className="w-full"
          style={{
            height: "calc(100vh - 10rem)",
          }}
          src={`https://docs.google.com/viewer?url=https://husker.vercel.app/${calendarHref}&embedded=true`}
        />
      </object> */}

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
