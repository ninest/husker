import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/util/Spacer";
import { useFavorites, useTheme } from "@/hooks/settings";
import { copy } from "@/lib/utils/copy";
import { Link } from "@/types/category";
import { IconId } from "@/types/icon";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import clsx from "clsx";
import { Icon } from "../Icon";
import { showToast } from "../util/Toast";

interface LinkButtonProps {
  link: Link;
  variant?: "default" | "warning";
  showDescription?: boolean;
}

export const LinkButton = ({
  link,
  variant = "default",
  showDescription = false,
}: LinkButtonProps) => {
  const { addFavorite, isFavorited, removeFavorite } = useFavorites();

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
        let href = link.href;
        if (href.startsWith("/")) {
          href = `https://husker.vercel.app${href}`;
        }
        copy(href, link.name);
        showToast({ text: "Copied link" });
      },
    },
    { separator: true },
    isFavorited({ href: link.href })
      ? {
          label: "Remove from favorites",
          action: () => {
            removeFavorite({ href: link.href });
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
        ["bg-gray-50 hover:bg-gray-100 border border-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 dark:shadow"]:
          variant == "default",
        "bg-gradient-to-r from-warning-lightest to-warning-lighter": variant == "warning",
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
              <div className="font-semibold text-sm text-gray dark:text-gray-light">
                {link.name}
              </div>
              {showDescription && link.description && (
                <>
                  <Spacer size="xs"></Spacer>
                  <div className="text-gray-light dark:text-gray font-normal text-xs">
                    {link.description}
                  </div>
                </>
              )}
            </div>
          </SmartLink>

          {/* Context menu content */}
          <ContextMenu.Content className="text-xs font-medium w-48 p-xs md:p-1 bg-gray-100 dark:bg-gray-900 border dark:border-gray-darkest shadow rounded-md space-y-1">
            {contextMenuActions.map((item, index) => (
              <div key={index}>
                {item.separator ? (
                  <div>
                    <ContextMenu.Separator className="border-t dark:border-gray-darkest my-0.5" />
                  </div>
                ) : (
                  <div>
                    <ContextMenu.Item
                      onClick={item.action}
                      className="py-sm px-sm md:py-1 md:px-xs rounded text-gray hover:bg-primary-lightest dark:hover:bg-primary-darker"
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
  animate?: boolean;
}

export const LinkButtonGrid = ({
  links,
  showDescription = false,
  animate = false,
}: LinkButtonGridProps) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  return (
    <div
      ref={animate ? parent : null}
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
          />
        );
      })}
    </div>
  );
};
