import { getParamsFromUrl } from "@/app/api/og/og-functions";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const revalidate = 3600;

export async function GET(req: Request) {
  const params = getParamsFromUrl(req.url);
  const title = params.title;

  const inter400 = fetch(
    new URL(`../../../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff`, import.meta.url)
  ).then((res) => res.arrayBuffer());
  const inter700 = fetch(
    new URL(`../../../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff`, import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col p-8">
        {!!title ? (
          <div tw="flex flex-col h-full">
            <div tw="flex-none text-[3rem]">Husker</div>
            <div tw="flex-1 items-center justify-center font-bold text-[5rem]">{title}</div>
          </div>
        ) : (
          <div tw="flex items-center justify-center w-full h-full text-[10rem] font-bold">Husker</div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: await inter400, weight: 400 },
        { name: "Inter", data: await inter700, weight: 700 },
      ],
    }
  );
}
