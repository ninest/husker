import { Input } from "@/components/ui/input";
import { cn } from "@/utils/style";
import { ComponentProps, forwardRef } from "react";
import { LuSearch } from "react-icons/lu";

interface SearchInputProps extends ComponentProps<"input"> {
wrapperClassName?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, wrapperClassName, ...props }, ref) => {
    return (
      <div className={cn("relative", wrapperClassName)}>
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2.5rem] flex items-center justify-center">
          <LuSearch />
        </div>
        <Input placeholder={placeholder} className="pl-10" {...props} ref={ref} />
      </div>
    );
  }
);
