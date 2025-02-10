// src/components/RichTextEditor/components/MenuBar.tsx
import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
  Underline as UnderlineIcon,
  Quote,
  Image as ImageIcon,
  Link as LinkIcon,
  Copy,
  Pilcrow,
} from "lucide-react";
import toast from "react-hot-toast";
import { CopyButton } from "./CopyButton";
import { IoIosArrowDown } from "react-icons/io";

interface MenuBarProps {
  editor: Editor | null;
}

interface MenuButtonProps {
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
}

const MenuButton = ({ onClick, isActive, children }: MenuButtonProps) => (
  <button
    onClick={onClick}
    className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-colors ${
                isActive ? "bg-gray-200 dark:bg-gray-600" : ""
              }`}
  >
    {children}
  </button>
);

export const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null;
  const showCopySuccess = () => {
    toast.success("Content copied to clipboard");
  };

  return (
    <div className="flex flex-wrap gap-1 items-center border-b border-[#1F0954] p-2">
      <div>
        <CopyButton editor={editor} showSuccess={showCopySuccess} />
      </div>

      <div>
        <IoIosArrowDown className="w-4 h-4" />
      </div>

      <MenuButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Type className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
      >
        <Bold className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
      >
        <Italic className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
      >
        <UnderlineIcon className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
      >
        <Pilcrow className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
      >
        <AlignLeft className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
      >
        <AlignCenter className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
      >
        <AlignRight className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      >
        <List className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      >
        <Quote className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => {
          const fileInput = document.createElement("input");
          fileInput.type = "file";
          fileInput.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
              console.log("File uploaded:", file);
            }
          };
          fileInput.click();
        }}
      >
        <ImageIcon className="w-3 h-3" />
      </MenuButton>

      <MenuButton
        onClick={() => {
          const url = window.prompt("Enter the URL:");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        <LinkIcon className="w-3 h-3" />
      </MenuButton>
    </div>
  );
};

export default MenuBar;
