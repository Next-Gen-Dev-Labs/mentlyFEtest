"use client";

import { Bell } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";
import profileImage from "@/public/profile_img.png";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className=" fixed top-0 left-0 right-0 z-20  bg-white flex items-center justify-end p-4 border-b gap-4"
      role="banner"
    >
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5 text-[#4D4D4D]" aria-hidden="true" />
        <span
          className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
          aria-label="New notifications"
          role="status"
        />
      </Button>

      <Avatar className="h-12 w-12">
        <AvatarImage src={profileImage.src} alt="Profile picture" />
        <AvatarFallback>GJ</AvatarFallback>
      </Avatar>
      <div className="hidden md:block text-left">
        <div className="text-[14px] text-[#4D4D4D] font-medium">
          Godwin Jimmy
        </div>
        <div className="text-[12px] text-muted-foreground flex items-center">
          Free Plan ·
          <Link
            href="/upgrade"
            className="text-[#2B85FE] hover:text-blue-600 text-xs ml-1"
            aria-label="Upgrade to premium plan"
          >
            Upgrade
          </Link>
        </div>
      </div>
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          {/* <Button
            variant="ghost"
            className="flex items-center gap-2 p-1 md:p-2 hover:bg-accent rounded-md "
            aria-label="User menu"
            aria-expanded={isOpen}
          > */}
          {isOpen ? (
            <ArrowUp2 className="h-4 w-4 cursor-pointer" aria-hidden="true" />
          ) : (
            <ArrowDown2 className="h-4 w-4 cursor-pointer" aria-hidden="true" />
          )}
          {/* </Button> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
