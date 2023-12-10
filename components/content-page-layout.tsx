import { MobileNavbar } from "@/app/(links)/_components/mobile-navbar";
import { ContributeSheetButton } from "@/components/contribute-sheet-button";
import { Spacer } from "@/components/spacer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComponentProps } from "react";
import { LuChevronLeft, LuFileEdit, LuPen } from "react-icons/lu";

interface ContentPageLayoutProps extends ComponentProps<"div"> {
  showMobileNav?: boolean;
  title: string;
  backButton?: { text: string; href: string };
  contributeInfo?: { pageTitle: string };
}

export function ContentPageLayout({
  showMobileNav = false,
  title,
  backButton: desktopBackButton,
  contributeInfo,
  children,
}: ContentPageLayoutProps) {
  return (
    <div>
      {/* Mobile nav */}
      <div className="block md:hidden">{showMobileNav && <MobileNavbar title={title} />}</div>

      <div className="mx-5 my-5 md:my-8 md:px-5 md:max-w-2xl md:mx-auto lg:max-w-3xl xl:max-w-4xl">
        {!!desktopBackButton && (
          <>
            <div className="flex items-center justify-between">
              <Button variant={"outline"} asChild>
                <Link href={desktopBackButton.href}>
                  <LuChevronLeft className="mr-3" />
                  {desktopBackButton.text}
                </Link>
              </Button>

              <div className="flex items-center space-x-2">
                {!!contributeInfo && <ContributeSheetButton pageTitle={contributeInfo.pageTitle} />}
              </div>
            </div>
            <Spacer className="h-6" />
          </>
        )}

        {children}
      </div>
    </div>
  );
}
