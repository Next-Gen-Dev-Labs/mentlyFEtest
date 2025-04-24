"use client"

import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { WelcomeBanner } from "@/components/welcome-banner"
import { LayoutGrid, Rows } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="border-b bg-white">
      <div className="flex items-center justify-end p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=TF" alt="Techrity Foundation" />
              <AvatarFallback>TF</AvatarFallback>
            </Avatar>
            <div className="text-xs">
              <div className="font-medium">Techrity Foundation</div>
              <div className="text-muted-foreground">Member</div>
            </div>
          </div>
          <div className="w-6 h-6 bg-[#2D0A5A] rounded-md flex items-center justify-center text-white">
            <span className="text-xs">💬</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Rows className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-[#EEE6FF] text-[#2D0A5A]">
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" className="h-8 text-sm font-medium">
          Manage Widgets
        </Button>
      </div>
      <WelcomeBanner name="Blessing" />
    </div>
  )
}
