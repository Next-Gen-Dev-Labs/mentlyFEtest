"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUp2,
  Setting2,
  More,
  ArrowDown2,
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignLeft,
  TextalignCenter,
  TextalignRight,
  TextBlock,
  Document,
  Link21,
  Gallery,
  InfoCircle,
  ArrowLeft2,
  Copy,
  Share,
  Task,
  TextalignJustifycenter,
  Smallcaps,
  Text,
  QuoteDown,
  QuoteUp,
  Refresh,
  Math,
} from "iconsax-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const formatButtons = [
  { name: "text", label: "Text", icon: Text },
  { name: "bold", label: "Bold", icon: TextBold },
  { name: "italic", label: "Italic", icon: TextItalic },
  { name: "underline", label: "Underline", icon: TextUnderline },
  // { name: "strikethrough", label: "Strikethrough", icon: Strikethrough },
  { name: "smallcaps", label: "Small Caps", icon: Smallcaps },
  { name: "task", label: "Task", icon: Task },
  { name: "textalign-left", label: "Align Left", icon: TextalignLeft },
  { name: "textalign-center", label: "Align Center", icon: TextalignCenter },
  { name: "textalign-right", label: "Align Right", icon: TextalignRight },
  {
    name: "textalign-justifycenter",
    label: "Justify Center",
    icon: TextalignJustifycenter,
  },
  { name: "quote-up", label: "Blockquote Close", icon: QuoteUp },
  { name: "quote-down", label: "Blockquote Open", icon: QuoteDown },
  { name: "math", label: "Math", icon: Math },
  { name: "gallery", label: "Insert Image", icon: Gallery },
  { name: "link ", label: "Link", icon: Link21 },
];
export function ProgramEditor() {
  const [sections, setSections] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleFormatClick = (action: string) => {
    // Handle different formatting actions
    switch (action) {
      case "bold":
        document.execCommand("bold", false);
        break;
      case "italic":
        document.execCommand("italic", false);
        break;
      case "underline":
        document.execCommand("underline", false);
        break;
      case "alignLeft":
        document.execCommand("justifyLeft", false);
        break;
      case "alignCenter":
        document.execCommand("justifyCenter", false);
        break;
      case "alignRight":
        document.execCommand("justifyRight", false);
        break;
      case "bulletList":
        document.execCommand("insertUnorderedList", false);
        break;
      case "numberedList":
        document.execCommand("insertOrderedList", false);
        break;
      // Add other cases as needed
    }
  };

  return (
    <main role="main" aria-label="Program Editor">
      <div className="flex items-center justify-between gap-4 py-6 md:py-1 px-4">
        <Link
          href="/"
          className="text-[#FFA500] text-[16px] hover:text-[#FFA500]/90 flex items-center gap-2"
          aria-label="Back to Home"
        >
          <ArrowLeft2 className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <div
          className="flex items-center gap-4"
          role="toolbar"
          aria-label="Editor controls"
        >
          <div className="flex flex-col items-center">
            <DropdownMenu onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Setting2
                  size={24}
                  className="cursor-pointer"
                  role="button"
                  aria-label="Settings"
                  color="#C2C2C2"
                  aria-hidden="true"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuItem>Open</DropdownMenuItem>
                <DropdownMenuItem>Clear</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Copy
                    size={24}
                    className="cursor-pointer"
                    color="#C2C2C2"
                    aria-hidden="true"
                    aria-label="Copy to clipboard"
                    role="button"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to Clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button
            className=" bg-[#1F0954] hover:bg-[#37205F]/90 text-white flex items-center gap-2 rounded-full px-6"
            aria-label="Share program"
          >
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15.2771 5.82528L9.91966 0.23509C9.84478 0.156863 9.74934 0.103565 9.64542 0.0819363C9.54151 0.0603078 9.43378 0.0713201 9.33586 0.113581C9.23794 0.155841 9.15423 0.227451 9.09532 0.319355C9.03641 0.411259 9.00494 0.519329 9.00489 0.629897V3.44945C7.26775 3.60458 5.34914 4.49202 3.77072 5.88887C1.87018 7.57152 0.686871 9.73981 0.438422 11.9941C0.419007 12.1693 0.453062 12.3465 0.535742 12.5004C0.618421 12.6543 0.745512 12.777 0.898928 12.8512C1.05234 12.9254 1.22427 12.9471 1.39023 12.9134C1.55619 12.8797 1.70774 12.7923 1.82331 12.6635C2.55995 11.8452 5.18105 9.25766 9.00489 9.02986V11.8103C9.00494 11.9208 9.03641 12.0289 9.09532 12.1208C9.15423 12.2127 9.23794 12.2843 9.33586 12.3266C9.43378 12.3689 9.54151 12.3799 9.64542 12.3582C9.74934 12.3366 9.84478 12.2833 9.91966 12.2051L15.2771 6.61489C15.3772 6.5101 15.4335 6.36811 15.4335 6.22009C15.4335 6.07206 15.3772 5.93008 15.2771 5.82528ZM10.0764 10.4609V8.45616C10.0764 8.3079 10.0199 8.16571 9.91945 8.06088C9.81898 7.95604 9.68271 7.89714 9.54063 7.89714C7.66018 7.89714 5.82863 8.40934 4.09685 9.42047C3.21486 9.93774 2.39308 10.5596 1.64785 11.2736C2.03626 9.60774 3.01533 8.02362 4.46383 6.74137C6.01881 5.36549 7.91667 4.54303 9.54063 4.54303C9.68271 4.54303 9.81898 4.48413 9.91945 4.3793C10.0199 4.27446 10.0764 4.13227 10.0764 3.98401V1.97993L14.1406 6.22009L10.0764 10.4609Z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden md:flex">Share</span>
          </Button>
        </div>
      </div>
      <div className="text-[12px] text-[#809FB8] px-4 block md:hidden">
        13th February 2024, 12:15 PM
        <span className="text-[#809FB8] text-xs ml-1">(Local time)</span>
      </div>
      <div className="max-w-4xl mx-auto p-2 md:p-4">
        <section aria-label="Program Information">
          <h1 className="text-[32px] text-[#06152B] font-bold">
            Program Information
          </h1>
          <span className="text-[14px] text-[#828282]">
            Describe Section Title
          </span>

          <div className="relative py-4">
            <div className="flex items-center border border-[#1F0954] rounded-lg p-3">
              <div className="p-2" aria-hidden="true">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 0H0V6.22222H1.77778V1.77778H6.22222V0ZM9.77778 1.77778V0H14.2222V1.77778H9.77778ZM17.7778 1.77778H22.2222V0H17.7778V1.77778ZM25.7778 0V1.77778H30.2222V6.22222H32V0H25.7778ZM32 9.77778H30.2222V14.2222H32V9.77778ZM32 17.7778H30.2222V22.2222H32V17.7778ZM32 25.7778H30.2222V30.2222H25.7778V32H32V25.7778ZM22.2222 32V30.2222H17.7778V32H22.2222ZM14.2222 32V30.2222H9.77778V32H14.2222ZM6.22222 32V30.2222H1.77778V25.7778H0V32H6.22222ZM0 22.2222H1.77778V17.7778H0V22.2222ZM0 14.2222H1.77778V9.77778H0V14.2222ZM14.2222 11.5556H7.11111V8H24.8889V11.5556H17.7778V24H14.2222V11.5556Z"
                    fill="#1F0954"
                  />
                </svg>
              </div>
              <ArrowDown2 variant="Bold" size={32} aria-hidden="true" />
              <Input
                placeholder="Describe Section Title e.g What you stand to learn"
                className="border-0 focus:border-0 focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none bg-transparent"
                aria-label="Section title"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-[12px] text-[#777795] flex items-center gap-2">
              <InfoCircle color="#086BED" />
              Provide your prefered title for this section i.e What's in this
              Program for you?
            </p>
          </div>
          <div className="border rounded-md p-2 mb-4">
            <div className="flex items-center justify-between gap-1 border-b pb-2 mb-2">
              <div className="gap-4 w-[104px] h-[32px]  border-e-2 flex items-center justify-center">
                <Document size={24} variant="Outline" />
                <ArrowDown2 variant="Bold" size={18} aria-hidden="true" />
              </div>

              <Separator orientation="vertical" className="text-red-800"/>

              {formatButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    aria-label={button.label}
                  >
                    <Icon className="h-12 w-12 text-[#292D32]" />
                    <span className="sr-only">{button.label}</span>
                  </Button>
                );
              })}
            </div>
            <Textarea
              className="w-full h-[134px] text-[#828282] resize-none border-0 focus:border-0 focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none bg-transparent p-2"
              placeholder="| Input Text"
            />
            <div className="mt-2">
              <Button
                variant="ghost"
                className="text-[#8C00E3] bg-[#A100FF21] text-[10px] px-3 rounded-lg flex items-center gap-2"
              >
                <span className="text-[#8C00E3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.131 1.717C10.223 1.7075 10.3158 1.72368 10.3991 1.76375C10.4824 1.80383 10.553 1.86622 10.603 1.944L10.642 2.007L10.6965 2.108L10.737 2.195L10.7785 2.2975C10.936 2.7165 11.0545 3.446 10.5075 4.2755C10.4665 4.33681 10.4203 4.39452 10.3695 4.448C10.376 4.50973 10.3709 4.57213 10.3545 4.632C10.2549 4.99641 10.1296 5.3533 9.97951 5.7C9.70401 6.3315 9.31551 6.97 8.76801 7.518C7.74301 8.543 6.39701 9.0135 5.34601 9.233C4.93351 9.3195 4.55801 9.3685 4.25301 9.3965L4.00951 9.4155L3.90451 9.422L3.84051 9.9535L3.79151 10.4065L3.77251 10.6125L3.75401 10.8715C3.75157 10.9143 3.75024 10.9571 3.75001 11C3.75001 11.1326 3.69733 11.2598 3.60356 11.3536C3.50979 11.4473 3.38261 11.5 3.25001 11.5C3.1174 11.5 2.99022 11.4473 2.89645 11.3536C2.80268 11.2598 2.75001 11.1326 2.75001 11C2.75001 10.9477 2.75167 10.8877 2.75501 10.82L2.77001 10.6015L2.79151 10.357L2.83151 9.971L2.86051 9.72C2.96301 8.854 3.08351 8.007 3.35401 7.175C3.66651 6.215 4.22901 4.9855 5.23251 3.9825C6.01901 3.1955 6.94851 2.677 7.78551 2.3375L8.01151 2.249L8.23151 2.169C8.26751 2.15633 8.30334 2.14417 8.33901 2.1325L8.54901 2.0645L8.75001 2.0045L8.94201 1.951L9.12351 1.9045L9.29351 1.8645L9.45101 1.8295L9.72401 1.777L10.0125 1.7315L10.131 1.717ZM9.88001 2.765L9.71901 2.796L9.53401 2.8355L9.32651 2.8845L9.21551 2.9135L8.98051 2.9785C8.89917 3.0025 8.81567 3.0285 8.73001 3.0565L8.46651 3.1465C7.65901 3.4385 6.71251 3.9165 5.93951 4.6895C5.08751 5.541 4.58951 6.6095 4.30501 7.4845C4.22251 7.738 4.15851 7.973 4.11001 8.1785L4.05801 8.4095L4.29051 8.388C4.57625 8.35791 4.86028 8.31335 5.14151 8.2545C6.10151 8.054 7.23101 7.6405 8.06051 6.8105C8.48551 6.386 8.80251 5.882 9.03751 5.358C8.54951 5.618 8.02851 5.851 7.65801 5.9745C7.53216 6.0164 7.39482 6.0066 7.27621 5.94725C7.15759 5.88789 7.06741 5.78385 7.02551 5.658C6.9836 5.53215 6.99341 5.39482 7.05276 5.2762C7.11212 5.15758 7.21616 5.0674 7.34201 5.0255C7.67901 4.9135 8.22101 4.669 8.71901 4.393C8.96601 4.256 9.19201 4.117 9.36951 3.989L9.48251 3.904L9.56751 3.8335L9.60001 3.8035L9.64751 3.756L9.67251 3.7245C9.93601 3.3255 9.93251 2.9845 9.88001 2.765ZM2.50001 1C2.59355 1 2.68521 1.02624 2.76458 1.07574C2.84395 1.12523 2.90785 1.196 2.94901 1.28L2.97301 1.3385L3.03801 1.5275C3.10661 1.72859 3.21715 1.91282 3.3623 2.06797C3.50746 2.22313 3.68392 2.34568 3.88001 2.4275L3.97251 2.4625L4.16151 2.527C4.25507 2.55899 4.33706 2.618 4.39709 2.69658C4.45712 2.77516 4.4925 2.86977 4.49876 2.96846C4.50503 3.06714 4.48188 3.16547 4.43227 3.25101C4.38265 3.33654 4.30878 3.40544 4.22001 3.449L4.16151 3.473L3.97251 3.538C3.77141 3.6066 3.58719 3.71714 3.43203 3.8623C3.27688 4.00745 3.15433 4.18392 3.07251 4.38L3.03751 4.4725L2.97301 4.6615C2.94102 4.75507 2.88201 4.83705 2.80343 4.89708C2.72485 4.95711 2.63024 4.9925 2.53155 4.99876C2.43286 5.00502 2.33454 4.98188 2.249 4.93226C2.16346 4.88264 2.09456 4.80878 2.05101 4.72L2.02701 4.6615L1.96201 4.4725C1.89341 4.27141 1.78287 4.08718 1.63771 3.93203C1.49255 3.77687 1.31609 3.65432 1.12001 3.5725L1.02751 3.5375L0.838506 3.473C0.744937 3.44101 0.662955 3.382 0.602924 3.30342C0.542893 3.22484 0.507509 3.13023 0.501248 3.03154C0.494986 2.93286 0.518128 2.83453 0.567746 2.74899C0.617364 2.66346 0.691231 2.59456 0.780006 2.551L0.838506 2.527L1.02751 2.462C1.2286 2.3934 1.41282 2.28286 1.56798 2.1377C1.72313 1.99255 1.84568 1.81608 1.92751 1.62L1.96251 1.5275L2.02701 1.3385C2.06069 1.23979 2.12441 1.15409 2.20922 1.09339C2.29404 1.0327 2.39571 1.00004 2.50001 1ZM2.50001 2.598C2.38173 2.74685 2.24686 2.88172 2.09801 3C2.24734 3.11833 2.38134 3.25233 2.50001 3.402C2.61834 3.25267 2.75234 3.11867 2.90201 3C2.75316 2.88172 2.61828 2.74685 2.50001 2.598Z"
                      fill="#8C00E3"
                    />
                  </svg>
                </span>
                Write with May
              </Button>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-[12px] text-[#777795] flex items-center gap-2">
              <InfoCircle color="#086BED" />
              Provide a clear and concise description/information of your
              program. This can include objectives, goals, necessary resources,
              or any specific instructions.
            </p>
          </div>
        </section>

        <div className="rounded-lg border border-[#000] flex flex-col items-center justify-center mb-4 text-center h-[93px] cursor-pointer">
          <span className="text-[#494A71] hover:text-[#494A71] text-[16px] font-semibold">
            + Add new section
          </span>
          <div className="text-[12px] text-[#777795] mt-1">
            (maximum number of sections to add is 3)
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Show this section when Published</Label>
        </div>

        <div className="space-y-2 mb-8 py-16">
          <Accordion type="single" collapsible className="space-y-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <div className="bg-[#F1F1F1] border-2 border-[#C2C2C2] rounded-lg">
                  <AccordionTrigger className="p-2 h-[48px] hover:no-underline [&[data-state=open]>div>div>svg.accordion-arrow]:rotate-180 [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[#1F0954] text-[16px] font-medium">
                        Program Information Text {index + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        <ArrowUp2
                          color="#777795"
                          className="accordion-arrow transition-transform duration-200"
                          variant="Outline"
                          size={24}
                        />
                        <DropdownMenu onOpenChange={setIsOpen}>
                          <DropdownMenuTrigger
                            asChild
                            onClick={(e) => e.stopPropagation()}
                          >
                            <More
                              color="#777795"
                              className="rotate-90 cursor-pointer"
                              variant="Outline"
                              size={24}
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[200px]"
                          >
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-t-2 border-[#C2C2C2] p-4">
                    <div className="text-[#494A71]">
                      Content for section {index + 1} goes here
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-between md:justify-end items-center md:gap-[80px] mt-8">
          <Button variant="ghost" className="text-gray-500">
            Go Back
          </Button>
          <Button className="bg-[#1F0954] text-white px-6 h-[56px] rounded-lg flex items-center gap-2">
            Save & Proceed
            <ArrowDown2 variant="Bold" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
