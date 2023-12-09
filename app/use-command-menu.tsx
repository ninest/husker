import { atom, useAtom } from "jotai";

const isCommandMenuOpenAtom = atom(false);

export function useCommandMenu() {
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useAtom(isCommandMenuOpenAtom);

  return { isCommandMenuOpen, setIsCommandMenuOpen };
}
