import clsx from "clsx";
import { HTMLAttributes } from "react";

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className={clsx(props.className, "space-y-base")} {...props}>
      {children}
    </form>
  );
};
