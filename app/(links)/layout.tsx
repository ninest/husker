import { Spacer } from "@/components/spacer";
import { Input } from "@/components/ui/input";
import { ComponentProps } from "react";
import { LuSearch } from "react-icons/lu";

export default function LinksLayout({ children }: ComponentProps<"div">) {
  return (
    <main className="flex h-full">
      <aside className="flex-none sticky top-0 h-screen w-[22rem] bg-gray-50d border-r p-4">
        <div className="font-display font-black text-lg">Husker</div>

        <Spacer className="h-3" />

        <div className="relative">
          <div className="pointer-events-none	 absolute left-0 top-0 bottom-0 w-[2.5rem] flex items-center justify-center">
            <LuSearch />
          </div>
          <Input className="pl-10" placeholder="Search" />
        </div>
      </aside>
      <div className="p-4">{children}</div>
    </main>
  );
}
