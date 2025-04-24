import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, ReactNode } from "react";
import { cn } from "~/utils/cn";

const buttonVariants = cva(
  "disabled:opacity-30 flex items-center justify-center gap-2 font-medium cursor-pointer disabled:cursor-not-allowed flex-none",
  {
    variants: {
      variant: {
        solid: "bg-custom-1d0 text-white",
        outline: "border border-custom-1d0 text-custom-1d0",
        error: "text-[#D83535] border bg-[#FFEDED] border-[#D09696]",
        secondary: "bg-[#DDD6FB] text-custom-1d0",
      },
      size: {
        sm: "py-1 px-3 h-[22px] text-xs",
        md: "px-2 py-2.5 text-xs h-8",
        lg: "text-sm font-semibold h-11 px-3 py-1",
      },
      radius: {
        full: "rounded-full",
        default: "rounded-lg",
      },
      width: {
        max: "w-max",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      radius: "default",
      size: "md",
      width: "max",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    icon?: ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant, size, radius, width, icon, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            radius,
            width,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {children} {icon}
      </button>
    );
  },
);

Button.displayName = "Button";
