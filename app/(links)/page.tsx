import { LinkButton } from "@/components/link-button";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import Link from "next/link";

export default async function LinksPage() {
  const [linkCategories, links] = await Promise.all([getLinkCategories(), getLinks()]);

  return (
    <div className="grid grid-cols-3 gap-5">
      {links.map((link) => (
        <LinkButton key={link.url} href={link.url} title={link.title} />
      ))}
    </div>
  );
}
