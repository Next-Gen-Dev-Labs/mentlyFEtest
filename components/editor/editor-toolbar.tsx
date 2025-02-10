"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import type { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  FileText,
  ImageIcon,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Underline,
} from "lucide-react";

interface EditorToolbarProps {
  editor: Editor | null;
}

export const levels = [
  { value: "h1", label: "H1" },
  { value: "h2", label: "H2" },
  { value: "h3", label: "H3" },
  { value: "h4", label: "H4" },
  { value: "h5", label: "H5" },
  { value: "h6", label: "H6" },
  { value: "p", label: "T" },
];

export const getHeadingLevel = (editor: Editor | null) => {
  const currentLevel = editor?.isActive("heading")
    ? `h${editor.getAttributes("heading").level}`
    : "p";

  const updateHeadingLevel = (value: string) => {
    if (!editor) return;

    if (value === "p") {
      editor.chain().focus().setParagraph().run();
    } else {
      const level = parseInt(value.replace("h", ""));
      //@ts-expect-error - Tiptap types are not up to date
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };

  return { currentLevel, updateHeadingLevel };
};

export function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null;
  }

  const { currentLevel, updateHeadingLevel } = getHeadingLevel(editor);

  return (
    <div className="flex flex-wrap items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="rounded border-b border-r border-black"
          asChild
        >
          <Button variant="ghost" size="sm" className="gap-1 md:px-10">
            <FileText className="h-4 w-4" />
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>New Document</DropdownMenuItem>
          <DropdownMenuItem>Open...</DropdownMenuItem>
          <DropdownMenuItem>Save</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Select value={currentLevel} onValueChange={updateHeadingLevel}>
        <SelectTrigger
          hideIcon={true}
          className="w-fit border-none px-3.5 hover:bg-accent"
        >
          <div className="flex items-center justify-center">
            {currentLevel === "p" ? (
              <span className="font-mono text-black">T</span>
            ) : (
              <span className="">{currentLevel.toUpperCase()}</span>
            )}
          </div>
        </SelectTrigger>
        <SelectContent>
          {levels.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold")}
        className="data-[active=true]:bg-muted"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic")}
        className="data-[active=true]:bg-muted"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        data-active={editor.isActive("underline")}
        className="data-[active=true]:bg-muted"
      >
        <Underline className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        data-active={editor.isActive({ textAlign: "left" })}
        className="data-[active=true]:bg-muted"
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        data-active={editor.isActive({ textAlign: "center" })}
        className="data-[active=true]:bg-muted"
      >
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        data-active={editor.isActive({ textAlign: "right" })}
        className="data-[active=true]:bg-muted"
      >
        <AlignRight className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        data-active={editor.isActive({ textAlign: "justify" })}
        className="data-[active=true]:bg-muted"
      >
        <AlignJustify className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("bulletList")}
        className="data-[active=true]:bg-muted"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("orderedList")}
        className="data-[active=true]:bg-muted"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        data-active={editor.isActive("blockquote")}
        className="data-[active=true]:bg-muted"
      >
        <Quote className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          const url = window.prompt("Enter the URL");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
      >
        <ImageIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          const url = window.prompt("Enter the URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        data-active={editor.isActive("link")}
        className="data-[active=true]:bg-muted"
      >
        <Link className="h-4 w-4" />
      </Button>
    </div>
  );
}
