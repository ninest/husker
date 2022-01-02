import clsx from "clsx";
import { HTMLAttributes } from "react";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  method?: "GET" | "POST";
  action?: string;
}

export const Form = ({ method, action, children, ...props }: FormProps) => {
  return (
    <form
      method={method}
      action={action}
      className={clsx(props.className, "space-y-base")}
      {...props}
    >
      {children}
    </form>
  );
};
