"use client";

import React, { useState } from "react";

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive((prev) => !prev)}
      className="w-8  rounded-[15px] h-4 bg-white relative"
    >
      <div
        className={`bg-primary-400  w-3 h-3 duration-200 rounded-full ${
          isActive ? "translate-x-[18px]" : "translate-x-[2px] "
        } `}
      ></div>
    </button>
  );
}
