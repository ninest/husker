import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import toast from "react-hot-toast";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  type?: "default" | "error";
  text: string;
}

const Toast = ({ text, type = "default" }: ToastProps) => {
  return (
    <div
      className={clsx("p-base shadow rounded-md font-semibold", {
        "bg-primary text-gray-lighter": type === "default",
        "bg-error text-gray-100": type === "error",
      })}
    >
      {text}
    </div>
  );
};

export const showToast = (props: ToastProps) => {
  toast.custom(<Toast {...props} />);
};
