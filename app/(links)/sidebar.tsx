import { Spacer } from "@/components/spacer";
import { Input } from "@/components/ui/input";
import { Category } from "@/modules/content/category";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";

interface LinksSidebarProps {
  categories: Category[];
}

export function LinksSidebar({ categories }: LinksSidebarProps) {
  return (
    <>
      <aside className="flex-none sticky top-0 h-screen w-[22rem] bg-gray-50d border-r p-4">
        <div className="font-display font-black text-lg">Husker</div>

        <Spacer className="h-3" />

        <div className="relative">
          <div className="pointer-events-none	 absolute left-0 top-0 bottom-0 w-[2.5rem] flex items-center justify-center">
            <LuSearch />
          </div>
          <Input className="pl-10" placeholder="Search" />
        </div>

        
        <Spacer className="h-8" />

        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={`/#${category.slug}`}
                className="py-1 -m-1 px-2 block font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
