import { contacts, hrefPrefix } from "@/content/contacts";
import { Contact, ContactMethod } from "@/types/contact";
import { IconId } from "@/types/icon";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "./Button";

import { Spacer } from "./Spacer";

interface ContactDetailProps {
  contact: Contact;
}

export const ContactDetail = ({ contact }: ContactDetailProps) => {
  return (
    <>
      <div className="bg-gray-100 p-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="text-left font-semibold text-lg text-gray-dark">
            {contact.name}
          </div>
        </div>

        <Spacer />
        <div className="flex items-center space-x-base">
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
      </div>
    </>
  );
};
