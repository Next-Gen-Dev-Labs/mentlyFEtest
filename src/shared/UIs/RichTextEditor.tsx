import React, { useRef, useEffect, useCallback } from "react";
import { IconWithDropdown } from "./ReusedComponents";
import { toolbarButtons } from "../data";
import IconTextLink from "@/assets/IconComponents/IconTextLink";
import IconTextQuoteDown from "@/assets/IconComponents/IconTextQuoteDown";
import IconTextMath from "@/assets/IconComponents/IconTextMath";
import IconTextQuoteUp from "@/assets/IconComponents/IconTextQuoteUp";
import IconDocument from "@/assets/IconComponents/IconDocument";
import { IoMdArrowDropdown } from "react-icons/io";
import IconTextImage from "@/assets/IconComponents/IconTextImage";

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // When the value prop changes, update the editor's content.
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  // Helper function to execute a formatting command.
  const execCmd = useCallback(
    (command: string, arg: string | undefined = undefined) => {
      document.execCommand(command, false, arg);
      // After executing the command, call onChange with the updated content.
      if (editorRef.current) {
        onChange(editorRef.current.innerHTML);
      }
    },
    [onChange]
  );

  // Handle content changes from the contenteditable div.
  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex">
        <div className="border-[0.1rem] border-b-mentlyBlue border-r-mentlyBlue rounded-b-sm flex items-center justify-center w-[7rem] p-2">
          <IconWithDropdown
            icon={
              <div className="flex items-center justify-center gap-2">
                <IconDocument />
                <IoMdArrowDropdown size={20} />
              </div>
            }
            items={[
              {
                label: "New File",
              },
              {
                label: "Open File",
              },
            ]}
          />
        </div>
        <div className="flex gap-[0.9rem] items-center pl-3  border-b-mentlyBlue border-r-mentlyBlue border-mentlyBlue border-b rounded-b-sm w-full overflow-x-auto">
          {toolbarButtons.map((button, index) => (
            <button
              type="button"
              key={index}
              onClick={() => execCmd(button.cmd)}
              title={button.title}
              className="text-[#A3A3A3] hover:text-mentlyBlue cursor-pointer"
            >
              {button.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => execCmd("formatBlock", "<blockquote>")}
            title="Insert Blockquote"
            className=" hover:text-mentlyBlue cursor-pointer"
          >
            <IconTextQuoteDown />
          </button>
          <button
            type="button"
            onClick={() => execCmd("formatBlock", "<p>")}
            title="Insert Paragraph"
            className=" hover:text-mentlyBlue cursor-pointer"
          >
            <IconTextQuoteUp />
          </button>
          <button
            onClick={() => execCmd("formatBlock", "<a>")}
            title="Insert Link"
            className=" hover:text-mentlyBlue cursor-pointer"
          >
            <IconTextLink />
          </button>
          <button
            onClick={() =>
              execCmd("insertHTML", '<span class="math">[math]</span>')
            }
            title="Insert Math"
            className=" hover:text-mentlyBlue cursor-pointer"
          >
            <IconTextMath />
          </button>
          <button
            onClick={() => {
              const url = prompt("Enter image URL:");
              if (url) {
                execCmd("insertImage", url);
              }
            }}
            title="Insert Math"
            className=" hover:text-mentlyBlue cursor-pointer"
          >
            <IconTextImage />
          </button>
          <button
            onClick={() => {
              const url = prompt("Enter the URL:", "http://");
              if (url) execCmd("createLink", url);
            }}
            title="Insert Link"
            className="text-[#A3A3A3] hover:text-mentlyBlue cursor-pointer"
          >
            <IconTextLink />
          </button>
        </div>
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="p-4 min-h-[10rem] rounded focus:outline-none"
        style={{ backgroundColor: "#fff" }}
      ></div>
    </div>
  );
};

export default RichTextEditor;
