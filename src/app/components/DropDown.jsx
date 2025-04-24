"use client"
import { useState } from 'react';


import { ChevronDown } from 'lucide-react';

export default function Dropdown({ label = "Filter:", options = ["Active", "Inactive", "All"], defaultValue = "Active", onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative font-sans">
      <div className="flex items-center space-x-2">
        {label && <span className="text-sm text-gray-600">{label}</span>}
        <div
          className="flex items-center justify-between  px-3 py-1 bg-white border border-gray-300 rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm text-gray-800">{selectedOption}</span>
          <ChevronDown size={16} className={`ml-2 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  option === selectedOption ? 'bg-gray-50 font-medium' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}