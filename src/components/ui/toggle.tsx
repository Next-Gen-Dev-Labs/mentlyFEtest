import { cn } from "@/utils/classname";
import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
}: ToggleProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer ring-0 outline-none"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className={cn(
            "w-[29px] h-[15px] rounded-full peer",
            disabled ? "bg-gray-200" : checked ? "bg-white" : "bg-gray-300",
            "peer-focus:outline-none",
            "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
            "after:bg-primary after:border-gray-300 after:border after:rounded-full",
            "after:h-[12px] after:w-[12px] after:transition-all",
            "peer-checked:after:translate-x-full peer-checked:after:border-white",
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          )}
        />
      </div>
      {label && (
        <span
          className={cn(
            "ml-3 text-sm font-medium",
            disabled ? "text-gray-400" : "text-gray-900"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}
