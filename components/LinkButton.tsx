import { Link } from "@/types/category";
import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";
import clsx from "clsx";

interface LinkButtonProps {
  link: Link;

  variant?: "default" | "highlighted" | "warning";
  showDescription?: boolean;
}

export const LinkButton = ({
  link,
  variant = "default",
  showDescription = false,
}: LinkButtonProps) => {
  return (
    <SmartLink
      style={{ minWidth: 0 }}
      className={clsx(
        "link-button flex items-center space-x-md rounded p-base",
        {
          "bg-gray-100 hover:bg-gray-200": variant == "default",
          "bg-gradient-to-r from-warning-lightest to-warning-lighter":
            variant == "warning",
        }
      )}
      href={link.href}
    >
      <Icon id={link.icon} className="flex-none text-sm"></Icon>

      <div>
        <div className="font-semibold text-sm text-gray">{link.name}</div>
        {showDescription && (
          <>
            <Spacer size="xs"></Spacer>
            <div className="text-gray-light font-normal text-xs">
              {link.description}
            </div>
          </>
        )}
      </div>
    </SmartLink>
  );
};

interface LinkButtonGridProps {
  links: Link[];
  showDescription?: boolean;
}

export const LinkButtonGrid = ({
  links,
  showDescription = false,
}: LinkButtonGridProps) => {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-3 gap-md"
      style={{ minWidth: 0, minHeight: 0 }}
    >
      {links.map((link) => {
        return (
          <LinkButton
            key={link.href}
            link={link}
            showDescription={showDescription}
          ></LinkButton>
        );
      })}
    </div>
  );
};
