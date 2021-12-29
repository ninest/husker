import { SmartLink } from "./SmartLinks";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-md py-sm border-b">
      <div className="font-semibold">Husker</div>
      <nav className="flex items-center justify-center space-x-md">
        <ul className="flex items-center justify-center space-x-base">
          <li>
            <SmartLink href="/about" className="font-semibold text-gray-dark" activeClassName="font-bold">
              About
            </SmartLink>
          </li>
          <li>
            <SmartLink href="/more" className="font-semibold text-gray-dark" activeClassName="font-bold">
              More
            </SmartLink>
          </li>
        </ul>
        <input
          className="px-xs py-0.5 border rounded focus:ring-0"
          type="text"
        />
      </nav>
    </header>
  );
};
