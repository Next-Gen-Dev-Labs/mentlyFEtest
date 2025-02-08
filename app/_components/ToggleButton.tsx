"use client";

import React, { useState } from "react";

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive((prev) => !prev)}
      className="w-8  rounded-[15px] h-4 bg-white"
    >
      <div className="bg-primary-400  w-3 h-3 rounded-full"></div>
    </button>
  );
}
