import { Dropdown } from "@/components/Dropdown";
import { Navbar } from "@/components/SideBar";
import { SidebarPopup } from "@/components/SideBarM";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import classNames from "classnames";
import { ReactNode, useState } from "react";

interface MainlLayoutProps {
  children: ReactNode;
}
export function MainLayout({ children }: MainlLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse =()=> setIsCollapsed(p=> !p)

  const dropdownOptions = ["Setting", "User", "Logout"];
  return (
    // <div className='grid grid-cols-[100px_1fr]'>
    <div className="">
      <aside
        className={classNames(
          "fixed top-0 left-0 z-40 h-full bg-primary border-neutral-200 ",
          "transition-all duration-300 hidden md:block",
          isCollapsed ? "w-32" : "w-64"
        )}
      >
        <Navbar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </aside>

      <div className={classNames("", isCollapsed ? "md:pl-32" : "md:pl-64")}>
        <div
          className={classNames(
            "flex items-center justify-between border-b border-solid border-b-neutral-300",
            "p-3"
          )}
        >
          <div className="">
            {/* Mobild PopUP */}
            <SidebarPopup trigger={<IconMenu2 size={24} />} />
          </div>
          {/* Header */}
          <Dropdown
            options={dropdownOptions}
            trigger={
              <div className="flex gap-2 items-center">
                <div className="">
                  <img
                    className="dark:invert w-12 rounded-full"
                    src="/images/user1.png"
                    alt="User Display Picture"
                  />
                </div>
                <div className="">
                  <div className="text-base">Godwin Jimmy</div>
                  <div className="text-sm text-neutral-500">
                    Free Plan{" "}
                    <span className="text-blue-600 font-semibold">Upgrade</span>
                  </div>
                </div>
                <div className="">
                  <IconChevronDown size={24} />
                </div>
              </div>
            }
          />
        </div>
        {/* Content */}
        <div className="p-4 lg:p-8 mx-auto max-w-7xl">{children}</div>
      </div>
    </div>
  );
}
