import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { search } from "@/lib/search";
import { Link } from "@/types/category";
import { LinkButton } from "@/components/link/LinkButton";
import { Icon } from "./Icon";
import { Spacer } from "./Spacer";

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
    const textInputFocused = ["INPUT", "TEXTAREA"].includes(
      document.activeElement?.tagName ?? ""
    );
    if (textInputFocused) return;

    if (e.key === "/") {
      e.preventDefault();
      inputRef.current?.focus();
    } else if (e.key == "Escape") {
      console.log("Must clear");
      setSearchTerm("");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  const onCrossClick = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  return (
    <>
      <label className="sticky top-md left-0 flex px-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-8 md:pl-7">
          <Icon id="search" className="text-gray-light"></Icon>
        </span>
        {searchTerm && (
          <button
            onClick={onCrossClick}
            className="absolute inset-y-0 right-0 flex items-center pr-8 md:pr-7"
          >
            <Icon id="x" className="text-gray-light"></Icon>
          </button>
        )}
        {/* Search bar */}
        <input
          ref={inputRef}
          style={{ minWidth: 0 }}
          /* More padding on mobile for fat fingers */
          // className="w-full pl-10 pr-xs py-sm md:py-1 border-2 font-medium rounded outline-none bg-gray-50 text-gray placeholder:text-gray-lighter"
          className="w-full form-input pl-10 pr-xs py-sm md:py-1"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </label>

      {shouldSearch() && (
        <div>
          {searchResults.length > 0 ? (
            <>
              <Spacer></Spacer>
              <div className="px-md pb-sm text-sm text-gray">
                Search results
              </div>
              <div className="px-md flex flex-col space-y-sm">
                {searchResults.map((link) => {
                  return (
                    <LinkButton
                      key={link.href}
                      link={link}
                      showDescription
                    ></LinkButton>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <Spacer></Spacer>
              <div className="px-md text-sm text-gray flex items-center space-x-sm">
                <Icon id="frown"></Icon>
                <span>No search results</span>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
