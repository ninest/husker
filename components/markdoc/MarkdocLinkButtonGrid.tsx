import { isArray } from "@/lib/utils/is-array";
import { Link } from "@/types/category";
import { Children, ReactNode } from "react";
import { LinkSet } from "../link/LinkSet";

/* 
- Special component
- Converts a list of an icon, hyperlink, and description to a link button grid
- Meant for use in markdown
*/

interface MarkdocLinkButtonGridProps {
  children: ReactNode;
  showFull?: boolean;
}

export const MarkdocLinkButtonGrid = ({
  children,
  showFull = true,
}: MarkdocLinkButtonGridProps) => {
  const ul = Children.toArray(children)[0];

  // @ts-ignore
  let items = ul.props.children;

  // If there's only one li, items is not a list, so convert it
  if (!isArray(items)) items = [items];

  const links: Link[] = items.map((li: any) => {
    let iconId;
    let name;
    let href;
    let description;

    // a is either icon or title, b is title or description, c is description if b isn't
    const [a, b, c] = li.props.children
      // Remove empty strings, strings with spaces
      .filter((item: string | any) => {
        return typeof item == "string" ? !!item.trim() : true;
      });

    // Only icon has id prop
    // Cannot use a.type.name because the name of the component changes in production
    // TODO: find a better way to do this
    if (!!a.props.id) {
      iconId = a.props.id;
      href = b.props.href;
      name = b.props.children;
      description = c.split(": ")[1];
    } else {
      href = a.props.href;
      name = a.props.children;
      description = b.split(": ")[1];
    }
    return {
      icon: iconId,
      href,
      name,
      description,
    };
  });

  return <LinkSet links={links} showFull={showFull} />;
};
