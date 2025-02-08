import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, ChevronDown } from "lucide-react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Type,
  Link,
  AlignJustify,
  Quote,
} from "lucide-react";

const buttons = [
  { icon: Type, label: "Text" },
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: "/smallcaps.svg", label: "smallcaps" },
  { icon: AlignLeft, label: "Align Left" },
  { icon: AlignRight, label: "Align Right" },
  { icon: AlignCenter, label: "Center" },
  { icon: AlignJustify, label: "justify" },
  { icon: List, label: "List" },
  { icon: "/quote-up.svg", label: "quote" },
  { icon: Quote, label: "quote" },
  { icon: "/math.svg", label: "math" },
  { icon: "/gallery.svg", label: "gallary" },
  { icon: Link, label: "Link" },
];

export function TextEditor() {
  return (
    <div className="relative w-full border border-purple-900 rounded-md my-2 p-2 text-gray-300">
      <div className="flex items-center border-b border-purple-900 pb-2 mb-2">
        <button className="flex items-center gap-1 border border-purple-900 rounded-md lg:px-3 lg:py-2 px-2 py-1">
          <FileText className="lg:w-4 lg:h-4 w-3 h-3 text-[#1F0954] dark:text-purple-900 " />
          <ChevronDown className="lg:w-4 lg:h-4 w-3 h-3 text-[#1F0954] dark:text-purple-900" />
        </button>
        <div className="flex items-center pl-1 lg:pl-0 lg:gap-2 gap-1 lg:px-1  text-gray-400">
          {buttons.map((Button, index) => (
            <button
              key={index}
              className=" hover:bg-gray-200 rounded-md transition-colors"
              title={Button.label}
            >
              {typeof Button.icon === "string" ? (
                <Image
                  src={Button.icon}
                  alt={Button.label}
                  width={10}
                  height={10}
                />
              ) : (
                <Button.icon className="w-3 h-3 text-gray-700 hover:text-white" />
              )}{" "}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        <textarea
          placeholder="Input Text"
          className="w-full rounded-lg border border-purple-900 bg-transparent px-4 py-2 text-black focus:outline-none placeholder:text-gray-500"
          rows={4}
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="absolute bottom-3 left-2 flex items-center bg-purple-200 p-1 rounded gap-2 text-purple-600 hover:text-orange-700 transition-colors"
        >
          <Image src="/ai.svg" alt="hel pdesk" width={15} height={15} />
          <span className="text-[10px]">Write with AI</span>
        </motion.button>
      </div>
    </div>
  );
}
