import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// MentorAction component that shows a dropdown menu for actions like "Accept" and "Reject"
export const RequestAction = () => {
  return (
    <DropdownMenu>
      {/* Dropdown trigger icon (visible on small screens) */}
      <DropdownMenuTrigger className="2xl:hidden">
        <MoreVerticalIcon />
      </DropdownMenuTrigger>

      {/* Dropdown menu content, aligned to the bottom and left */}
      <DropdownMenuContent side="bottom" align="start">
        {/* Dropdown label for the menu */}
        <DropdownMenuLabel>Action</DropdownMenuLabel>

        {/* Separator to separate the label from the options */}
        <DropdownMenuSeparator />

        {/* Container for the action buttons */}
        <div className="space-y-2 flex flex-col">
          {/* Reject action button inside the dropdown */}
          <DropdownMenuItem asChild>
            <Button className="px-4 py-2 rounded-md border border-red-400 text-red-700 hover:bg-red-50 bg-red-50 text-sm">
              Reject
            </Button>
          </DropdownMenuItem>

          {/* Accept action button inside the dropdown */}
          <DropdownMenuItem asChild>
            <Button className="px-4 py-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue text-sm">
              Accept
            </Button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
