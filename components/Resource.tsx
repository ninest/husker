import { Category } from "@/types/link";
import { FaArrowRight } from "react-icons/fa";
import { SmartLink } from "./SmartLink";

export function Resource({ title, description, links }: Category) {
  return (
    <article className="rounded-lg p-md bg-gray-lightest">
      <h3 className="font-semibold text-2xl">{title}</h3>
      {description && <p className="mt-sm text-sm text-gray">{description}</p>}

      {links && (
        <>
          <div className="mt-base grid md:grid-cols-2 xl:grid-cols-3 gap-xs md:gap-base">
            {links.map((link) => (
              <div key={link.href} className="inline-block">
                <SmartLink href={link.href} className="underline">
                  {link.title}
                </SmartLink>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-base font-medium text-sm text-gray-dark inline-flex items-center justify-center space-x-sm">
        <span>More</span>
        <FaArrowRight></FaArrowRight>
      </div>
    </article>
  );
}
