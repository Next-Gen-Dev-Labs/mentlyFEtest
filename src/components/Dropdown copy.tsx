import React, { useEffect, useRef, useState } from 'react';

export const Dropdown = ({ options }:{options: any[]}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownRef = useRef(null); // Create a ref

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setIsOpen(false); // Close if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up
    };
  }, [dropdownRef]); // Add dropdownRef to the dependency array


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block" ref={dropdownRef} >
      {/* Button to trigger dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>{selectedOption || 'Select an option'}</span> {/* Display selected or placeholder */}
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-1"> {/* Increased z-index */}
          <ul className="py-2 text-sm text-gray-700">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

