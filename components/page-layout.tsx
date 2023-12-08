import { ComponentProps } from "react";

interface PageLayoutProps extends ComponentProps<"div"> {}

export function PageLayout({ children }: PageLayoutProps) {
  return <div className="mx-5 my-8 md:max-w-3xl md:mx-auto lg:max-w-4xl xl:max-w-5xl">{children}</div>;
}
