import { Link } from "@/types/category";
import { Children, ReactNode } from "react";
import { LinkSet } from "../link/LinkSet";

/* 
- Special component
- Converts a list of an icon, hyperlink, and description to a link button grid
- Meant for use in markdown
*/

export const MarkdocLinkButtonGrid = ({
  children,
  showFull = true,
}: {
  children: ReactNode;
  showFull?: boolean;
}) => {
  const ul = Children.toArray(children)[0];

  // @ts-ignore
  const items = ul.props.children;

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

    if (a.type.name == "Icon") {
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

  // @ts-ignore
  // children.props.children.forEach((li) => {
  //   const elem = li.props.children;
  // });

  return <LinkSet links={links} showFull={showFull} />;
};
