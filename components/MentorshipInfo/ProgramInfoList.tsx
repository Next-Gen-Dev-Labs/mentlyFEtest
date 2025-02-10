import React from "react";

const ProgramInfoList = () => {
  return (
    <section className="p-4 mt-6 font-semibold bg-[#FFFAF2] dark:bg-[#1C1C2D] rounded-2xl border border-[#FEE0B1] dark:border-[#2E2F6E]">
      <h2 className="text-lg leading-none text-[#1C1D4E] dark:text-[#F0F0F0]">
        Program Information Text 2
      </h2>
      <ul className="mt-9 w-full text-base leading-snug text-zinc-600 dark:text-[#F0F0F0] list-disc pl-6">
        {[...Array(6)].map((_, index) => (
          <li key={index} className="mt-2 first:mt-0">
            Content
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramInfoList;
