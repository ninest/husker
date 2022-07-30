import { nuPath, NUPath } from "@/types/courses";
import { Icon } from "../Icon";

interface NUPathDisplayProps {
  path: NUPath[];
}

export const NUPathDisplay = ({ path }: NUPathDisplayProps) => {
  return (
    <div className="flex">
      <div className="rounded-md overflow-x-scroll border dark:border-gray-800  flex divide-x dark:divide-gray-800">
        {nuPath.map((np) => (
          <div key={np} className="w-10">
            <div className="p-xs bg-gray-50 dark:bg-gray-900 text-gray text-xs md:text-sm font-semibold text-center">
              {np}
            </div>
            <div className="h-7 p-xs  border-t dark:border-gray-800  flex items-center justify-center">
              {path.includes(np) && (
                <Icon
                  id="checkcircle"
                  className="text-xs dark:text-primary-darker"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
