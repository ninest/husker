import clsx from "clsx";
import { HTMLAttributes, InputHTMLAttributes } from "react";
import { Spacer } from "../Spacer";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  textarea?: boolean;
  rows?: number;
  name: string;
}
export const FormField = ({
  label,
  type = "text",
  textarea = false,
  rows = 5,
  name,
  className,
  ...props
}: InputProps) => {
  return (
    <fieldset>
      {label ? (
        <>
          <label htmlFor={name} className="block font-semibold text-gray-dark">
            {label}
          </label>
          <Spacer size="xs" />
        </>
      ) : null}

      {textarea ? (
        <textarea
          name={name}
          id={name}
          placeholder={props.placeholder}
          className={clsx(className, "block form-input w-full")}
          rows={rows ?? 5}
        ></textarea>
      ) : (
        <input
          name={name}
          id={name}
          type={type}
          placeholder={props.placeholder}
          className={clsx(className, "block form-input")}
          {...props}
        />
      )}
    </fieldset>
  );
};
