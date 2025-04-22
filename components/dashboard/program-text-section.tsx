import { ChevronUp, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProgramTextSection = ({ text }: { text: string }) => {
  return (
    <div className="w-full flex items-center justify-between px-4 h-[48px] border border-border-foreground bg-border-2 rounded-lg">
      <p className="font-chivo font-medium text-base text-primary">{text}</p>
      <div className="flex item-center gap-2">
        <ChevronUp className="text-muted size-6" data-testid="chevron-icon" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical
              id="step-3"
              className="text-muted size-6 cursor-pointer"
              data-testid="menu-icon"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProgramTextSection;
