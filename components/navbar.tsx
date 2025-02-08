"use client";

import { Icons } from "@/constants/icons";
import { images } from "@/constants/image";
import { paths } from "@/constants/paths";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { useSidebar } from "./ui/sidebar";
import { UserProfile } from "./user-profile";

export function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="sticky top-0 z-50 flex h-[70px] w-full items-center justify-between bg-[#FDFDFD] px-3 shadow-sm md:px-0 lg:px-10">
      <Logo linkClassName="md:invisible w-fit" href={paths.private.home} />
      <div className="flex items-center md:gap-5">
        <div className="h-[24px]">
          <Icons.notification />
          <span className="relative -top-6 left-3 flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
          </span>
        </div>
        <UserProfile
          image={images.user.src}
          plan="Free plan"
          name="Godwin Jimmy"
        />{" "}
        <Menu
          onClick={toggleSidebar}
          className="h-5 w-5 text-primary md:hidden"
        />
      </div>
    </div>
  );
}
