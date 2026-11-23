import { getParamsFromUrl } from "@/app/api/og/og-functions";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Inter, copied from @fontsource/inter. Read relative to the project root, as
// Next.js recommends for the Node.js runtime, so the files ship with the route.
const fontPath = (weight: number) => join(process.cwd(), `app/api/og/fonts/inter-latin-${weight}-normal.woff`);

export const revalidate = 3600;

export async function GET(req: Request) {
  const params = getParamsFromUrl(req.url);
  const title = params.title;

  const inter400 = readFile(fontPath(400));
  const inter700 = readFile(fontPath(700));

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col p-8 bg-gray-900">
        {!!title ? (
          <div tw="flex flex-col h-full">
            <div tw="flex-none text-[3rem] text-gray-200">Husker</div>
            <div tw="flex-1 items-center justify-center font-bold text-[6rem] text-gray-100">{title}</div>
          </div>
        ) : (
          <div tw="flex items-center justify-center w-full h-full text-[10rem] font-bold text-gray-100">Husker</div>
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
