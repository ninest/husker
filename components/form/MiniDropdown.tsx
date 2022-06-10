import { IconId } from "@/types/icon";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { SelectHTMLAttributes, useState } from "react";
import { useController } from "react-hook-form";
import { Icon } from "../Icon";
import { Spacer } from "../Spacer";
import { FormDescription } from "./FormDescription";
import { FormError } from "./FormError";
import { FormLabel } from "./FormLabel";

export interface MiniDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  control: any;
  name: string;
  label?: string;
  description?: string;
  options: { value: string; label?: string; icon?: IconId }[];
}

export const MiniDropdown = ({
  control,
  name,
  description,
  label,
  value,
  options,
  className,
}: MiniDropdownProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const valueSelectedLabel = options.find(
    (option) => option.value == field.value
  )?.label;

  return (
    <fieldset className={clsx(className, "relative w-full")}>
      {label && (
        <>
          <FormLabel name={name}>{label}</FormLabel>
          <Spacer size="xs" />
        </>
      )}

      {description && (
        <>
          <FormDescription>{description}</FormDescription>
          <Spacer size="sm" />
        </>
      )}

      <Listbox value={field.value} onChange={field.onChange}>
        <Listbox.Button className="flex form-input w-full justify-between items-center">
          <div>{valueSelectedLabel}</div>
          <div>
            <Icon id="caretdown" />
          </div>
        </Listbox.Button>
        <Listbox.Options className="absolute mt-xs rounded p-xs shadow bg-light border w-full">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className="p-xs rounded hover:bg-gray-100 text-sm text-gray flex items-center"
            >
              {option.icon && (
                <div className="mr-base">
                  <Icon id={option.icon} />
                </div>
              )}
              <div>{option.label}</div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      {error && <FormError message={error?.message!} />}
    </fieldset>
  );
};
