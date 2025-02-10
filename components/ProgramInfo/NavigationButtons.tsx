// src/components/RichTextEditor/components/NavigationButtons.tsx
"use client";

import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

export const NavigationButtons = () => {
  const handleGoBack = () => {
    console.log("Going back...");
    // Add your navigation logic here
  };

  const handleSaveAndProceed = () => {
    console.log("Saving and proceeding...");
    // Add your save and navigation logic here
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center 
                   justify-center mt-10 max-w-[468px] mx-auto"
    >
      <button
        onClick={handleGoBack}
        className="text-base font-bold text-gray-400 hover:text-gray-500 
                 transition-colors"
      >
        Go Back
      </button>

      <button
        onClick={handleSaveAndProceed}
        className="flex gap-3 justify-center items-center px-10 py-4 
                 text-white rounded-lg bg-[#1F0954] dark:bg-[#24243B]
                 hover:opacity-90 transition-opacity font-bold w-full sm:w-auto"
      >
        <span>Save & Proceed</span>
        <RiArrowDownSFill className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NavigationButtons;
