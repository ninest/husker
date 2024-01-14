"use client";

import { LuFile, LuMoon, LuPartyPopper, LuStar } from "react-icons/lu";

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
import { useFavorites } from "@/modules/favorites/use-favorites";
import { useTheme } from "next-themes";
import { celebrate } from "@/utils/confetti";

interface CommandMenuProps {
  links: HuskerLink[];
}

export function CommandMenu({ links }: CommandMenuProps) {
  const router = useRouter();
  const { isCommandMenuOpen, setIsCommandMenuOpen } = useCommandMenu();
  const { favorites } = useFavorites();
  const { theme, setTheme } = useTheme();

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

  const openUrl = (url: string) => {
    if (url.startsWith("/")) router.push(url);
    else window.open(url, "_blank");
    setIsCommandMenuOpen(false);
  };

  return (
    <>
      <CommandDialog open={isCommandMenuOpen} onOpenChange={setIsCommandMenuOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {links.map((link) => {
              return (
                <CommandItem key={link.id} onSelect={() => openUrl(link.url)}>
                  <span>{link.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => openUrl("/")}>
              <LuFile className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/wiki")}>
              <LuFile className="mr-2 h-4 w-4" />
              <span>Wiki</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/about")}>
              <LuFile className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/contribute")}>
              <LuFile className="mr-2 h-4 w-4" />
              <span>Contribute</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/settings")}>
              <LuFile className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Favorites">
            {favorites.map((favoriteLink) => (
              <CommandItem key={favoriteLink.id} onSelect={() => openUrl(favoriteLink.url)}>
                <LuStar className="mr-2 h-4 w-4" />
                <span>{favoriteLink.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setTheme(theme === "light" ? "dark" : "light")}>
              <LuMoon className="mr-2 h-4 w-4" />
              <span>Toggle theme</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                celebrate();
                setIsCommandMenuOpen(false);
              }}
            >
              <LuPartyPopper className="mr-2 h-4 w-4" />
              <span>Celebrate</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
