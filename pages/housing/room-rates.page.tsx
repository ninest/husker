import { ArticleHead } from "@/components/ArticleHead";

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
              <object
                className="w-full"
                style={{
                  height: "calc(100vh - 15rem)",
                }}
                data={cat.href}
                type="application/pdf"
              >
                <embed src={cat.href} type="application/pdf" />
              </object>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default RoomRatePage;
