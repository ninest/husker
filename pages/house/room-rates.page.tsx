import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/button/Button";
import { PDFEmbed } from "@/components/embed/PDFEmbed";
import { Spacer } from "@/components/util/Spacer";
import { NextSeo } from "next-seo";

const RoomRatePage = () => {
  const roomRates = [
    {
      title: "First Year",
      href: "/files/housing/room-rates/first-year-2022.pdf",
    },
    {
      title: "Upperclassmen",
      href: "/files/housing/room-rates/upperclassmen-2023.pdf",
    },
    {
      title: "Graduate/Law",
      href: "/files/housing/room-rates/graduate-law-2022.pdf",
    },
  ];

  return (
    <>
      <NextSeo
        title="Housing Rates"
        description="Northeastern housing rates: how much are you paying?"
      />

      <ArticleHead
        backButtonHref="/housing"
        backButtonText="Housing"
        title="Room Rates 2021-2022"
      ></ArticleHead>

      <div className="prose">
        {roomRates.map((cat) => (
          <div key={cat.href}>
            <div className="wrapper">
              <h2>{cat.title}</h2>
            </div>

            <Spacer />

            <div>
              <PDFEmbed
                href={cat.href}
                style={{
                  // Can be shorter
                  height: "calc(100vh - 25rem)",
                }}
              ></PDFEmbed>
            </div>

            <Spacer />

            <div className="wrapper">
              <Button href={cat.href} iconLeft="download">
                Download
              </Button>
            </div>

            <Spacer />
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomRatePage;
