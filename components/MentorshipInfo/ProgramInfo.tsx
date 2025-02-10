import React from "react";

const ProgramInfo = () => {
  return (
    <section className="p-4 mt-6 w-full bg-[#FFFAF2] dark:bg-[#1C1C2D] rounded-2xl border border-[#FEE0B1] dark:border-[#2E2F6E]">
      <h2 className="text-lg font-semibold leading-none text-[#1C1D4E] dark:text-[#F0F0F0]">
        Program Information Text
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1">
        {infoItems.map((item, index) => (
          <InfoBox key={index} imgSrc={item.imgSrc} text={item.text} />
        ))}
      </div>
    </section>
  );
};

const InfoBox = ({ imgSrc, text }: { imgSrc: string; text: string }) => (
  <div className="flex flex-wrap gap-2 items-start mt-9 w-full">
    <div className="bg-[#FFECCC] rounded-full">
      <img
        loading="lazy"
        src={imgSrc}
        className="object-contain p-2"
        alt="Icon"
      />
    </div>
    <span className="text-base text-[#595564] dark:text-[#F0F0F0]">{text}</span>
  </div>
);

const infoItems = [
  { imgSrc: "/images/icon/award.png", text: "Content" },
  { imgSrc: "/images/icon/people.png", text: "Content" },
  { imgSrc: "/images/icon/call.png", text: "Content" },
  { imgSrc: "/images/icon/briefcase.png", text: "Content" },
  { imgSrc: "/images/icon/copy.png", text: "Content" },
  { imgSrc: "/images/icon/chat.png", text: "Content" },
];

export default ProgramInfo;
