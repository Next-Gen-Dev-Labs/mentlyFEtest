import React from "react";
export default function Switch({ isOn, handleToggle }) {
  return (
    <div
      role="switch"
      aria-checked={isOn}
      onClick={handleToggle}
      className={`w-10 h-4 flex items-center bg-white rounded-full p-0.5  cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-blue-500' : 'bg-gray-300'
      }`}
      tabIndex={0} // Make it keyboard focusable
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          handleToggle();
        }
      }}
      
    >
      <div
        className={`bg-[#1F0954] w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </div>
  );
};


