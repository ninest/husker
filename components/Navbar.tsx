import { FaRegMap, FaPlus, FaInfo } from "react-icons/fa";
import { SmartLink } from "./SmartLink";

export function Navbar() {
  return (
    <header className="z-50 sticky top-0 space-x py-base flex justify-between items-center bg-white bg-opacity-70">
      <SmartLink href="/" className="inline-ghost font-bold text-primary text">
        NEU Links
      </SmartLink>

      <nav>
        <ul className="text-sm flex space-x-lg items-center">
          <li>
            <NavItem href="/map" icon={<FaRegMap />} text="Map"></NavItem>
          </li>
          <li>
            <NavItem href="/about" icon={<FaInfo />} text="About"></NavItem>
          </li>
          <li>
            <NavItem href="/contribute" icon={<FaPlus />} text="Add"></NavItem>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ href, icon, text }) {
  return (
    <SmartLink
      href={href}
      className="inline-ghost rounded-md flex items-center space-x-sm"
    >
      <div>{icon}</div>
      <span className="hidden md:block">{text}</span>
    </SmartLink>
  );
}
