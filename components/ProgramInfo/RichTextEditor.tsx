"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "./EditorHeader";
import NavigationButtons from "./NavigationButtons";
import Section from "./EditorSection";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { SlArrowUp } from "react-icons/sl";
import toast from "react-hot-toast";

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PostDropdown = ({ isOpen, setIsOpen }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  const onEditSuccess = () => {
    toast.success("Content successfully edited");
    setIsOpen(false);
  };

  const onDelSuccess = () => {
    toast.success("Content successfully deleted");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <PiDotsThreeOutlineVerticalThin className="w-6 h-6 text-[#777795] dark:text-[#A0A0A0]" />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-30 rounded-lg bg-white dark:bg-[#1C1C2D] 
                   shadow-lg z-10  dark:border-gray-700"
        >
          <button
            onClick={onEditSuccess}
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 
                     dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Edit
          </button>
          <button
            onClick={onDelSuccess}
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 
                     dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export const RichTextEditor = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleDropdown = (id: number) => {
    setDropdownOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [sections, setSections] = useState([
    { id: 1, content: "", isVisible: true },
  ]);

  const addSection = () => {
    if (sections.length < 3) {
      setSections([
        ...sections,
        { id: sections.length + 1, content: "", isVisible: true },
      ]);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-6 max-w-7xl">
      <Header />

      <h1 className="text-3xl font-bold text-[#1C1D4E] dark:text-[#F0F0F0] mb-4">
        Program Information
      </h1>

      <p className="text-sm text-text mb-6">Describe Section Title</p>

      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          isVisible={section.isVisible}
          onVisibilityChange={(checked) => {
            const newSections = sections.map((s) =>
              s.id === section.id ? { ...s, isVisible: checked } : s
            );
            setSections(newSections);
          }}
        />
      ))}

      {sections.length < 3 && (
        <div className="mt-6 w-full mb-16">
          <button
            onClick={addSection}
            className="w-full p-4 border border-black rounded-lg hover:bg-gray-50 
                     dark:border-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="text-base font-medium text-center text-slate-600 dark:text-slate-300">
              + Add new section
            </p>
            <p className="mt-2 text-xs italic text-slate-500">
              (maximum number of sections to add is 3)
            </p>
          </button>
        </div>
      )}
      {[1, 2].map((id) => (
        <div
          key={id}
          className="flex gap-10 justify-between items-center px-4 py-3 mt-2 w-full rounded-lg border border-solid bg-zinc-100 border-[color:var(--Grey-Grey-4,#C2C2C2)] max-md:max-w-full"
        >
          <h2 className="self-stretch my-auto text-base font-medium text-indigo-950">
            Program Information Text {id}
          </h2>
          <div className="flex gap-3 items-center self-stretch my-auto">
            <SlArrowUp className="self-stretch text-[#777795] dark:text-[#A0A0A0] my-auto w-5 h-5" />

            {/* Three Dots Button with unique dropdown state */}
            <PostDropdown
              isOpen={dropdownOpen[id] || false}
              setIsOpen={() => toggleDropdown(id)}
            />
          </div>
        </div>
      ))}

      <NavigationButtons />
    </div>
  );
};

export default RichTextEditor;
