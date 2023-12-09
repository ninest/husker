"use client";

import { EnvelopeClosedIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";

import { useCommandMenu } from "@/app/use-command-menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { HuskerLink } from "@/modules/content/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface CommandMenuProps {
  links: HuskerLink[];
}

export function CommandMenu({ links }: CommandMenuProps) {
  const router = useRouter();
  const { isCommandMenuOpen, setIsCommandMenuOpen } = useCommandMenu();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandMenuOpen((isCommandMenuOpen) => !isCommandMenuOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialog open={isCommandMenuOpen} onOpenChange={setIsCommandMenuOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {links.map((link) => {
              return (
                <CommandItem key={link.id} onSelect={() => router.push(link.url)}>
                  <span>{link.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Pages">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Contribute</span>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
