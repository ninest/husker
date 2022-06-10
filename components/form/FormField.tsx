import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { useController } from "react-hook-form";
import { Spacer } from "../Spacer";
import { FormDescription } from "./FormDescription";
import { FormLabel } from "./FormLabel";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: any;
  label?: string;
  description?: string | JSX.Element | null;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  textarea?: boolean;
  rows?: number;
  name: string;
}
export const FormField = ({
  control,
  label,
  description,
  type = "text",
  textarea = false,
  rows = 5,
  name,
  className,
  ...props
}: InputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const fieldProps = {
    name,
    id: name,
    placeholder: props.placeholder,
    required: props.required,
    value: field.value || "",
    onChange: (e: any) => field.onChange(e.target.value),
  };

  return (
    <fieldset>
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

      {textarea ? (
        <textarea
          className={clsx(className, "block form-input w-full")}
          rows={rows ?? 5}
          minLength={props.minLength}
          {...fieldProps}
        ></textarea>
      ) : (
        <input
          type={type}
          className={clsx(className, "block form-input w-full md:w-3/4")}
          {...props}
          {...fieldProps}
        />
      )}
      {error && (
        <div className="text-error mt-xs text-sm form-error">
          {error.message}
        </div>
      )}
    </fieldset>
  );
};
