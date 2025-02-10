import {
  IconArrowLeft,
  IconLayoutSidebar,
  IconHome,
  IconNotebook,
  IconChartBubble,
  IconClipboardText,
  IconWallet,
  IconAward,
  IconChartHistogram,
  IconSettings,
  IconLogout2,
  IconUserPentagon,
} from "@tabler/icons-react";
import classNames from "classnames";

interface NavbarProps {
  isMobile?: boolean;
  isCollapsed?: boolean;
  toggleCollapse?: ()=>void
}
export function Navbar({ isMobile = false, isCollapsed = false, toggleCollapse }: NavbarProps) {
  return (
    <div className="bg-[#1F0954] min-h-screen p-4 flex flex-col overflow-y-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center select-none gap-2">
          <img
            className="dark:invert w-14"
            src="/images/ted1.png"
            alt="Ted Logo"
            // width={180}
            // height={38}
            // priority
          />
          <p
            className={classNames("text-white text-lg font-semibold", {
              "hidden": isCollapsed,
            })}
          >
            Mently
          </p>
        </div>
        <div
          className={classNames("flex justify-center items-center", {
            "!hidden": isMobile,
          })}
          onClick={toggleCollapse}
        >
          <IconLayoutSidebar className="text-[#C2C2C2] text-lg" size={30} />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 ">
        {rowItems.map((item, index) => (
          <div
            className={classNames(
              "select-none flex justify-center items-center group p-3 gap-4 rounded-md hover:bg-white hover:cursor-pointer transition-all",
              {
                // "!justify-start": !isCollapsed,
              }
            )}
            key={index}
          >
            <item.icon
              className="text-[#C2C2C2] group-hover:text-[#1F0954] text-lg"
              size={25}
            />

            <p className={classNames("text-white group-hover:text-[#1F0954]", {
              "hidden": isCollapsed,
            })}>{item.name}</p>
          </div>
        ))}
      </div>

      <div className={classNames("flex justify-center items-center flex-col mt-6 bg-neutral-300/50 p-4 rounded-md",{
        "!justify-start": !isCollapsed
      })}>
        <IconUserPentagon size={25} className="text-white" />
        <div className="text-xs text-yellow-500 underline">
          Visit Mently Help Desk Here
        </div>
      </div>
    </div>
  );
}

const rowItems = [
  { name: "Home", icon: IconHome, link: "/home" },
  // { name: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
  { name: "Label", icon: IconNotebook, link: "/profile" },
  { name: "Label", icon: IconChartBubble, link: "/settings" },
  { name: "Label", icon: IconClipboardText, link: "/settings" },
  { name: "Label", icon: IconSettings, link: "/settings" },
  { name: "Label", icon: IconWallet, link: "/settings" },
  { name: "Label", icon: IconAward, link: "/settings" },
  { name: "Label", icon: IconChartHistogram, link: "/settings" },
  { name: "Label", icon: IconSettings, link: "/settings" },
  { name: "Label", icon: IconLogout2, link: "/logout" },
];
