import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { PDFEmbed } from "@/components/PDFEmbed";
import { Spacer } from "@/components/Spacer";

const RoomRatePage = () => {
  const roomRates = [
    {
      title: "First Year",
      href: "/files/room-rates/first-year-2022.pdf",
    },
    {
      title: "Upperclassmen",
      href: "/files/room-rates/upperclassmen-2022.pdf",
    },
    {
      title: "Graduate/Law",
      href: "/files/room-rates/graduate-law-2022.pdf",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <ArticleHead
          backButtonHref="/housing"
          backButtonText="Housing"
          title="Room Rates 2021-2022"
        ></ArticleHead>
      </div>

      <div className="prose">
        {roomRates.map((cat) => (
          <>
            <div className="wrapper">
              <h2>{cat.title}</h2>
            </div>
            <div>
              <PDFEmbed
                href={cat.href}
                style={{
                  // Can be shorter
                  height: "calc(100vh - 25rem)",
                }}
              ></PDFEmbed>
            </div>
            <p className="wrapper">
              <Button href={cat.href} icon="download">
                Download
              </Button>
            </p>
            <Spacer />
          </>
        ))}
      </div>
    </>
  );
};

export default RoomRatePage;
