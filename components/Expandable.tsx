import { useTheme } from "@/lib/theme";
import { IconId } from "@/types/icon";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Icon } from "./Icon";

interface ExpandableProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconId;
  title: string;
  variant?: "primary" | "gray" | "error" | "warning";
  containsProse?: boolean;
  open?: boolean;
}
export const Expandable = ({
  icon = "info",
  variant = "primary",
  title,
  containsProse = false,
  open = false,
  children,
}: ExpandableProps) => {
  const { isLightTheme, isDarkTheme } = useTheme();
  return (
    <div
      className={clsx(
        { "bg-primary-lightest": variant == "primary" },
        { "bg-gray-lightest": variant == "gray" },
        "rounded-lg"
      )}
    >
      <Disclosure defaultOpen={open}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={clsx(
                "flex justify-between items-center w-full p-base font-semibold text-gray-darkest rounded-lg transition-colors",
                { "hover:bg-primary-lighter": variant == "primary" }
              )}
            >
              <div className="flex items-center">
                <Icon
                  id={icon}
                  className={clsx(
                    "mr-base flex-none",
                    { "text-gray-darker": open, "text-gray-dark": !open },
                  )}
                ></Icon>
                <div
                  className={clsx(
                    {
                      "text-gray-darker": open,
                      "text-gray-dark": !open,
                    },
                    // Prevent text from being centered
                    "text-left"
                  )}
                >
                  {title}
                </div>
              </div>
              <Icon
                id="caretdown"
                className={clsx("text-gray-light", { "rotate-180": open })}
              ></Icon>
            </Disclosure.Button>
            <Disclosure.Panel
              className={clsx("px-base pdt-sm pb-base", {
                prose: containsProse,
              })}
            >
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
