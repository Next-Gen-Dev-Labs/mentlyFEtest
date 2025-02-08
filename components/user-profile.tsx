import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserProfileProps {
  name: string;
  plan: string;
  image?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  plan,
  image,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex w-fit cursor-pointer items-center justify-between p-4"
          role="button"
          aria-label="User menu"
        >
          <div className="flex items-center space-x-1 md:space-x-4">
            <Avatar className="">
              {image ? (
                <AvatarImage src={image} data-testid="img" alt={name} />
              ) : (
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            <div className="hidden md:block">
              <h2 className="">{name}</h2>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-muted-foreground">{plan}</p>
                <Link className="text-sm text-custom-blue" href={"#"}>
                  Upgrade
                </Link>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500 md:ml-1" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-3 w-56 md:mr-auto">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
