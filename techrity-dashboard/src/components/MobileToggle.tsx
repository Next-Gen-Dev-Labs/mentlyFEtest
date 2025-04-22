"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import Image from "next/image";

const MobileToggle = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/sidebar/collapse.svg"
            alt="Open"
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent side="left" className="w-60 [&>button.absolute]:hidden">
          <SheetTitle className="hidden"></SheetTitle>
          <Sidebar isSheet closeSheet={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileToggle;
