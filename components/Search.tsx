import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { search } from "@/lib/search";
import { Link } from "@/types/category";
import { LinkButton } from "@/components/LinkButton";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Link[]>([]);

  /* To prevent showing everything, only search when more than 3 
characters are typed */
  const shouldSearch = () => searchTerm.length > 1;

  useEffect(() => {
    if (shouldSearch()) {
      const results = search(searchTerm);
      setSearchResults(results);
    }
  }, [searchTerm]);

  /* Listen for keyboard "/" to focus on search */
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, []);
  return (
    <>
      <label className="relative flex px-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-8 md:pl-7">
          <FaSearch className="text-gray-light" />
        </span>
        {/* Search bar */}
        <input
          ref={inputRef}
          style={{ minWidth: 0 }}
          /* More padding on mobile for fat fingers */
          className="w-full pl-10 pr-xs py-sm md:py-1 border-2 font-medium rounded outline-none bg-gray-50 text-gray placeholder:text-gray-lighter"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      {shouldSearch() && searchResults.length > 0 && (
        <div>
          <div className="px-md pb-sm text-sm text-gray">Search results</div>
          <div className="px-md flex flex-col space-y-sm">
            {searchResults.map((link) => {
              return (
                <LinkButton key={link.href} link={link} showDescription></LinkButton>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
