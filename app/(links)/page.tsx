import { LinkButton } from "@/components/link-button";
import { PageLayout } from "@/components/page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import Link from "next/link";

export default async function LinksPage() {
  const [linkCategories, links] = await Promise.all([getLinkCategories(), getLinks()]);

  return (
    <div className="mx-4 my-5 md:mx-auto md:px-4 md:max-w-[50rem] space-y-10">
      {linkCategories.map((category) => {
        const filteredLinks = links.filter((link) => link.categoryIds.includes(category.id));
        return (
          <div key={category.slug}>
            <Title level={2} className="font-extrabold text-xl">{category.title}</Title>
            <Spacer className="h-3" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filteredLinks.map((link) => (
                <LinkButton key={link.url} href={link.url} title={link.title} iconSlug={link.iconSlug} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
