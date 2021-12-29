import clsx from "clsx";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  level?: number;
}

const Title = ({ level = 1, children, ...props }: TitleProps) => {
  // https://stackoverflow.com/a/59685929/8677167
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={clsx(
        "font-display text-dark font-black leading-relaxed tracking-normal",
        {
          "text-5xl": level == 1,
          "text-3xl": level == 2,
          "text-2xl": level == 3,
        },
        props.className
      )}
    >
      {children}
    </HeadingTag>
  );
};
export default Title;
