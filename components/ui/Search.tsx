import { LinkButton } from "@/components/link/LinkButton";
import { search } from "@/lib/search";
import { Link } from "@/types/category";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon";
import { Spacer } from "../util/Spacer";

export const Search = () => {
  const router = useRouter();
  const { q } = router.query as { q: string };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Link[]>([]);
  const [courseResults, setCourseResults] = useState<Link[]>([]);

  /* To prevent showing everything, only search when more than 3 
  characters are typed */
  const shouldSearch = () => searchTerm.length > 1;
  useEffect(() => {
    if (shouldSearch()) {
      const { searchResults: sr, courseResults: cr } = search(searchTerm);
      setSearchResults(sr);
      setCourseResults(cr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  /* If there's a valid string query, set the initial search term */
  useEffect(() => {
    if (q) setSearchTerm(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  /* Listen for keyboard "/" to focus on search */
  const inputRef = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState(false);

  const onKeyPress = (e: KeyboardEvent) => {
    const textInputFocused = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName ?? "");
    if (textInputFocused) return;

    if (e.key === "/") {
      e.preventDefault();
      inputRef.current?.focus();
    } else if (e.key == "Escape") {
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
          <Icon id="search" className="text-gray-light dark:text-gray-dark"></Icon>
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
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          id="search-input"
        />
      </label>

      {/* {focused && !shouldSearch() && (
        <div className="mt-base px-md">
          <p className="text-sm text-gray">Try searching for pages, courses, and professors.</p>
        </div>
      )} */}

      {shouldSearch() && (
        <div>
          {searchResults.length > 0 || courseResults.length > 0 ? (
            <>
              <Spacer />
              <div className="px-md pb-sm text-sm text-gray">Search results</div>
              <div className="px-md flex flex-col space-y-sm">
                {[...searchResults, ...courseResults].map((link) => {
                  return (
                    <LinkButton key={link.href} link={link} showDescription={!!link.description} />
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
