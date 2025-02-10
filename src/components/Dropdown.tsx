import React, { useEffect, useRef, useState } from 'react';


interface DropdownProps {
    options: string[];
    trigger: React.ReactNode; // Changed to trigger and type React.ReactNode
  }
export const Dropdown:  React.FC<DropdownProps>  = ({ options, trigger }) => {
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
      <div onClick={toggleDropdown} className="cursor-pointer"> {/* Example div trigger */}
        {trigger} {/* Render the trigger prop */}
      </div>

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

