import { useTheme } from "@/hooks/settings";
import clsx from "clsx";
import { HTMLAttributes, ReactNode, useRef } from "react";

// TODO: move to lib
const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  level?: number;
  weightClassName?: string;
  hash?: boolean;
  children: string | ReactNode;
}

export const Title = ({
  level = 1,
  children,
  weightClassName = "",
  hash = false,
  ...props
}: TitleProps) => {
  // https://stackoverflow.com/a/59685929/8677167
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const slug =
    typeof children === "string"
      ? slugify(children)
      : // TODO: fix, get inner text of children
        slugify(children?.toString() ?? "");

  return (
    <HeadingTag
      id={slugify(typeof children === "string" ? children : "")}
      className={clsx(
        "font-display tracking-normal",
        "text-dark dark:text-gray-lighter",
        weightClassName,
        {
          "text-4xl": level == 1,
          "text-2xl": level == 2,
          "text-xl": level == 3,
          "text-lg": level == 4,
        },
        props.className
      )}
      href="/"
    >
      {children}
      {hash && (
        <a
          href={`#${slug}`}
          className="text-gray-100 hover:text-gray-200 dark:text-gray-900 dark:hover:text-gray-darkest"
        >
          {" #"}
        </a>
      )}
    </HeadingTag>
  );
};
