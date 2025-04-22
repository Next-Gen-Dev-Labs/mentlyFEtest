"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PropsWithChildren } from "react";

type OptionPopoverProps = PropsWithChildren & {
  options: string[];
};

export function OptionPopover({ children, options }: OptionPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild onClick={(e) => e.stopPropagation()}>{children}</PopoverTrigger>
      <PopoverContent className="p-2 w-auto shadow-sm">
        <ul className="space-y-2 text-xs text-muted">
          {options.map((item) => (
            <li className="cursor-pointer" key={item}>{item}</li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
