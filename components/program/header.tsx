import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/constants/icons";
import { Copy, Settings } from "lucide-react";
import { GoBack } from "../ui/go-back";

export function ProgramHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <GoBack
        className="text-[#FF8A65] hover:text-[#FF8A65]/90"
        text="Back to Home"
      />

      <div className="flex items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-gray-400">
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-400">Clear</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600"
        >
          <Copy className="h-5 w-5" />
        </Button>
        <Button className="rounded-full">
          <Icons.share />
          Share
        </Button>
      </div>
    </div>
  );
}
