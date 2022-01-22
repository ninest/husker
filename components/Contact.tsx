import { contacts, hrefPrefix } from "@/content/contacts";
import { Contact, ContactMethod } from "@/types/contact";
import { IconId } from "@/types/icon";
import { copy } from "@/utils/copy";
import { Dialog, Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

import { Spacer } from "./Spacer";

interface ContactDetailProps {
  contact: Contact;
}

export const ContactDetail = ({ contact }: ContactDetailProps) => {
  const [justCopied, setJustCopied] = useState<string>("");

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="bg-gray-100 rounded-md">
              <Disclosure.Button className="p-md w-full">
                <div className="flex items-center justify-between">
                  <div className="text-left font-semibold text-lg text-gray-dark">
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
                  <div className="px-md pb-md flex items-center space-x-base">
                    {contact.methods.map((method) => {
                      return (
                        <>
                          <Button
                            icon={method.type}
                            className="rounded-full bg-gray-200 hover:bg-gray-300"
                            href={`${hrefPrefix[method.type]}${method.value}`}
                          ></Button>
                        </>
                      );
                    })}
                  </div>
                </>
              )}

              <Disclosure.Panel>
                <div className="px-md pb-md flex flex-col items-center space-y-base">
                  {contact.methods.map((method) => {
                    return (
                      <>
                        <Button
                          icon={method.type}
                          className="w-full bg-gray-200 hover:bg-gray-300"
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
