"use client";

import { useState } from "react";

export default function Switch() {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <label className="relative inline-block w-8 h-5">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden peer"
      />
      <span className="absolute cursor-pointer inset-x-0 inset-y-0 bg-[#F6F6F6] rounded-[1.125rem] before:absolute before:content-[''] before:size-4 before:left-0.5 before:inset-y-0.5 before:bg-[var(--primary)] before:rounded-[50%] peer-checked:bg-[#f6f6f6] peer-checked:before:translate-x-3" />
    </label>
  );
}
