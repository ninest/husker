import { SmartLink } from "@/components/SmartLink";
import { Title } from "@/components/Title";
import { Link } from "@/types/category";
import { Icon } from "../Icon";
import { LinkButtonGrid } from "./LinkButton";
import { Spacer } from "../util/Spacer";

interface LinkSetProps {
  title?: string;
  moreInfoHref?: string;
  links: Link[];
  pages?: Link[];
  showTitle?: boolean;
  showFull?: boolean;
}

export const LinkSet = ({
  title,
  moreInfoHref,
  links,
  pages,
  showTitle = false,
  showFull = false,
}: LinkSetProps) => {
  return (
    <section>
      {showTitle && (
        /* Show the more info caret only if the title is shown */
        <>
          <SmartLink
            href={moreInfoHref!}
            className="flex items-center justify-between space-x-xs"
          >
            <Title level={3} weightClassName="font-black">
              {title}
            </Title>
            <div className="flex items-end p-xs rounded hover:bg-gray-100">
              <div className="text-gray text-sm mr-xs">more</div>
              <Icon id="caretright" className="text-lg"></Icon>
            </div>
          </SmartLink>
          <Spacer size="xs"></Spacer>
        </>
      )}

      <LinkButtonGrid links={links} showDescription={showFull} />

      {/* Show divider line + extra links if `pages` is provided */}
      {showFull && pages && pages.length > 0 && (
        <>
          <Spacer size="lg"></Spacer>
          <hr />
          <Spacer size="lg"></Spacer>
          <LinkButtonGrid links={pages} showDescription={showFull} />
        </>
      )}
    </section>
  );
};
