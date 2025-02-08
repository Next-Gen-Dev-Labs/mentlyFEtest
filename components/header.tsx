"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import profileImage from "../public/profile_img.png";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-end p-4 border-b gap-4"
      role="banner"
    >
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" aria-hidden="true" />
        <span
          className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
          aria-label="New notifications"
          role="status"
        />
      </Button>

      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 p-1 md:p-2 hover:bg-accent rounded-md"
            aria-label="User menu"
            aria-expanded={isOpen}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={profileImage.src} alt="Profile picture" />
              <AvatarFallback>GJ</AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium">Godwin Jimmy</div>
              <div className="text-xs text-muted-foreground flex items-center">
                Free Plan ·
                <Link
                  href="/upgrade"
                  className="text-blue-500 hover:text-blue-600 text-xs ml-1"
                  aria-label="Upgrade to premium plan"
                >
                  Upgrade
                </Link>
              </div>
            </div>
            {isOpen ? (
              <ArrowUp2 className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ArrowDown2 className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
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
