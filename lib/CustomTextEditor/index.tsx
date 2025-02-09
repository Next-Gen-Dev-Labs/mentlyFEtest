"use client"

import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Import styles

const CustomTextEditor = () => {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log("Text change!");
        console.log(quill.getText());
        console.log(quill.getContents());
        console.log(quill.root.innerHTML);
        console.log(quillRef.current.firstChild.innerHTML);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill]);

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default CustomTextEditor;
