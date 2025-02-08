"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronDown,
  Share2,
  AlignLeft,
  AlignRight,
  AlignCenter,
  AlignJustify,
  Type,
  Italic,
  Underline,
  Bold,
  List,
  Image,
  Link,
  Copy,
  KeyboardOff,
  Languages,
  CloudUpload,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iconArray = [
  <Type />,
  <Bold />,
  <Italic />,
  <Underline />,
  <AlignLeft />,
  <AlignRight />,
  <AlignCenter />,
  <AlignJustify />,
  <Languages />,
  <KeyboardOff />,
  <Copy />,
  <List />,
  <Image />,
  <Link />,
];

export default function ProgramEditor() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <a href="#" className="text-orange-500 flex items-center gap-2">
          <ChevronDown className="w-4 h-4 rotate-90" />
          Back to Home
        </a>
        <div className="flex items-center gap-2">
          <button className="p-2 mt-1.5 hover:bg-gray-100 rounded-full">
            <span>
              <svg
                width="35"
                height="30"
                viewBox="0 0 35 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
                  stroke="#C2C2C2"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 13.38V11.62C2 10.58 2.85 9.72 3.9 9.72C5.71 9.72 6.45 8.44 5.54 6.87C5.02 5.97 5.33 4.8 6.24 4.28L7.97 3.29C8.76 2.82 9.78 3.1 10.25 3.89L10.36 4.08C11.26 5.65 12.74 5.65 13.65 4.08L13.76 3.89C14.23 3.1 15.25 2.82 16.04 3.29L17.77 4.28C18.68 4.8 18.99 5.97 18.47 6.87C17.56 8.44 18.3 9.72 20.11 9.72C21.15 9.72 22.01 10.57 22.01 11.62V13.38C22.01 14.42 21.16 15.28 20.11 15.28C18.3 15.28 17.56 16.56 18.47 18.13C18.99 19.04 18.68 20.2 17.77 20.72L16.04 21.71C15.25 22.18 14.23 21.9 13.76 21.11L13.65 20.92C12.75 19.35 11.27 19.35 10.36 20.92L10.25 21.11C9.78 21.9 8.76 22.18 7.97 21.71L6.24 20.72C5.33 20.2 5.02 19.03 5.54 18.13C6.45 16.56 5.71 15.28 3.9 15.28C2.85 15.28 2 14.42 2 13.38Z"
                  stroke="#C2C2C2"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <button className="p-2  hover:bg-gray-100 rounded-full">
            <span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.10828 11.5C6.10828 8.672 6.10828 7.257 7.00314 6.379C7.89699 5.5 9.33752 5.5 12.2166 5.5H15.2707C18.1497 5.5 19.5903 5.5 20.4841 6.379C21.379 7.257 21.379 8.672 21.379 11.5V16.5C21.379 19.328 21.379 20.743 20.4841 21.621C19.5903 22.5 18.1497 22.5 15.2707 22.5H12.2166C9.33752 22.5 7.89699 22.5 7.00314 21.621C6.10828 20.743 6.10828 19.328 6.10828 16.5V11.5Z"
                  stroke="#C2C2C2"
                  stroke-width="1.5"
                />
                <path
                  d="M6.10828 19.5C5.29827 19.5 4.52144 19.1839 3.94868 18.6213C3.37591 18.0587 3.05414 17.2956 3.05414 16.5V10.5C3.05414 6.729 3.05414 4.843 4.24729 3.672C5.43942 2.5 7.35946 2.5 11.1985 2.5H15.2707C16.0807 2.5 16.8575 2.81607 17.4303 3.37868C18.0031 3.94129 18.3248 4.70435 18.3248 5.5"
                  stroke="#C2C2C2"
                  stroke-width="1.5"
                />
              </svg>
            </span>
          </button>
          <Button variant="default" className="bg-[#1F0954] py-0 rounded-full">
            <span>
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2771 5.82528L9.91966 0.23509C9.84478 0.156863 9.74934 0.103565 9.64542 0.0819363C9.54151 0.0603078 9.43378 0.0713201 9.33586 0.113581C9.23794 0.155841 9.15423 0.227451 9.09532 0.319355C9.03641 0.411259 9.00494 0.519329 9.00489 0.629897V3.44945C7.26775 3.60458 5.34914 4.49202 3.77072 5.88887C1.87018 7.57152 0.686871 9.73981 0.438422 11.9941C0.419007 12.1693 0.453062 12.3465 0.535742 12.5004C0.618421 12.6543 0.745512 12.777 0.898928 12.8512C1.05234 12.9254 1.22427 12.9471 1.39023 12.9134C1.55619 12.8797 1.70774 12.7923 1.82331 12.6635C2.55995 11.8452 5.18105 9.25766 9.00489 9.02986V11.8103C9.00494 11.9208 9.03641 12.0289 9.09532 12.1208C9.15423 12.2127 9.23794 12.2843 9.33586 12.3266C9.43378 12.3689 9.54151 12.3799 9.64542 12.3582C9.74934 12.3366 9.84478 12.2833 9.91966 12.2051L15.2771 6.61489C15.3772 6.5101 15.4335 6.36811 15.4335 6.22009C15.4335 6.07206 15.3772 5.93008 15.2771 5.82528ZM10.0764 10.4609V8.45616C10.0764 8.3079 10.0199 8.16571 9.91945 8.06088C9.81898 7.95604 9.68271 7.89714 9.54063 7.89714C7.66018 7.89714 5.82863 8.40934 4.09685 9.42047C3.21486 9.93774 2.39308 10.5596 1.64785 11.2736C2.03626 9.60774 3.01533 8.02362 4.46383 6.74137C6.01881 5.36549 7.91667 4.54303 9.54063 4.54303C9.68271 4.54303 9.81898 4.48413 9.91945 4.3793C10.0199 4.27446 10.0764 4.13227 10.0764 3.98401V1.97993L14.1406 6.22009L10.0764 10.4609Z"
                  fill="white"
                />
              </svg>
            </span>
            Share
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <h1 className="text-3xl font-extrabold mb-2 text-[#1f0954]">
          Program Information
        </h1>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Describe Section Title
            </label>
            <div className="flex gap-2 border border-[#1f0954] p-2 rounded-lg">
              <span className="w-6 h-6">📝</span>
              <input
                type="text"
                placeholder="Describe Section Title e.g What you stand to learn"
                className="flex-1 outline-none"
              />
            </div>
          </div>

          <div className="bg-blue-50 flex gap-1 leading-none px-4 py-2 font-light rounded-lg text-sm text-blue-600">
            <span className="items-center flex">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0427 22C17.5545 22 22.0641 17.5 22.0641 12C22.0641 6.5 17.5545 2 12.0427 2C6.53098 2 2.02136 6.5 2.02136 12C2.02136 17.5 6.53098 22 12.0427 22Z"
                  stroke="#086BED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0427 8V13"
                  stroke="#086BED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0372 16H12.0462"
                  stroke="#086BED"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Provide your preferred title for this section i.e What's in this
            Program for you?
          </div>

          {/* Rich Text Editor */}
          <div className="border border-[#1f0954] rounded-lg">
            <div className="border-b border-[#1f0954] p-3 flex gap-2 justify-between">
              <span className="px-4 flex gap-4">
                <CloudUpload />
                <ChevronDown />
              </span>
              {iconArray.map((icon, i) => (
                <button
                  key={i}
                  className="w-4 h-4 flex gap-2   hover:bg-gray-100 rounded"
                >
                  {icon}
                </button>
              ))}
            </div>
            <input
              className="p-1 outline-none min-w-[28.5rem]  min-h-[100px]"
              type="text"
              placeholder="Describe Section Title e.g What you stand to learn"
            />
          </div>

          <div className="bg-blue-50 flex gap-1 leading-none px-4 py-2 font-light rounded-lg text-sm text-blue-600 ">
            <span className="items-center flex">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0427 22C17.5545 22 22.0641 17.5 22.0641 12C22.0641 6.5 17.5545 2 12.0427 2C6.53098 2 2.02136 6.5 2.02136 12C2.02136 17.5 6.53098 22 12.0427 22Z"
                  stroke="#086BED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0427 8V13"
                  stroke="#086BED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0372 16H12.0462"
                  stroke="#086BED"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Provide a clear and concise description/information of your program.
            This can include objectives, goals, necessary resources, or any
            specific requirements.
          </div>

          {/* Section Controls */}
          <div className="space-y-4">
            <button className="w-full flex flex-col items-center  text-[#1f0954] px-4 py-2 border border-[#1f0954] rounded-lg hover:bg-gray-50">
              + Add new section
              <span className="text-sm font-extralight">
                (Maximum number of section to add is 3)
              </span>
            </button>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="show-published" />
              <label htmlFor="show-published" className="text-sm">
                Show this section when Published
              </label>
            </div>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1f0954] font-semibold">
                Program Information Text 1
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#1f0954] font-semibold">
                Program Information Text 2
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4">
            <Button variant="ghost">Go Back</Button>
            <Button className="bg-[#1F0954]">Save & Proceed</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
