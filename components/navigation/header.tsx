"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="bg-white border-b p-3 flex items-center justify-between">
      <div className="relative w-full max-w-md">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-10 bg-gray-50 border-gray-200 w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 bg-red-500 px-1.5 py-0.5 min-w-[18px] h-[18px] text-[10px]">
                3
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-3 border-b">
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="max-h-80 overflow-auto py-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-3 hover:bg-gray-50 border-b last:border-0"
                >
                  <div className="flex gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://i.pravatar.cc/32?img=${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">New application received</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t text-center">
              <Button variant="ghost" size="sm" className="text-xs w-full">
                View all notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex items-center justify-between w-full mr-10">
          {/* Left side: Avatar + Name + Role */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-purple-700  p-1 rounded-full">
              <Avatar className="h-8 w-8 border-2 bg-purple-700 ">
                <AvatarImage src="/avatar.svg" />
                <AvatarFallback>TF</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold truncate max-w-[100px]">
                Techrity Foundation
              </span>
              <span className="text-xs text-gray-500">Member</span>
            </div>
          </div>

          {/* Right side: Purple square icon */}
          <div className="h-4 w-4 bg-purple-700 rounded-sm" />
        </div>

        {/* <div className="flex items-center gap-2">
          <div className="flex items-center bg-purple-100 p-1 rounded-full">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div className="ml-2 mr-1">
              <Button
                variant="ghost"
                className="bg-purple-700 text-white h-6 px-2 py-0 text-xs rounded-full"
              >
                Manage Widgets
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}
