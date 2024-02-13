import { MobileNavbar } from "@/components/mobile-navbar";
import { PropsWithChildren } from "react";

export const metadata = {
  title: 'Husker Courses',
};

export default function CoursesLayout({ children }: PropsWithChildren) {
  return (
    <main>
      {/* Mobile navbar and sidebar content */}
      <div className="block md:hidden sticky top-0">
        <MobileNavbar title="Husker Courses"></MobileNavbar>
      </div>
      <div className="w-full">{children}</div>
    </main>
  );
}
