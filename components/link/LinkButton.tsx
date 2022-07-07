import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";
import { useSettings } from "@/lib/settings";
import { useTheme } from "@/lib/theme";
import { copy } from "@/lib/utils/copy";
import { Link } from "@/types/category";
import { IconId } from "@/types/icon";
import * as ContextMenu from "@radix-ui/react-context-menu";
import clsx from "clsx";
import { showToast } from "../Toast";

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
  const { isLightTheme, isDarkTheme } = useTheme();

  const contextMenuActions = [
    {
      label: "Open in new tab",
      action: () => {
        window.open(link.href);
      },
    },
    {
      label: "Open in current tab",
      action: () => {
        document.location.href = link.href;
      },
    },
    { separator: true },
    {
      label: "Copy link",
      action: () => {
        copy(link.href, link.name);
        showToast({ text: "Copied link" });
      },
    },
    { separator: true },
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
    <div
      className={clsx("rounded-md transition-colors", {
        "bg-gray-100 hover:bg-gray-200": variant == "default" && isLightTheme,
        "bg-gray-50 hover:bg-gray-100": variant == "default" && isDarkTheme,
        "bg-gradient-to-r from-warning-lightest to-warning-lighter":
          variant == "warning",
      })}
    >
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <SmartLink
            style={{ minWidth: 0 }}
            className={clsx("p-base h-full flex items-center space-x-md")}
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
          <ContextMenu.Content className="text-xs font-medium w-48 p-xs md:p-1 bg-gray-100 border shadow rounded-md space-y-1">
            {contextMenuActions.map((item, index) => (
              <div key={index}>
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
              </div>
            ))}
          </ContextMenu.Content>
        </ContextMenu.Trigger>
      </ContextMenu.Root>
    </div>
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
            variant={link.variant}
          ></LinkButton>
        );
      })}
    </div>
  );
};
