"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const FilterHeaderWithDropdown = ({ options = ["Active", "Pending", "Archived"], onSelect }) => {
  const [selected, setSelected] = useState("Active");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (onSelect) onSelect(value);
  };

  return (
    <div className="flex items-center justify-end gap-3 mb-4">
      {/* Icon and Label */}
     
        {/* <Bars3Icon className="w-5 h-5 text-purple-600" /> */}
        <p className="text-sm font-medium text-gray-700">Filter</p>
   

      {/* Dropdown */}
      <select
        value={selected}
        onChange={handleChange}
        className="text-sm border  rounded-md px-3 py-2 focus:outline-none text-black"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterHeaderWithDropdown;
