import { Icon } from "./Icon";

interface MobileNavbarProps {
  onMenuClick: () => void;
}
export const MobileNavbar = ({ onMenuClick }: MobileNavbarProps) => {
  return (
    <header className="bg-light  px-md py-base border-b flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-gray border p-2 rounded mr-base" onClick={onMenuClick}>
          <Icon id="griplines"></Icon>
        </button>
        <div className="font-display font-black text-lg text-dark">Husker</div>
      </div>
      <button className="text-gray border p-2 rounded-full" onClick={onMenuClick}>
        <Icon id="search"></Icon>
      </button>
    </header>
  );
};
