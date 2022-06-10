import { LabelHTMLAttributes } from "react";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
}

export const FormLabel = ({ name, children }: FormLabelProps) => {
  return (
    <label htmlFor={name} className="block font-semibold text-gray-dark">
      {children}
    </label>
  );
};
