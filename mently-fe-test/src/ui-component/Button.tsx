import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "outlined" | "primary";
  className?: string;
};

const variantMap = {
  outlined:
    "border border-solid border-buttonMain text-buttonMain bg-white hover:bg-primary/5",
  primary:
    "bg-buttonMain text-white border border-solid border-transparent hover:bg-buttonMain/80",
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        `px-4 font-medium text-[14px] lg:text-[16px] py-1 w-fit rounded-[4px] whitespace-nowrap cursor-pointer transition-colors`,
        variantMap[variant],
        disabled &&
          "cursor-not-allowed opacity-60",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
