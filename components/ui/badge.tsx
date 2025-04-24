import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "rounded-full flex w-fit items-center gap-1 px-2.5 py-0.5",
  {
    variants: {
      variant: {
        default: "bg-[#D4E0F3] text-[#0077FF] [&>.badge-dot]:bg-[#0077FF]",
        destructive:
          "bg-[#D09696] text-destructive [&>.badge-dot]:bg-destructive",
        success: "bg-[#D4F3D4] text-[#2AC100] [&>.badge-dot]:bg-[#2AC100]",
        primary: "bg-secondary text-primary [&>.badge-dot]:bg-primary",
        secondary: "bg-secondary text-[#1C0AE1] [&>.badge-dot]:bg-[#1C0AE1]",
        info: "bg-[#0214BD38] text-white [&>.badge-dot]:bg-white",
      },
      size: {
        default: "[&>.badge-dot]:size-1.5 text-[10px] font-bold",
        lg: "[&>.badge-dot]:size-2 text-xs font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return (
    <div {...props} className={cn(badgeVariants({ variant, size, className }))}>
      <span className="inline-block badge-dot rounded-full" />
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
