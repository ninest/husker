import { cn } from "@/utils/style";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  level?: number;
}

export function Title({ level = 2, children, ...props }: TitleProps) {
  // https://stackoverflow.com/a/59685929/8677167
  const H = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <H
      className={cn(
        "scroll-m-20 font-display text-gray-800 dark:text-gray-200",
        {
          "text-3xl lg:text-4xl font-extrabold tracking-tight": level == 1,
          "text-2xl font-bold tracking-normal": level == 2,
          "text-xl font-semibold tracking-tight": level == 3,
        },
        props.className
      )}
      id={props.id}
    >
      {children}
    </H>
  );
}
