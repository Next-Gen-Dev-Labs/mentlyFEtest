import IconQuillPen from "@/assets/IconComponents/IconQuillPen";
import RichTextEditor from "@/shared/UIs/RichTextEditor";
import React from "react";

const TextEditor = () => {
  return (
    <div className="border border-mentlyBlue rounded-md">
      <div className="flex flex-col">
        <RichTextEditor value="" onChange={(content) => console.log(content)} />
        <div className="flex gap-2 items-center bg-[#a200ff28] text-white cursor-pointer py-2 px-4 rounded-[0.5rem] w-fit m-3">
          <IconQuillPen />
          <span className="text-[0.65rem] text-[#8C00E3]">Write with May</span>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
