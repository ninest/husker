import { LinksNavbar } from "@/app/(links)/_components/navbar";
import { Spacer } from "@/components/spacer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComponentProps } from "react";
import { LuChevronLeft } from "react-icons/lu";

interface PageLayoutProps extends ComponentProps<"div"> {
  showMobileNav?: boolean;
  desktopBackButton?: { text: string; href: string };
}

export function PageLayout({ showMobileNav = false, desktopBackButton, children }: PageLayoutProps) {
  return (
    <div>
      {/* Mobile nav */}
      <div className="block md:hidden">{showMobileNav && <LinksNavbar backButtonHref="/" />}</div>

      <div className="mx-5 my-5 md:my-8 md:px-5 md:max-w-2xl md:mx-auto lg:max-w-3xl xl:max-w-4xl">
        {/* Desktop back button */}
        <div className="hidden md:block">
          {!!desktopBackButton && (
            <>
              <Button variant={"outline"} asChild>
                <Link href={desktopBackButton.href}>
                  <LuChevronLeft className="mr-3" />
                  {desktopBackButton.text}
                </Link>
              </Button>
              <Spacer className="h-6" />
            </>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
