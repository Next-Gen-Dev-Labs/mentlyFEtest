"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent } from "./editor-content";
import { EditorToolbar } from "./editor-toolbar";

export function Editor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "| Input Text",
      }),
    ],
    editorProps: {
      attributes: {
        class: " m-5 focus:outline-none",
      },
    },
    content: "",
  });

  return (
    <div className="mx-auto w-full">
      <div className="rounded-sm border border-primary bg-white shadow-sm">
        <EditorToolbar editor={editor} />
        <div className="min-h-32 border-t md:min-h-[200px]">
          <EditorContent editor={editor} className="h-full" />
        </div>

        <button className="m-2 inline-flex items-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-100">
          <span className="mr-2">✨</span>
          Write with May
        </button>
      </div>
      <span className="sr-only">editor </span>
    </div>
  );
}
