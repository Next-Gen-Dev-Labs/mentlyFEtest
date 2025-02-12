"use client";

import React, { useState } from "react";

export default function ProgramCheckbox() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-2 mt-3">
      <input
        type="checkbox"
        className="w-4 h-4"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        // htmlFor="show-when-published"
      />
      <label className="text-sm" id="show-when-published">
        Show this when published
      </label>
    </div>
  );
}
