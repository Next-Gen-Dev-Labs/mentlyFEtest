import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import ManageWidget from "./ManageWidgets";

const ToggleWidgetManger = () => {
  return (
    <div>
      <Sheet >
        <SheetTrigger>
        <span className="text-sm font-medium text-indigo-900">Manage Widgets</span>
        </SheetTrigger>
        <SheetContent side="right" className="">
          <SheetTitle className="hidden" ></SheetTitle>
          <ManageWidget />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ToggleWidgetManger;
