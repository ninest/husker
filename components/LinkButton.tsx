import { Link } from "@/types/category";
import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/Spacer";

interface LinkButtonProps {
  link: Link;
  showDescription?: boolean;
}

export const LinkButton = ({
  link,
  showDescription = false,
}: LinkButtonProps) => {
  return (
    <SmartLink
      style={{ minWidth: 0 }}
      className="flex items-center space-x-md rounded p-base bg-gray-100 hover:bg-gray-200 "
      href={link.href}
    >
      <Icon
        id={link.icon}
        className="text-sm"
      ></Icon>

      <div>
        <div
        className="font-semibold text-sm text-gray"
        >
          {link.name}
        </div>
        {showDescription && (
          <>
            <Spacer size="xs"></Spacer>
            <div
            className="text-gray-light font-normal text-xs"
            >
              {link.description}
            </div>
          </>
        )}
      </div>
    </SmartLink>
  );
};
