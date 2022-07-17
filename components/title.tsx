import { useTheme } from "@/hooks/settings";
import clsx from "clsx";
import { HTMLAttributes } from "react";

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
  children: string;
}

export const Title = ({
  level = 1,
  children,
  weightClassName = "font-bold",
  hash = false,
  ...props
}: TitleProps) => {
  const { isDarkTheme } = useTheme();

  // https://stackoverflow.com/a/59685929/8677167
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const headingElement = (
    <HeadingTag
      className={clsx(
        "font-display leading-relaxed tracking-normal",
        weightClassName,
        { "text-dark": !isDarkTheme, "text-gray-dark": isDarkTheme },
        {
          "text-4xl": level == 1,
          "text-3xl": level == 2,
          "text-2xl": level == 3,
          "text-xl": level == 4,
        },
        props.className
      )}
    >
      {children}
    </HeadingTag>
  );

  const slug = slugify(children);

  return hash ? (
    <a id={slug} href={`#${slug}`} className="block">
      {headingElement}
    </a>
  ) : (
    headingElement
  );
};
