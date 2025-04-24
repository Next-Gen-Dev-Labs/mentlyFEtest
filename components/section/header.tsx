import React from "react";

import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import MobileTheme from "../mobiletheme";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-20 w-full z-20 shrink-0 items-center justify-between gap-2 border-b bg-header lg:px-8 lg:pr-4 px-4 transition-[width,height] ease-linear mb-2.5 group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-20">
      {/* Left side */}
      <div className="flex items-center gap-1 flex-1 min-w-0 group-has-[[data-collapsible=icon]]/sidebar-wrapper:pl-6">
        <SidebarTrigger className="-ml-1 cursor-pointer md:hidden block" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="md:hidden ml-3 flex h-4 w-auto items-center justify-center">
          <span className="text-base font-semibold">Techrity Dashboard</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center md:gap-10 gap-5 shrink-0">
        <MobileTheme />

        <Image
          src="/notifications.svg"
          alt="Notification"
          width={24}
          height={24}
          className="h-6 w-6 cursor-pointer dark:invert dark:brightness-100"
          priority
        />

        <div className="items-center gap-4 hidden md:flex">
          <div className="bg-purple-600 h-11 w-11  rounded-full">
            <Image
              src="/userdrop.svg"
              alt="User"
              width={32}
              height={32}
              className="h-10 w-full cursor-pointer object-cover p-2"
              priority
            />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold text-foreground ">
              Techrity Foun...
            </span>
            <span className="text-xs font-semibold text-muted-foreground">
              Member
            </span>
          </div>

          <div className="bg-sidebar rounded-md p-1">
            <ChevronDown className="h-4 w-4 cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
