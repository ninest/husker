"use client";

import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { cn } from "@/utils/style";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState, ComponentProps } from "react";

type SingleSelect = {
  type: "single-select";
  currentValue: string;
  setValue: (value: string) => void;
};
type MultiSelect = {
  type: "multi-select";
  currentValues: string[];
  addValue: (value: string) => void;
  removeValue: (value: string) => void;
  clearValues: () => void;
};

type ComboboxProps = ComponentProps<"div"> & {
  placeholder: string;
  searchPlaceholder: string;
  options: { value: string; label: string }[];
} & (SingleSelect | MultiSelect);

export function Combobox({ className, placeholder, searchPlaceholder, options, ...props }: ComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between overflow-x-scroll", className)}
        >
          {props.type === "single-select" ? (
            <>
              {props.currentValue ? options.find((option) => option.value === props.currentValue)?.label : placeholder}
            </>
          ) : (
            <>
              {props.currentValues.length === 0
                ? placeholder
                : props.currentValues
                    .map((value) => options.find((option) => option.value === value)?.label)
                    .join(", ")}
            </>
          )}
          <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(cv) => {
                  if (props.type === "single-select") props.setValue(cv === props.currentValue ? "" : cv);
                  else {
                    if (props.currentValues.includes(cv)) props.removeValue(cv);
                    else props.addValue(cv);
                  }
                  setOpen(false);
                }}
              >
                {props.type === "single-select" ? (
                  <LuCheck
                    className={cn("mr-2 h-4 w-4", props.currentValue === option.value ? "opacity-100" : "opacity-0")}
                  />
                ) : (
                  <LuCheck
                    className={cn(
                      "mr-2 h-4 w-4",
                      props.currentValues.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                )}
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        {props.type === "multi-select" && (
          <div className="m-2">
            <Button onClick={props.clearValues} className="w-full" variant={"secondary"} size={"sm"}>
              Clear
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
