import React from "react";

function ProgramCard({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="border bg-[#FFFAF2] border-[#FEE0B1] p-4 rounded-2xl dark:bg-[#1E2139] dark:border-[#3A3D4A]">
      <h4 className="text-primary font-semibold text-[20px] dark:text-[#D9D9D9]">
        {title}
      </h4>
      <div className="mt-6 text-[#595564] dark:text-[#8B8B8B]">{children}</div>
    </div>
  );
}

export const ProgramIconWithText = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#FFECCC] flex items-center justify-center">
        {icon}
      </div>

      <div className="">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ProgramCard;
