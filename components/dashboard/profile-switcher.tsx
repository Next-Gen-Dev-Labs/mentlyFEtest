import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const ProfileSwitcher = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-brand-blue size-10 rounded-full flex-center">
        <Avatar>
          <AvatarImage src="/hand.svg" alt="Profile picture" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="sm:flex flex-col leading-none hidden">
        <span>Techrity Foundation</span>
        <span>Member</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DropdownMenuTrigger asChild>
            <button
              className="size-10 bg-brand-blue rounded-full flex-center hidden sm:flex cursor-pointer"
              aria-label="Open profile switcher"
            >
              <ChevronDown strokeWidth={5} className="text-white" />
            </button>
          </DropdownMenuTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuLabel>Switch Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Admin</DropdownMenuItem>
          <DropdownMenuItem>Super Admin</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
