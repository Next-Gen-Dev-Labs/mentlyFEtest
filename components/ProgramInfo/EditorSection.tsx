// src/components/RichTextEditor/components/Section.tsx
"use client";

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Type } from "lucide-react";
import { PiWarningCircle } from "react-icons/pi";
import { MenuBar } from "./MenuBar";

interface SectionProps {
  id: number;
  isVisible: boolean;
  onVisibilityChange: (checked: boolean) => void;
}

const InfoMessage = ({ message }: { message: string }) => (
  <div className="flex gap-2 px-2 py-2 mt-3 w-full bg-[#CEE1FB] rounded-sm">
    <PiWarningCircle className="text-[#086BED] w-5 h-5" />
    <span className="text-xs text-text">{message}</span>
  </div>
);

const TitleInput = () => (
  <div className="w-full">
    <div
      className="flex overflow-hidden dark:bg-[#24243B] gap-6 px-6 py-4 
                   w-full rounded-md border border-solid border-[#1F0954]"
    >
      <div className="flex gap-3 items-center">
        <div className="p-1 border-2 border-dashed dark:border-white border-[#1F0954]">
          <Type className="w-6 h-6 text-black dark:text-white" />
        </div>
      </div>
      <input
        type="text"
        placeholder="Describe Section Title e.g What you stand to learn"
        className="flex-auto text-sm text-text dark:text-white bg-transparent 
                 outline-none w-full"
      />
    </div>
  </div>
);

const AIButton = () => (
  <button
    className="flex gap-1 items-center py-2 px-3 rounded-lg 
                   bg-[#A100FF] bg-opacity-10 hover:bg-opacity-20 transition-all"
  >
    <img src="/images/icon/ai.png" alt="ai-icon" className="w-4 h-4" />
    <span className="text-[#8C00E3] text-xs font-medium">Write with AI</span>
  </button>
);

export const Section = ({
  id,
  isVisible,
  onVisibilityChange,
}: SectionProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Image,
      Link,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "p-4 min-h-[200px] outline-none prose dark:prose-invert max-w-none",
        placeholder: "Input text here...",
      },
    },
  });

  return (
    <div className="mb-6 space-y-4">
      <TitleInput />
      <InfoMessage message="Provide your preferred title for this section" />

      <div
        className="overflow-hidden dark:bg-[#24243B] pb-2 w-full rounded-md 
                    shadow-md border border-solid border-[#1F0954]"
      >
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />

        <div className="flex justify-between items-center px-4 py-2">
          <AIButton />
        </div>
      </div>

      <InfoMessage message="Provide a clear and concise description of your program." />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => onVisibilityChange(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-indigo-600 
                   focus:ring-indigo-500"
          id={`section-visibility-${id}`}
        />
        <label
          htmlFor={`section-visibility-${id}`}
          className="text-sm text-zinc-800 dark:text-zinc-200"
        >
          Show this section when Published
        </label>
      </div>
    </div>
  );
};

export default Section;
