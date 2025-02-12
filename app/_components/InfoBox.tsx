import Image from "next/image";
import React, { ReactNode } from "react";

export default function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#CEE1FB] px-2 py-4 rounded-xs flex justify-center items-center gap-2 mt-3">
      <Image alt="info" src={"/icons/info-circle.svg"} width={24} height={24} />
      <span className="text-[#777795] text-xs">{children}</span>
    </div>
  );
}
