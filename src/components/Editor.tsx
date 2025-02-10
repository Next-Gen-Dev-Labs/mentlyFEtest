import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import {
  IconFile,
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconList,
  IconCode,
  IconAlignJustified,
} from "@tabler/icons-react";


const MenuBar = ({ editor }: { editor: any | null }) => {
  if (!editor) return null;

  const isActive = (format: any, attributes = {}) => {
    return editor.isActive(format, attributes);
  };

  return (
    <div className="border-b bg-background p-3 flex flex-wrap items-center gap-2 max-w-full overflow-auto">
      {/* File/Clear */}
      <button
        onClick={() => editor.commands.clearContent()}
        title="Clear Content"
        className="p-1 rounded hover:bg-gray-100"
      >
        <IconFile size={16} />
      </button>

      {/* Formatting */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive("bold") ? "bg-gray-100" : ""
        }`}
        title="Bold"
      >
        <IconBold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive("italic") ? "bg-gray-100" : ""
        }`}
        title="Italic"
      >
        <IconItalic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive("underline") ? "bg-gray-100" : ""
        }`}
        title="Underline"
      >
        <IconUnderline size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive("strike") ? "bg-gray-100" : ""
        }`}
        title="Strikethrough"
      >
        <IconStrikethrough size={16} />
      </button>

      {/* Alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive({ textAlign: "left" }) ? "bg-gray-100" : ""
        }`}
        title="Align Left"
      >
        <IconAlignLeft size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive({ textAlign: "center" }) ? "bg-gray-100" : ""
        }`}
        title="Align Center"
      >
        <IconAlignCenter size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive({ textAlign: "right" }) ? "bg-gray-100" : ""
        }`}
        title="Align Right"
      >
        <IconAlignRight size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`p-1 rounded hover:bg-gray-100 ${
          isActive({ textAlign: "justify" }) ? "bg-gray-100" : ""
        }`}
        title="Align Justify"
      >
        <IconAlignJustified size={16} />
      </button>
    </div>
  );
};

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Typography,
      Highlight,
      TextStyle.configure(),
      Placeholder.configure({ placeholder: "" }),
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
        className="min-h-24 max-h-36 overflow-auto"
      />
      <div className="flex p-4"></div>
    </div>
  );
};
