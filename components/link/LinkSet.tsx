import { SmartLink } from "@/components/SmartLink";
import { Title } from "@/components/Title";
import { Link } from "@/types/category";
import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { Spacer } from "../util/Spacer";
import { LinkButtonGrid } from "./LinkButton";

interface LinkSetProps {
  title?: string;
  moreInfoHref?: string;
  links: Link[];
  pages?: Link[];
  showTitle?: boolean;
  showFull?: boolean;
  animate?: boolean;
}

export const LinkSet = ({
  title,
  moreInfoHref,
  links,
  pages,
  showTitle = false,
  showFull = false,
  animate = false,
}: LinkSetProps) => {
  return (
    <section>
      {showTitle && title && (
        /* Show the more info caret only if the title is shown */
        <>
          <SmartLink href={moreInfoHref!} className="flex items-center justify-between space-x-xs">
            <Title level={3} weightClassName="font-black">
              {title}
            </Title>

            <div className="flex items-end p-xs rounded hover:bg-gray-100 dark:hover:bg-gray-900">
              <div className="text-gray text-sm mr-xs">more</div>
              <Icon id="caretright" className="text-lg"></Icon>
            </div>
          </SmartLink>
          <Spacer size="xs"></Spacer>
        </>
      )}

      <LinkButtonGrid links={links} showDescription={showFull} animate={animate} />

      {/* Show divider line + extra links if `pages` is provided */}
      {showFull && pages && pages.length > 0 && (
        <>
          <Spacer size="lg"></Spacer>
          <Divider />
          <Spacer size="lg"></Spacer>
          <LinkButtonGrid links={pages} showDescription={showFull} animate={animate} />
        </>
      )}
    </section>
  );
};
