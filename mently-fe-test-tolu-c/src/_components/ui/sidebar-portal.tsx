"use client";

import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "~/assets/icons";

export const SidebarPortal = ({
  open,
  close,
  children,
}: {
  open: boolean;
  close: VoidFunction;
  children: ReactNode;
}) => {
  const content = (
    <div className="w-full h-screen fixed inset-0 z-50 flex justify-end">
      <div className="w-full h-full absolute inset-0 bg-[#E3D7FF29] backdrop-blur-[10px]" />
      <div className="w-full lg:w-[450px] h-full flex-none bg-white z-50 px-4 lg:px-8 py-14 flex flex-col items-start gap-16">
        <div className="w-full flex justify-end pb-2.5 border-b border-[#D7D7D7]">
          <CloseIcon
            className="cursor-pointer size-6 text-[#8D8D8D]"
            onClick={close}
          />
        </div>

        {children}
      </div>
    </div>
  );
  return open
    ? createPortal(content, document.getElementById("sidebar") as HTMLElement)
    : null;
};
