"use client";

import React from "react";

import { RichTextEditor } from "./RichTextEditor";

export const ProgramInformation = () => {
  return (
    <div className="flex flex-col pt-6 pb-80 w-full max-md:pb-24">
      <div className="flex z-10 flex-col px-4 w-full max-md:px-5 max-md:max-w-full">
        <RichTextEditor />
      </div>
    </div>
  );
};

export default ProgramInformation;
