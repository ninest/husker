import clsx from "clsx";
import { ComponentProps } from "react";

interface CalloutProps extends ComponentProps<"div"> {
  type?: "default" | "warning" | "error";
}

export function Callout({ type = "default", children }: CalloutProps) {
  return (
    <div
      className={clsx(
        "p-3 rounded-md",
        { "bg-indigo-100 text-gray-600": type === "default" },
        { "bg-orange-100 text-gray-700": type === "warning" },
        { "bg-red-100 text-gray-700": type === "error" }
      )}
    >
      {children}
    </div>
  );
}
