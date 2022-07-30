import { Button } from "@/components/button/Button";
import { hrefPrefix } from "@/content/contacts";
import { Contact } from "@/types/contact";
import { copy } from "@/utils/copy";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { Icon } from "./Icon";

interface ContactDetailProps {
  contact: Contact;
}

export const ContactDetail = ({ contact }: ContactDetailProps) => {
  const [justCopied, setJustCopied] = useState<string>("");
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <div ref={parent} className="bg-gray-50 dark:bg-gray-900 rounded-md">
              <Disclosure.Button className="p-md w-full hover:bg-gray-100 dark:hover:bg-gray-darkest rounded-md">
                <div className="flex items-center justify-between">
                  <div className="text-left font-semibold text-lg text-gray-dark dark:text-gray-light">
                    {contact.name}
                  </div>
                  <div>
                    <Icon
                      id="caretdown"
                      className={clsx("text-gray-light", {
                        "rotate-180": open,
                      })}
                    ></Icon>
                  </div>
                </div>
              </Disclosure.Button>
              {!open && (
                <>
                  <div className="pt-xs px-md pb-md flex items-center space-x-base">
                    {contact.methods.map((method) => {
                      return (
                        <>
                          <Button
                            iconLeft={method.type}
                            className="rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-darkest dark:hover:bg-gray-darker"
                            href={`${hrefPrefix[method.type]}${method.value}`}
                          />
                        </>
                      );
                    })}
                  </div>
                </>
              )}

              <Disclosure.Panel>
                <div className="pt-xs px-md pb-md flex flex-col items-center space-y-base">
                  {contact.methods.map((method) => {
                    return (
                      <>
                        <Button
                          iconLeft={method.type}
                          className="w-full dark:bg-gray-darkest"
                          variant={"gray"}
                          onClick={() => {
                            copy(method.value, method.type);
                            setJustCopied(method.type);
                          }}
                        >
                          {justCopied === method.type ? (
                            <span>Copied {method.type}!</span>
                          ) : (
                            <span>Copy {method.type}</span>
                          )}
                        </Button>
                      </>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};
