import { Link } from "@/types/category";
import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";
import clsx from "clsx";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { useSettings } from "@/lib/settings";
import { IconId } from "@/types/icon";

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
  const { addFavorite, isFavorited, removeFromFavorites } = useSettings();
  const contextMenuActions = [
    {
      label: "Open in new tab",
      action: () => {
        window.open(link.href);
      },
    },
    { separator: true },
    {
      label: "Open in current tab",
      action: () => {
        document.location.href = link.href;
      },
    },

    isFavorited({ href: link.href })
      ? {
          label: "Remove from favorites",
          action: () => {
            removeFromFavorites({ href: link.href });
          },
        }
      : {
          label: "Add to favorites",
          action: () => {
            addFavorite({
              href: link.href,
              icon: link.icon as IconId,
              name: link.name,
              description: link.description,
            });
          },
        },
  ];
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
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

        {/* Context menu content */}
        <ContextMenu.Content className="text-xs font-medium w-48 p-xs md:p-1 bg-gray-50 shadow rounded-md space-y-1">
          {contextMenuActions.map((item) => (
            <>
              {item.separator ? (
                <div>
                  <ContextMenu.Separator className="border-t my-0.5" />
                </div>
              ) : (
                <div>
                  <ContextMenu.Item
                    onClick={item.action}
                    className="py-xs px-sm md:py-1 md:px-xs rounded text-gray hover:bg-primary-50"
                  >
                    {item.label}
                  </ContextMenu.Item>
                </div>
              )}
            </>
          ))}
        </ContextMenu.Content>
      </ContextMenu.Trigger>
    </ContextMenu.Root>
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
