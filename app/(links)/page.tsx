import { LinksGrid } from "@/app/(links)/links-grid";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";

export default async function LinksPage() {
  const [linkCategories, links] = await Promise.all([getLinkCategories(), getLinks()]);

  return (
    <div className="mx-4 my-5 md:mx-auto md:px-4 md:max-w-[50rem] space-y-10">
      <LinksGrid categories={linkCategories} links={links}/>
    </div>
  );
}
