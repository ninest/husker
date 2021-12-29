import { SmartLink } from "@/components/SmartLinks";
interface MobileNavbarProps {
  onMenuClick: () => void;
}
export const MobileNavbar = ({ onMenuClick }: MobileNavbarProps) => {
  return (
    <header className="p-md border-b space-x-base">
      <button className="text-gray" onClick={onMenuClick}>
        Menu
      </button>
    </header>
  );
};
