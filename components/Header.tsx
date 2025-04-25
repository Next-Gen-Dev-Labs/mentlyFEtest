"use client";

import { Button } from "@/components/ui/button";
import { PanelRightClose, Bell, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import hand from "@/public/hand.svg"
interface HeaderProps {
  toggleSidebar: () => void;
}

const users = [
  {
    id: "blessing",
    name: "Blessing",
    role: "Admin",
    image: hand,
  },
  {
    id: "maxwell",
    name: "Maxwell Smith",
    role: "Member",
    image: hand
  },
  {
    id: "adeati",
    name: "Adeati Samuel",
    role: "Member",
    image: hand
  }
];

export default function Header({ toggleSidebar }: HeaderProps) {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <nav className="md:hidden">
        <Button variant="ghost" onClick={toggleSidebar}>
          <PanelRightClose className="h-6 w-6 text-gray-600" />
        </Button>
      </nav>
      <div className="flex items-center justify-end w-full">
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="relative" size="icon">
                <span className="animate-pulse w-2 h-2 absolute top-2 right-2 rounded-full bg-red-600"></span>
                <Bell className="h-5 w-5 text-gray-600 " />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-white">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Notifications</h4>
                <p className="text-sm text-gray-600">
                  You have 3 new notifications.
                </p>
                <div className="text-sm text-gray-600">
                  - KYC Verification completed
                  <br />
                  - New user signed up
                  <br />
                  - Withdrawal request pending
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Select
            defaultValue={selectedUser.id}
            onValueChange={(value) => {
              const user = users.find(u => u.id === value);
              if (user) setSelectedUser(user);
            }}
          >
            <SelectTrigger className="w-[220px] py-7 border-purple-600 text-purple-600">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <div className="relative rounded-full bg-violet-800 fill-white w-10 h-10 ">
                    <Image
                      src={selectedUser.image}
                      alt={selectedUser.name}
                      fill
                      className="object-contain px-2"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{selectedUser.name}</span>
                    <span className="text-xs text-gray-500">{selectedUser.role}</span>
                  </div>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white">
              {users.map((user) => (
                <SelectItem
                  key={user.id}
                  value={user.id}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{user.name}</span>
                      <span className="text-xs text-gray-500">{user.role}</span>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}