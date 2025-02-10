"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent } from "./editor-content";
import { getHeadingLevel, levels } from "./editor-toolbar";

export function TitleEditor({ ...props }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Describe Section Title e.g What you stand to learn",
      }),
    ],
    content: "<p></p>",
    editorProps: {
      attributes: {
        class: "outline-none ",
      },
    },
  });

  const { currentLevel, updateHeadingLevel } = getHeadingLevel(editor);

  return (
    <div
      {...props}
      className="flex items-start gap-3 rounded-lg border border-black p-4 focus-within:ring-1 focus-within:ring-black"
    >
      <Select value={currentLevel} onValueChange={updateHeadingLevel}>
        <SelectTrigger className="w-[80px] border-2 border-dashed border-black">
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

      <EditorContent className="w-[87%]" editor={editor} />
      <span className="sr-only">title editor</span>
    </div>
  );
}
