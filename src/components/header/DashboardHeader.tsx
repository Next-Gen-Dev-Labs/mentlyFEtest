"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { DashboardHeaderProps } from "@/lib/index.types"

export default function DashboardHeader({
  userName = "Blessing",
  userRole = "Techrity Found...",
  userImage = "/SVGs/logo_icon.svg",
  children,
}: DashboardHeaderProps) {
  const [hasNotifications, _setHasNotifications] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 flex flex-col gap-3 transition-shadow duration-200 dashboard-header",
        isScrolled && "shadow-sm",
      )}
    >
      {/* Top section with notifications and user profile */}
      <div className="flex items-center bg-white justify-between px-4 py-2 md:px-6 w-full">
        {/* Left side content area */}
        <div className="flex-1 flex items-center">{children}</div>

        {/* Right side with notifications and profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label={hasNotifications ? "You have unread notifications" : "Notifications"}
              >
                <Bell className="h-5 w-5" />
                {hasNotifications && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" aria-hidden="true"></span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {hasNotifications ? (
                  <div className="p-4 text-sm">
                    <p className="font-medium">Welcome to Techrity!</p>
                    <p className="text-muted-foreground mt-1">Complete your profile to get started.</p>
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-muted-foreground">No new notifications</div>
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-sm font-medium">View all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 hover:bg-gray-100" aria-label="User menu">
                <Avatar className="h-8 w-8 border border-purple-100">
                  <AvatarImage src={userImage || "/SVGs/logo_icon.svg"} alt={userName} />
                  <AvatarFallback className="bg-purple-100 text-[#404040] text-[14px] font-chivo font-normal">
                    {userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-[#404040] text-[14px] font-chivo font-normal">{userRole}</p>
                  <p className="text-[#53547B] text-[12px] font-chivo font-normal">Member</p>
                </div>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
