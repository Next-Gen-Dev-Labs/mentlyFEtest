"use client";

import { useState } from "react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-8 h-4 flex items-center rounded-full p-2  transition-colors duration-300
        ${enabled ? "bg-[#F6F6F6]" : "bg-gray-300"}`}
    >
      <div
        className={`bg-[#1F0954] w-3 h-3 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-2.5" : "translate-x-0"}`}
      />
    </button>
  );
}
