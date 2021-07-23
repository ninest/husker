import { Category } from "@/types/resource";
import { FaArrowRight } from "react-icons/fa";
import { SmartLink } from "./SmartLink";

export function Resource({ name, description, resources }: Category) {
  return (
    <article className="rounded-lg p-md bg-gray-lightest">
      <h3 className="font-semibold text-2xl">{name}</h3>
      {description && <p className="mt-sm text-gray">{description}</p>}

      {resources && (
        <>
          <div className="mt-base space-y-sm md:space-y-base">
            {/* grid md:grid-cols-2 xl:grid-cols-3 gap-xs md:gap-base */}
            {resources.map((link) => (
              <div key={link.url}>
                <SmartLink href={link.url}>
                  <span className="underline mr-base">{link.name}</span>
                  <span className="text-sm text-gray">{link.description}</span>
                </SmartLink>
              </div>
            ))}
          </div>
        </>
      )}

      {/* <div className="mt-base font-medium text-sm text-gray-dark inline-flex items-center justify-center space-x-sm">
        <span>More</span>
        <FaArrowRight></FaArrowRight>
      </div> */}
    </article>
  );
}
