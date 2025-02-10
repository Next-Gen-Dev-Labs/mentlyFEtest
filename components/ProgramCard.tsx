import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  classname?: string;
  children: ReactNode;
  title: string;
};

export default function ProgramCard({ classname, children, title }: Props) {
  return (
    <div className="flex flex-col gap-8 border border-mently-honey/50 rounded-lg bg-mently-honey/10 p-4">
      <h2 className="text-mently-blue font-semibold capitalize text-xlleadin-[22px]">{title}</h2>
      <ul className={cn("text-gray-600",classname)}>{children}</ul>
    </div>
  );
}
