import { IconId } from "@/types/icon";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { SelectHTMLAttributes } from "react";
import { useController } from "react-hook-form";
import { Icon } from "../Icon";
import { Spacer } from "../util/Spacer";
import { FormDescription } from "./FormDescription";
import { FormError } from "./FormError";
import { FormLabel } from "./FormLabel";

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  control: any;
  name: string;
  label?: string;
  description?: string;
  options: { value: any; label?: string; icon?: IconId }[];
  wrapperClassName?: string;
  className?: string;
  dropdownClassName?: string;
}

export const FormSelect = ({
  control,
  name,
  description,
  label,
  value,
  options,
  wrapperClassName = "",
  className = "",
  dropdownClassName = "",
}: FormSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const valueSelectedLabel = options.find((option) => option.value == field.value)?.label;

  return (
    <fieldset className={clsx(wrapperClassName, "relative")}>
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
        <Listbox.Button
          className={clsx(className, "flex form-input justify-between items-center")}
        >
          <div>{valueSelectedLabel}</div>
          <div>
            <Icon id="caretdown" />
          </div>
        </Listbox.Button>
        <Listbox.Options
          className={clsx(
            dropdownClassName,
            className,
            "z-50 absolute mt-xs rounded-md p-xs shadow bg-light dark:bg-dark border border-gray-100 dark:border-gray-900",
            "max-h-96 overflow-y-scroll"
          )}
        >
          {/* More padding and spacing on mobile */}
          <div className="space-y-xs md:space-y-0">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className="px-xs py-sm md:py-xs rounded hover:bg-gray-100 dark:hover:bg-gray-900 text-sm text-gray flex items-center"
              >
                {option.icon && (
                  <div className="mr-base">
                    <Icon id={option.icon} />
                  </div>
                )}
                <div>{option.label}</div>
              </Listbox.Option>
            ))}
          </div>
        </Listbox.Options>
      </Listbox>
      {error && <FormError message={error?.message!} />}
    </fieldset>
  );
};
