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
}
export const Expandable = ({
  icon = "info",
  variant = "primary",
  title,
  containsProse = false,
  children,
}: ExpandableProps) => {
  return (
    <>
      <div
        className={clsx(
          { "bg-primary-lightest": variant == "primary" },
          "rounded-lg"
        )}
      >
        <Disclosure>
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
                      { "text-gray-darker": open, "text-gray-dark": !open },
                      "mr-base"
                    )}
                  ></Icon>
                  <div
                    className={clsx({
                      "text-gray-darker": open,
                      "text-gray-dark": !open,
                    })}
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
                className={clsx("px-base pt-sm pb-base", {
                  prose: containsProse,
                })}
              >
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};
