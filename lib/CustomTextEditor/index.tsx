/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

import {
  File,
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MenuBar = ({ editor }: { editor: any | null }) => {
  if (!editor) return null;

  const buttons = [
    {
      icon: <File size={16} />,
      action: () => editor.commands.clearContent(),
      isActive: false,
    },
    {
      icon: <Bold size={16} />,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <Italic size={16} />,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      icon: <UnderlineIcon size={16} />,
      action: () => editor.chain().focus()?.toggleUnderline().run(),
      isActive: editor.isActive("underline"),
    },
    {
      icon: <Strikethrough size={16} />,
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft size={16} />,
      action: () => editor.chain().focus()?.setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter size={16} />,
      action: () => editor.chain().focus()?.setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight size={16} />,
      action: () => editor.chain().focus()?.setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <AlignJustify size={16} />,
      action: () => editor.chain().focus()?.setTextAlign("justify").run(),
      isActive: editor.isActive({ textAlign: "justify" }),
    },
    {
      icon: <List size={16} />,
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <Code size={16} />,
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive("code"),
    },
  ];

  return (
    <div className="border-b bg-background p-3 flex items-center gap-2 max-w-full overflow-auto">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.action}
          className={`p-1 rounded hover:bg-gray-100 ${
            button.isActive ? "bg-gray-100" : ""
          }`}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
};

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Typography,
      Highlight,
      TextStyle.configure(),
				Color.configure({types: [TextStyle.name, ListItem.name]}),
				Placeholder.configure({placeholder: 'Write something...'})
    ],
    immediatelyRender: false,
    content: "",
    editorProps: {
      attributes: {
        class: "prose max-w-none focus:outline-none min-h-[200px] p-4",
      },
    },
  });

  return (
    <div className="border rounded-lg bg-background overflow-hidden w-full max-w-2xl">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        placeholder="Input Text"
        className="min-h-[100px] max-h-[150px] overflow-auto"
      />
      <div className="flex p-4">
        <Button className="bg-purple-100 text-purple-600 w-fit p-2 px-4 flex items-center gap-2 rounded-md">
          <span className="">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.131 1.717C10.223 1.7075 10.3158 1.72368 10.3991 1.76375C10.4824 1.80383 10.553 1.86622 10.603 1.944L10.642 2.007L10.6965 2.108L10.737 2.195L10.7785 2.2975C10.936 2.7165 11.0545 3.446 10.5075 4.2755C10.4665 4.33681 10.4203 4.39452 10.3695 4.448C10.376 4.50973 10.3709 4.57213 10.3545 4.632C10.2549 4.99641 10.1296 5.3533 9.97951 5.7C9.70401 6.3315 9.31551 6.97 8.76801 7.518C7.74301 8.543 6.39701 9.0135 5.34601 9.233C4.93351 9.3195 4.55801 9.3685 4.25301 9.3965L4.00951 9.4155L3.90451 9.422L3.84051 9.9535L3.79151 10.4065L3.77251 10.6125L3.75401 10.8715C3.75157 10.9143 3.75024 10.9571 3.75001 11C3.75001 11.1326 3.69733 11.2598 3.60356 11.3536C3.50979 11.4473 3.38261 11.5 3.25001 11.5C3.1174 11.5 2.99022 11.4473 2.89645 11.3536C2.80268 11.2598 2.75001 11.1326 2.75001 11C2.75001 10.9477 2.75167 10.8877 2.75501 10.82L2.77001 10.6015L2.79151 10.357L2.83151 9.971L2.86051 9.72C2.96301 8.854 3.08351 8.007 3.35401 7.175C3.66651 6.215 4.22901 4.9855 5.23251 3.9825C6.01901 3.1955 6.94851 2.677 7.78551 2.3375L8.01151 2.249L8.23151 2.169C8.26751 2.15633 8.30334 2.14417 8.33901 2.1325L8.54901 2.0645L8.75001 2.0045L8.94201 1.951L9.12351 1.9045L9.29351 1.8645L9.45101 1.8295L9.72401 1.777L10.0125 1.7315L10.131 1.717ZM9.88001 2.765L9.71901 2.796L9.53401 2.8355L9.32651 2.8845L9.21551 2.9135L8.98051 2.9785C8.89917 3.0025 8.81567 3.0285 8.73001 3.0565L8.46651 3.1465C7.65901 3.4385 6.71251 3.9165 5.93951 4.6895C5.08751 5.541 4.58951 6.6095 4.30501 7.4845C4.22251 7.738 4.15851 7.973 4.11001 8.1785L4.05801 8.4095L4.29051 8.388C4.57625 8.35791 4.86028 8.31335 5.14151 8.2545C6.10151 8.054 7.23101 7.6405 8.06051 6.8105C8.48551 6.386 8.80251 5.882 9.03751 5.358C8.54951 5.618 8.02851 5.851 7.65801 5.9745C7.53216 6.0164 7.39482 6.0066 7.27621 5.94725C7.15759 5.88789 7.06741 5.78385 7.02551 5.658C6.9836 5.53215 6.99341 5.39482 7.05276 5.2762C7.11212 5.15758 7.21616 5.0674 7.34201 5.0255C7.67901 4.9135 8.22101 4.669 8.71901 4.393C8.96601 4.256 9.19201 4.117 9.36951 3.989L9.48251 3.904L9.56751 3.8335L9.60001 3.8035L9.64751 3.756L9.67251 3.7245C9.93601 3.3255 9.93251 2.9845 9.88001 2.765ZM2.50001 1C2.59355 1 2.68521 1.02624 2.76458 1.07574C2.84395 1.12523 2.90785 1.196 2.94901 1.28L2.97301 1.3385L3.03801 1.5275C3.10661 1.72859 3.21715 1.91282 3.3623 2.06797C3.50746 2.22313 3.68392 2.34568 3.88001 2.4275L3.97251 2.4625L4.16151 2.527C4.25507 2.55899 4.33706 2.618 4.39709 2.69658C4.45712 2.77516 4.4925 2.86977 4.49876 2.96846C4.50503 3.06714 4.48188 3.16547 4.43227 3.25101C4.38265 3.33654 4.30878 3.40544 4.22001 3.449L4.16151 3.473L3.97251 3.538C3.77141 3.6066 3.58719 3.71714 3.43203 3.8623C3.27688 4.00745 3.15433 4.18392 3.07251 4.38L3.03751 4.4725L2.97301 4.6615C2.94102 4.75507 2.88201 4.83705 2.80343 4.89708C2.72485 4.95711 2.63024 4.9925 2.53155 4.99876C2.43286 5.00502 2.33454 4.98188 2.249 4.93226C2.16346 4.88264 2.09456 4.80878 2.05101 4.72L2.02701 4.6615L1.96201 4.4725C1.89341 4.27141 1.78287 4.08718 1.63771 3.93203C1.49255 3.77687 1.31609 3.65432 1.12001 3.5725L1.02751 3.5375L0.838506 3.473C0.744937 3.44101 0.662955 3.382 0.602924 3.30342C0.542893 3.22484 0.507509 3.13023 0.501248 3.03154C0.494986 2.93286 0.518128 2.83453 0.567746 2.74899C0.617364 2.66346 0.691231 2.59456 0.780006 2.551L0.838506 2.527L1.02751 2.462C1.2286 2.3934 1.41282 2.28286 1.56798 2.1377C1.72313 1.99255 1.84568 1.81608 1.92751 1.62L1.96251 1.5275L2.02701 1.3385C2.06069 1.23979 2.12441 1.15409 2.20922 1.09339C2.29404 1.0327 2.39571 1.00004 2.50001 1ZM2.50001 2.598C2.38173 2.74685 2.24686 2.88172 2.09801 3C2.24734 3.11833 2.38134 3.25233 2.50001 3.402C2.61834 3.25267 2.75234 3.11867 2.90201 3C2.75316 2.88172 2.61828 2.74685 2.50001 2.598Z"
                fill="#8C00E3"
              />
            </svg>
          </span>
          <span className="text-sm">Write with May</span>
        </Button>
      </div>
    </div>
  );
};

export default TiptapEditor;
