import { Icon } from "./Icon";
import { SmartLink } from "./SmartLinks";

interface BackButtonProps {
  href?: string;
}

export const BackButton = ({ href = "/" }: BackButtonProps) => {
  return (
    <SmartLink className="flex items-center space-x-sm text-gray" href={href}>
      <Icon id="caretleft" className="text-gray"></Icon>
      <div>Links</div>
    </SmartLink>
  );
};
