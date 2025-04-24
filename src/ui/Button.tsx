import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(
  "rounded-md transition-all focus:outline-none focus:scale-[0.98] duration-300 ease-in-out cursor-pointer flex justify-center gap-x-2 items-center whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "border hover:opacity-35 focus:ring ring-offset-1 focus:ring-[#6f01d0] border-purple-500 bg-[#6f01d0] text-white",
        primary_outline:
          "hover:bg-[#6f01d0] focus:ring ring-offset-1 focus:ring-[#6f01d0] hover:text-white border-[#6f01d0] border text-[#6f01d0]",
        secondary:
          "bg-[#ddd6fb] text-[#6f01d0] font-semibold border-purple-300 focus:ring ring-offset-1 focus:ring-[#6f01d0] hover:bg-[#6f01d0] hover:text-white",
        danger: "border border-red-500 bg-red-500 text-white",
        danger_outline:
          "hover:bg-red-400 focus:ring ring-offset-1 focus:ring-red-500 bg-red-50 hover:text-white border-red-500 border text-red-500",
        //   outline: "",
      },
      size: {
        xs: "text-[11px] px-2.5 py-1",
        sm: "text-sm px-3 py-2",
        md: "text-base px-3 py-1",
        lg: "text-lg px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "xs",
    },
  }
);

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
