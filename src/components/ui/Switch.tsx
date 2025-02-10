"use client";

import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export default function Switch({
  checked = false,
  onCheckedChange,
  className = "",
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onCheckedChange?.(newChecked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={toggleSwitch}
      className={`
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 
        focus-visible:ring-white focus-visible:ring-opacity-75 bg-grey-4 
        ${className}
      `}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`
          pointer-events-none inline-block h-5 w-5 transform rounded-full bg-sidebar-background shadow-lg 
          ring-0 transition duration-200 ease-in-out
          ${isChecked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
}
