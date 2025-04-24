"use client"
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const MyCheckbox = ({ label = "Programs", defaultChecked = false,updateACheckbox }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

 

  return (
    <label aria-label="checkbox" htmlFor={label} className="flex items-center space-x-2 cursor-pointer">
      <div
        className={`w-5 h-5 border rounded-sm flex items-center justify-center transition-colors ${
          isChecked ? "bg-[#07C500] border-[#07C500]" : "border-gray-400"
        }`}
        onClick={() => {setIsChecked(!isChecked);updateACheckbox(label)}}
      >
        {isChecked && <FaCheck className="text-white text-xs" />}
      </div>
    </label>
  );
};

export default React.memo(MyCheckbox)

