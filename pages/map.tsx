import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import map from "@/public/map.png";



export default function MapPage() {
  return (
    <>
      <div style={{ height: "100vh", overflow: "none" }}>
        <TransformWrapper
          initialScale={0.9}
          minScale={0.8}
          maxScale={3}
          centerOnInit={true}
        >
          <TransformComponent>
            <div
              style={{ height: "100vh", width: "100%" }}
              className="flex items-center justify-center"
            >
              {/* <img
                ref={imageRef}
                src="/map.png"
                alt="Northeastern campus map"
              /> */}
              <Image src={map} alt="Northeastern campus map"></Image>
            </div>
          </TransformComponent>
          <div className="absolute bottom-base right-base w-28 bg-white p-base rounded-md border shadow">
            Legend and keys
          </div>
        </TransformWrapper>
      </div>
    </>
  );
}

MapPage.navbar = false;
MapPage.main = false;
