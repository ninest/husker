import { nuPath, NUPath } from "@/types/courses";
import { Icon } from "./Icon";

interface NUPathDisplayProps {
  path: NUPath[];
}

export const NUPathDisplay = ({ path }: NUPathDisplayProps) => {
  return (
    <div className="flex">
      <div className="rounded-md overflow-hidden border flex divide-x">
        {nuPath.map((np) => (
          <div key={np} className="w-10">
            <div className="p-xs bg-gray-50 text-gray text-sm font-semibold text-center">
              {np}
            </div>
            <div className="h-7 p-xs border-t flex items-center justify-center">
              {path.includes(np) && (
                <Icon id="checkcircle" className="text-xs text-primary" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
