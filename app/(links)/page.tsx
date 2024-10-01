import { LinksGrid } from "@/app/(links)/_components/links-grid";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import Link from "next/link";
import kaleidoscopeLogo from "../../public/kaleidoscope-logo.png";
import Image from "next/image";

export const revalidate = 60;

export default async function LinksPage() {
  const [linkCategories, links] = await Promise.all([getLinkCategories(), getLinks()]);

  return (
    <>
      <div className="mx-4 my-5 md:mx-auto md:px-4 md:max-w-[50rem] space-y-10">
        <LinksGrid categories={linkCategories} links={links} />
        <div className="pb-2">
          <Link
            href={"https://markefontenot.notion.site/Sponsored-by-Kaleidoscope-4016a87fbd8c4ef182041269c6288ee5?pvs=74"}
            className="flex items-center gap-2"
          >
            <Image src={kaleidoscopeLogo} alt="Kaleidoscope logo" className="w-6 h-6" />{" "}
            <div>Sponsored by Kaleidoscope</div>
          </Link>
        </div>
      </div>
    </>
  );
}
