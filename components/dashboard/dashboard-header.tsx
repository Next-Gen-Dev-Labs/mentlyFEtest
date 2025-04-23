"use client";

import { Button } from "~/components/ui/button";

import { Bell, ChevronDown, Menu, Plus, Search, Settings } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Manage from "./manage";

export default function DashboardHeader() {
  return (
    <div className="flex justify-end gap-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center">
          <Menu className="h-4 w-4 text-gray-500" />
        </div>
        <div className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center">
          <div className="h-4 w-4 grid grid-cols-2 gap-0.5">
            <div className="bg-gray-500 rounded-sm"></div>
            <div className="bg-gray-500 rounded-sm"></div>
            <div className="bg-gray-500 rounded-sm"></div>
            <div className="bg-gray-500 rounded-sm"></div>
          </div>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="font-bold text-2xl" variant="link">
            {" "}
            Manage Widgets
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-purple-700 mb-2">
              Manage Widget
            </SheetTitle>
            <SheetDescription>
              <Manage />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
