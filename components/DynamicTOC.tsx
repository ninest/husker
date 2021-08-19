import clsx from "clsx";
import { useEffect, useState } from "react";

export const DynamicTOC = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const article = document.getElementsByTagName("article")[0];
    for (let element of article.children) {
      element = element as HTMLElement;
      if (["H2", "H3", "H4"].includes(element.tagName)) {
        const heading = {
          slug: element.id,
          // @ts-ignore
          text: element.innerText,
          level: parseInt(element.tagName[1]) - 1,
        };

        setHeadings((h) => [...h, heading]);
      }
    }
  }, []);

  return (
    <div className="space-y-xs">
      {headings &&
        headings.map((heading) => (
          <a
            key={heading.slug}
            href={`#${heading.slug}`}
            className={clsx(
              "block p-xs rounded hover:bg-gray-lightest",
              "text-gray-dark text-sm",
              {
                "ml-base": heading.level === 2,
                "ml-lg": heading.level === 3,
              }
            )}
          >
            {heading.text}
          </a>
        ))}
    </div>
  );
};
