"use client";

import { useState } from "react";

export const Checkbox = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <input
      type="checkbox"
      onChange={() => setIsSelected((prev) => !prev)}
      checked={isSelected}
      className="accent-[#A5A5A5] checked:accent-[#07C500] size-3.5 border rounded-[2px]"
    />
  );
};
