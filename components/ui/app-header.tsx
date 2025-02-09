"use client";

import { ChevronDown, PanelLeft } from "lucide-react";
import { NotificationIcon } from "../icons/Notifications";
import Image from "next/image";
import { useSidebar } from "./sidebar";

export function AppHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-20 shrink-0 items-center justify-between md:justify-end gap-2 border-b shadow px-4 md:px-8">
      <PanelLeft className="md:hidden" onClick={toggleSidebar} />
      <div className="flex items-center gap-6">
        <NotificationIcon />
        <div className="flex gap-2">
          <Image src="/user-image.png" alt="User Image" width={44} height={44} />
          <div>
            <p className="text-sm">Godwin Jimmy</p>
            <div className="flex gap-2 items-center">
              <span className="text-sm font-light">Free Plan</span>
              <span className="text-[#2B85FE]">Upgrage</span>
            </div>
          </div>
        </div>
        <ChevronDown />
      </div>
    </header>
  );
}
