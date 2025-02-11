import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  prepend?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prepend, ...props }, ref) => {
    return (
      <div className="px-3 py-4 border border-primary rounded-[5px] flex items-center w-full shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
        {prepend && <div className="px-3 flex items-center">{prepend}</div>}
        <input
          type={type}
          className={cn(
            "flex-1 h-9 bg-transparent px-3 py-1 text-base focus-visible:outline-none md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
