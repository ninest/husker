import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { SmartLink } from "./SmartLink";

export function Navbar() {
  return (
    <header className="sticky top-0 p-md flex justify-between items-center bg-white bg-opacity-70">
      <div className="inline-ghost font-bold text-primary text">huskinfo</div>

      <nav>
        <ul className="text-sm flex space-x-lg items-center">
          <li>
            <NavItem href="/">
              <div>
                <FaSearch></FaSearch>
              </div>

              <span>Search</span>
            </NavItem>
          </li>
          <li>
            <NavItem href="/">About</NavItem>
          </li>
          <li>
            <NavItem href="https://campusmap.northeastern.edu/printable/campusmap.pdf">Map</NavItem>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ children, href }) {
  return (
    <SmartLink href={href} className="inline-ghost rounded-md flex items-center space-x-sm">
      {children}
    </SmartLink>
  );
}
