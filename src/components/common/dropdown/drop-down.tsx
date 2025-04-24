import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export interface DropdownItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

type PopoverDropdownProps = {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
};

export function PopoverDropdown({
  trigger,
  items,
  className = "w-42",
}: PopoverDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleItemClick = (onClick?: () => void) => {
    setOpen(false); // Close the popover
    onClick?.(); // Execute the item's onClick function if it exists
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className={`p-2 ${className} shadow-sm border border-gray-100 text-xs transition-all duration-200 ease-in-out`}>
        <div className="flex flex-col gap-1">
          {items.map((item, index) => (
            <div key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-start text-xs py-2.5 font-normal transition-colors duration-150 ${
                  item.variant === 'destructive' 
                    ? 'text-red-600 hover:text-red-700 hover:bg-red-100' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => handleItemClick(item.onClick)}
              >
                {item.icon && <span className="mr-2 opacity-70">{item.icon}</span>}
                {item.label}
              </Button>
              {index < items.length - 1 && <Separator className="my-1 opacity-20" />}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}