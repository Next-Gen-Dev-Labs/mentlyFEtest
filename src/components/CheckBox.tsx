import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

export function Checkbox({ label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      {/* Align items vertically */}
      <div className="relative">
        {/* Needed for styling the fake checkbox */}
        <input
          type="checkbox"
          id="publish-toggle"
          className="hidden peer" //{/* Hide the default checkbox */}
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className="w-6 h-6 bg-white border border-gray-300 rounded-md 
                        peer-checked:bg-blue-500 peer-checked:border-blue-500
                        flex items-center justify-center cursor-pointer"
          //   htmlFor="publish-toggle"
        >
          {/* Make the div clickable */}
          {isChecked && ( // Conditionally render the checkmark SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414l3.293 3.293 7.707-7.707a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <label
        htmlFor="publish-toggle"
        className="ml-2 text-gray-700 cursor-pointer"
      >
        {label}
        {/* Show this section when Published */}
      </label>
    </div>
  );
}

// export default PublishSectionToggle;
