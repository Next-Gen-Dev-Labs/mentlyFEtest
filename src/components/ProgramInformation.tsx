"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Bold,
  Italic,
  Underline,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Quote,
  Smile,
  ChevronDown,
  Plus,
  Info,
  ArrowLeft,
} from "lucide-react";
import { RiShareForwardLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Setting2 } from "iconsax-react";
import { IoMdArrowDropdown } from "react-icons/io";
import CustomAccordion from "@/components/Accordion";

export default function ProgramInformation() {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState(
    "Describe Section Title e.g What you stand to learn"
  );

  return (
    <div className="w-full md:max-w-[532px] h-auto top-[90px] border rounded-[4px] mx-auto p-4 md:p-6">
    <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b">
      <div className="flex items-center gap-2 text-yellow-500 text-sm cursor-pointer">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <Setting2 size={18} color="grey" />
          <div className="flex items-center gap-1 text-sm">
            <IoCopyOutline />
          </div>
        </div>

        <Button className="bg-[#2E1E64] text-white px-4 py-2 rounded-full flex items-center gap-2">
          <RiShareForwardLine size={16} />
          Share
        </Button>
      </div>

      <h1 className="font-chivo font-bold text-[#0B0D34] text-2xl md:text-3xl lg:text-4xl leading-tight">
        Program Information
      </h1>
      <p className="text-gray-500 text-sm">Describe Section Title</p>

      <div className="space-y-4 mt-5">
        <div className="border rounded-lg flex items-center px-3 py-2 space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <div className="flex items-center gap-1">
                <div className="border-dashed border-2 p-1 rounded">
                  <Type size={16} />
                </div>
                <ChevronDown size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setSelectedOption("Describe Section Title e.g What you stand to learn")}>
                Option 1
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedOption("Another Title Option")}>
                Option 2
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input className="border-0 focus:ring-0 w-full" value={selectedOption} readOnly />
        </div>

        <div className="mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
          <Info size={16} />
          <p>
            Provide your preferred title for this section i.e What&apos;s in this Program for you?
          </p>
        </div>

        <div className="w-full border-2 rounded-lg p-2">
          <div className="flex items-center justify-between border-b border-gray-300 p-2">
            <button className="p-2 border border-purple-800 rounded-md text-purple-800">
              <Type size={20} />
            </button>
            <div className="flex space-x-2">
              {[Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Quote, Smile].map(
                (Icon, index) => (
                  <button key={index} className="p-2 hover:bg-gray-200 rounded-md">
                    <Icon size={18} />
                  </button>
                )
              )}
            </div>
          </div>

          <textarea
            className="w-full h-30 p-2 text-gray-700 focus:outline-none focus:ring-2"
            placeholder="Input Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(128, 0, 128, 0.8)" }}
            className="mt-2 bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-md flex items-center space-x-2"
          >
            <span className="text-2xl">✨</span>
            <span>Write with May</span>
          </motion.button>
        </div>

        <div className="mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
          <Info size={16} />
          <p>
            Provide a clear and concise description of your program, including objectives, goals, necessary resources, or specific instructions.
          </p>
        </div>

        <div className="mt-4 border rounded-lg px-3 py-3 text-center text-gray-700 text-sm cursor-pointer hover:bg-gray-50">
          <Plus size={16} className="inline mr-2" /> Add new section
          <p className="text-xs text-gray-500">(Maximum number of sections: 3)</p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input type="checkbox" id="showSection" className="rounded border-gray-400" />
          <label htmlFor="showSection" className="text-sm">Show this section when Published</label>
        </div>

        <CustomAccordion />

        <div className="flex justify-between">
          <Button variant="ghost" className="text-gray-500">Go Back</Button>
          <Button className="bg-[#1F0954] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Save & Proceed <IoMdArrowDropdown size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
