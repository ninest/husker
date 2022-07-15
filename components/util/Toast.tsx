import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import toast from "react-hot-toast";
import { SmartLink } from "../SmartLink";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  type?: "default" | "error";
  text: string;
  href?: string;
}

const Toast = ({ text, type = "default", href }: ToastProps) => {
  const content = (
    <div
      className={clsx("p-base shadow rounded-md font-semibold", {
        "bg-primary text-gray-lighter": type === "default",
        "bg-error text-gray-100": type === "error",
      })}
    >
      {text}
    </div>
  );
  if (href) {
    return <SmartLink href={href}>{content}</SmartLink>;
  }
  return content;
};

export const showToast = (props: ToastProps) => {
  toast.custom(<Toast {...props} />);
};
