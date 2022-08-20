import { Button } from "./button/Button";
import { SmartLinkProps } from "./SmartLink";

interface QuickContributeProps {
  editHref: SmartLinkProps["href"];
  fixLinksHref?: SmartLinkProps["href"];
}

export const QuickContribute = ({ editHref, fixLinksHref }: QuickContributeProps) => {
  return (
    <div className="flex flex-col items-start justify-center space-y-xs md:space-y-sm">
      <Button variant="ghost" href={editHref} iconLeft="pen" size="xs">
        Edit
      </Button>

      {fixLinksHref && (
        <Button variant="ghost" href={fixLinksHref} iconLeft="bug" size="xs">
          Links broken?
        </Button>
      )}
    </div>
  );
};
