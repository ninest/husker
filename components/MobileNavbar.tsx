import { Icon } from "./Icon";

interface MobileNavbarProps {
  onMenuClick: () => void;
}
export const MobileNavbar = ({ onMenuClick }: MobileNavbarProps) => {
  return (
    <header className="bg-light  px-md py-base border-b flex items-center space-x-base">
      <button className="text-gray border p-2 rounded" onClick={onMenuClick}>
        <Icon id="griplines"></Icon>
      </button>
      <div className="font-display font-black text-lg text-dark">Husker</div>
    </header>
  );
};
