import { Category } from "@/types/resource";

import { icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export function Resource({ name, description, resources, slug }: Category) {
  const Icon = icon[slug];

  return (
    <article className="rounded-lg p-md bg-gray-100">
      <div className="mb-xs inline-block rounded-xl p-base bg-black bg-opacity-10">
        <Icon></Icon>
      </div>
      <h3 className="flex items-center justify-between mb-sm">
        <span className="font-semibold text-2xl">{name}</span>
      </h3>
      {description && <p className="mb-base text-gray">{description}</p>}

      {resources && (
        <>
          {/* space-y-xs lg:space-y-0 md:grid grid-cols-2 lg:grid-cols-4 gap-lg */}
          <div className="grid grid-cols-1 gap-base md:grid-cols-2 md:gap-lg lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {resources.map((link) => (
              <SmartLink
                key={link.url}
                href={link.url}
                className="inline-ghost block group "
              >
                <div>
                  <div className="underline">{link.name}</div>
                  {link.description && (
                    <div className="hidden group-hover:block group-focus:block text-sm text-gray-dark">
                      {link.description}
                    </div>
                  )}
                </div>
              </SmartLink>
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


