import {
  Award,
  Book,
  Bubble,
  ClipboardText,
  EmptyWallet,
  Home,
  Setting2,
  Diagram,
  LogoutCurve,
} from "iconsax-react";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

const navItems = [
  Home,
  Book,
  Bubble,
  ClipboardText,
  EmptyWallet,
  Award,
  Diagram,
  Setting2,
  LogoutCurve,
];

export default function Nav() {
  return (
    <nav role="navigation" className="hidden sm:block">
      <ul className="gap-4 w-full min-w-[88px] flex sm:flex-col items-center justify-center">
        {navItems.map((Icon, index) => (
          <Fragment key={index}>
            <NavItem>
              <Icon
                aria-hidden="true"
                size={20}
                variant="Linear"
                color="currentColor"
              />
            </NavItem>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ children }: { children: ReactNode }) {
  return (
    <li className="hover:bg-white rounded-sm py-[6px]  w-[80%] max-w-[207px] grid place-content-center text-icon-grey hover:text-mently-blue transition-colors duration-150 ease-in-out cursor-pointer">
      <Link href={"#"}>{children}</Link> 
      {/* add link names */}
    </li>
  );
}
