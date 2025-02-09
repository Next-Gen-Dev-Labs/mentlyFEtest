import Animate from "@/components/common/animate";
import React from "react";

function ProgramCard({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Animate className="border bg-[#FFFAF2] border-[#FEE0B1] p-4 rounded-2xl dark:bg-[#1E2139] dark:border-[#3A3D4A]">
      <Animate className="text-primary font-semibold text-[20px] dark:text-[#D9D9D9]">
        {title}
      </Animate>
      <div className="mt-6 text-[#595564] dark:text-[#8B8B8B]">{children}</div>
    </Animate>
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
    <Animate className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#FFECCC] flex items-center justify-center">
        {icon}
      </div>

      <div className="">
        <span>{text}</span>
      </div>
    </Animate>
  );
};

export default ProgramCard;
