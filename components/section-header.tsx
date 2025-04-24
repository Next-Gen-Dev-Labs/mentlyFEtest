import { MoreVerticalIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <Image
          src={"/bars.svg"}
          alt="bars"
          width={20}
          height={20}
          className="size-6"
        />
        <h2 className="text-xl font-bold text-brand-gray">{title}</h2>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-brand-blue">See all</p>
        <MoreVerticalIcon />
      </div>
    </div>
  );
};
