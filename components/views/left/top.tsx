import Button from "@/components/Button";
import { ArrowLeft2, Copy, Setting2 } from "iconsax-react";
import { Share } from "@/components/icons/share";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Top() {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-mently-honey flex items-center gap-1">
        <ArrowLeft2
          variant="Linear"
          size={16}
          className="stroke-mently-honey stroke-2"
          aria-hidden={true}
        />
        <button
          className="font-medium appearance-none"
          aria-label="Go back to homepage"
        >
          Back to Home
        </button>
      </span>
      <div className="flex gap-2 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Setting2
              variant="Linear"
              size={24}
              className="stroke-icon-grey hover:stroke-mently-blue transition-colors duration-150 ease-in-out"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-none text-gray-300">
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button ariaLabel="Copy">
          <Copy
            aria-hidden={true}
            variant="Linear"
            size={22}
            className="stroke-icon-grey hover:stroke-mently-blue transition-colors duration-150 ease-in-out"
          />
        </Button>
        <Button classname="bg-mently-blue text-white flex-center px-3 py-[2px] rounded-3xl gap-1 transition-transform hover:scale-105 ease-in-out" ariaLabel="Share">
          <Share className="stroke-white" aria-hidden={true} />
          <span>Share</span>
        </Button>
      </div>
    </div>
  );
}
