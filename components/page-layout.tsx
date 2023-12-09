import { LinksNavbar } from "@/app/(links)/_components/navbar";
import { ComponentProps } from "react";

interface PageLayoutProps extends ComponentProps<"div"> {
  showMobileNav?: boolean;
}

export function PageLayout({ showMobileNav = false, children }: PageLayoutProps) {
  return (
    <div>
      <div className="block md:hidden">{showMobileNav && <LinksNavbar backButtonHref="/" />}</div>
      <div className="mx-5 my-5 md:my-8 md:px-5 md:max-w-3xl md:mx-auto lg:max-w-4xl xl:max-w-5xl">{children}</div>
    </div>
  );
}
