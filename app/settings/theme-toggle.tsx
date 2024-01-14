"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RxCaretSort } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  return (
    <div className="flex items-center justify-between border p-3 rounded-md">
      <div>
        <div className="font-bold">Theme</div>
      </div>
      {show ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex space-x-2">
              <div>
                {theme === "dark" && "Dark"}
                {theme === "light" && "Light"}
                {theme === "system" && "System"}
              </div>
              <div>
                <RxCaretSort />
              </div>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant={"outline"}>Loading ...</Button>
      )}
    </div>
  );
}
