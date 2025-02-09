import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Switch } from "@/components/ui/switch";

const items = [
  { url: "#", icon: "/icons/home.svg", name: "home" },
  { url: "#", icon: "/icons/book.svg", name: "book" },
  { url: "#", icon: "/icons/bubble.svg", name: "bubble" },
  { url: "#", icon: "/icons/clipboard-text.svg", name: "clipboard" },
  { url: "#", icon: "/icons/empty-wallet.svg", name: "wallet" },
  { url: "#", icon: "/icons/award.svg", name: "award" },
  { url: "#", icon: "/icons/diagram.svg", name: "diagram" },
  { url: "#", icon: "/icons/settings.svg", name: "settings" },
  { url: "#", icon: "/icons/logout.svg", name: "logout" },
];

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const AppSidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  activeItem,
  setActiveItem,
}) => {
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && (
        <div
          data-testid="sidebar-backdrop"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        data-testid="sidebar"
        className={`fixed top-0 left-0 h-full  bg-primary shadow-lg transform ${
          isSidebarOpen ? "translate-x-0 w-[120px]" : "-translate-x-full w-0"
        } transition-transform duration-300 ease-in-out overflow-y-auto z-50 lg:translate-x-0 lg:w-[120px] lg:h-screen`}
      >
        <div className="py-[60px] flex flex-col items-center space-y-[40px]">
          <Image
            src="/logos/mently-logo.svg"
            alt="mently logo"
            width={47}
            height={32}
          />
          <Image src="/icons/grid.svg" alt="grid icon" width={32} height={32} />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col items-center gap-y-8">
            {items.map((item) => (
              <div key={item.name} className="w-[84px] mx-auto">
                <Link
                  href={item.url}
                  onClick={() => setActiveItem(item.name)}
                  className={`rounded-lg flex items-center justify-center p-4 ${
                    activeItem === item.name ? "bg-white py-6" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="py-[60px] flex flex-col items-center gap-y-10">
          <div className="w-[84px] h-[126px] bg-primary-foreground rounded-lg flex flex-col justify-center space-y-[24px] px-2 text-center">
            <Image
              src="/icons/user-tag.svg"
              alt="user tag icon"
              width={20}
              height={20}
            />
            <p className="text-secondary text-[10px] font-normal underline">
              Visit Mently <br /> Help Desk <br /> Here
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
