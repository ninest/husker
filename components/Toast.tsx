import { HTMLAttributes, ReactNode } from "react";
import toast from "react-hot-toast";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {}

const Toast = ({ children }: ToastProps) => {
  return <div className="p-base shadow bg-primary-light rounded-md font-semibold">{children}</div>;
};

interface ShowToastProps {
  content: ReactNode;
}

export const showToast = ({ content }: ShowToastProps) => {
  toast.custom(<Toast>{content}</Toast>);
};
