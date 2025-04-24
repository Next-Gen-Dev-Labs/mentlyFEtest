

"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export default function Switch({
  checked,
  onChange,
  disabled,
  className,
}: SwitchProps) {

  const handleCheckedChange = (newChecked: boolean) => {
    onChange(newChecked);
  };

  return (
    <SwitchPrimitive.Root
      className={twMerge(
        "relative w-[50px] h-6 rounded-full bg-white data-[state=checked]:bg-white transition shrink-0 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      checked={checked}
      onCheckedChange={handleCheckedChange}
      disabled={disabled}
    >
      <SwitchPrimitive.Thumb className="block w-4 h-4 bg-primary rounded-full shadow-md transition-transform transform translate-x-1 data-[state=checked]:translate-x-8" />
    </SwitchPrimitive.Root>
  );
}


