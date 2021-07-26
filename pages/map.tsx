import Image from "next/image";
import { useState } from "react";
import { NextSeo } from "next-seo";
import clsx from "clsx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import map from "@/public/map.png";
import { locationsGroupList } from "@/data/map";

export default function MapPage() {
  const [locationListId, setLocationListId] = useState(0);
  return (
    <>
      <NextSeo
        title={"NEU Map"}
        description={"Mobile-friendly NEU campus map"}
      ></NextSeo>
      <div style={{ height: "100vh", overflow: "none" }}>
        <TransformWrapper
          initialScale={0.9}
          minScale={0.8}
          maxScale={3}
          centerOnInit={true}
        >
          <TransformComponent>
            <div
              style={{ height: "65vh", width: "100%" }}
              className="flex items-center justify-center"
            >
              <Image
                src={map}
                loading="eager"
                placeholder="blur"
                alt="Northeastern campus map"
              ></Image>
            </div>
          </TransformComponent>

          {/* TODO: separate into it's own component */}
          <div className="absolute bottom-0 right-0 left-0 w-full h-2/5 overflow-y-scroll bg-white border-t">
            <section className="p-base sticky top-0 bg-white bg-opacity-80 flex space-x-base overflow-x-scroll">
              {locationsGroupList.map((locationsGroupList, index) => (
                <h3
                  key={index}
                  className={clsx(
                    "whitespace-nowrap font-bold -m-xs p-xs rounded-md",
                    {
                      "bg-black bg-opacity-10": locationListId == index,
                    }
                  )}
                  style={{ color: locationsGroupList.color }}
                  onClick={() => setLocationListId(index)}
                >
                  {locationsGroupList.name}
                </h3>
              ))}
            </section>
            <section className="p-base">
              <ul>
                {locationsGroupList[locationListId].locations.map(
                  (location) => (
                    <li
                      key={location.shortName}
                      className="flex items-center justify-between space-x-sm"
                    >
                      <div className="space-x-sm">
                        <span className="text-gray font-light">
                          {location.coords}
                        </span>
                        <span>{location.name}</span>
                      </div>
                      <div className="font-bold">{location.shortName}</div>
                    </li>
                  )
                )}
              </ul>
            </section>
          </div>
        </TransformWrapper>
      </div>
    </>
  );
}

MapPage.navbar = false;
MapPage.main = false;
