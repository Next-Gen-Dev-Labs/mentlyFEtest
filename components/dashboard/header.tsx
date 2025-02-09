import { BellDot, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="flex w-[full] h-[82px] items-center justify-between px-6 lg:px-16 py-[12px] bg-background shadow-md">
      <div>
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative cursor-pointer">
          <BellDot
            className="w-6 h-6 text-border"
            data-testid="notification-bell"
          />
          <div
            data-testid="notification-dot"
            className="absolute top-0 right-0 w-3 h-3 bg-destructive rounded-full border-2 border-white"
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/images/man.png"
            alt="User Profile"
            width={44}
            height={44}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <span className="text-xs lg:text-sm font-normal text-foreground">
              Godwin Jimmy
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] lg:text-xs text-muted">
                Free Plan
              </span>
              <span className="text-xs lg:text-sm text-link font-bold">
                Upgrade
              </span>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
