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
import { useFavorites } from "@/modules/favorites/use-favorites";
import { celebrate } from "@/utils/confetti";
import { useTheme } from "next-themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CommandMenuProps {
  linkGroups: { name: string; links: { id: string; title: string; url: string }[] }[];
}

export function CommandMenu({ linkGroups }: CommandMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const q = useSearchParams().get("q");
  const [commandInputText, setCommandInputText] = useState(q ?? "");

  const { isCommandMenuOpen, setIsCommandMenuOpen } = useCommandMenu();

  useEffect(() => {
    if (q) {
      setIsCommandMenuOpen(true);
      router.push(pathname);
    }
  }, []);

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
        <CommandInput
          placeholder="Type a command or search..."
          value={commandInputText}
          onValueChange={(s) => setCommandInputText(s)}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {linkGroups.map((group) => {
            return (
              <CommandGroup key={group.name} heading={group.name}>
                {group.links.map((link) => {
                  return (
                    <CommandItem key={link.id} onSelect={() => openUrl(link.url)}>
                      <span>{link.title}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            );
          })}

          <CommandSeparator />

          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => openUrl("/")}>
              <LuFile className="opacity-60 mr-2 h-3 w-3" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/wiki")}>
              <LuFile className="opacity-60 mr-2 h-3 w-3" />
              <span>Wiki</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/about")}>
              <LuFile className="opacity-60 mr-2 h-3 w-3" />
              <span>About</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/contribute")}>
              <LuFile className="opacity-60 mr-2 h-3 w-3" />
              <span>Contribute</span>
            </CommandItem>
            <CommandItem onSelect={() => openUrl("/settings")}>
              <LuFile className="opacity-60 mr-2 h-3 w-3" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Favorites">
            {favorites.map((favoriteLink) => (
              <CommandItem key={favoriteLink.id} onSelect={() => openUrl(favoriteLink.url)}>
                <LuStar className="opacity-60 mr-2 h-3 w-3" />
                <span>{favoriteLink.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setTheme(theme === "light" ? "dark" : "light")}>
              <LuMoon className="opacity-60 mr-2 h-3 w-3" />
              <span>Toggle theme</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                celebrate();
                setIsCommandMenuOpen(false);
              }}
            >
              <LuPartyPopper className="opacity-60 mr-2 h-3 w-3" />
              <span>Celebrate</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
