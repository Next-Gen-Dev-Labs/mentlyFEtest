"use client";

import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { RiLeafLine } from "react-icons/ri";

const TextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null); // Store Quill instance

  useEffect(() => {
    // Prevent re-initialization
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
        },
      });

      // Set initial content
      quillInstance.current.root.innerHTML = value || "";
      quillInstance.current.on("text-change", () => {
        onChange(quillInstance.current.root.innerHTML);
      });
    }

    // This effect runs every time the value prop changes
    if (quillInstance.current) {
      quillInstance.current.root.innerHTML = value || "";
    }

  }, [value]); // Add `value` to the dependency array to re-initialize content when value changes

  return (
    <div style={{ position: "relative" }}>
      <div ref={editorRef} className="h-40 border rounded-lg" />
      <button className="flex items-center gap-2 custom-ai-button">
        <RiLeafLine /> Write with May
      </button>
    </div>
  );
};

export default TextEditor;
