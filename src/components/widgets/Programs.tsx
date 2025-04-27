"use client";
import React from "react";
import Card from "@/components/ui/Card";
import { programs } from "@/db/dataBase";
import { Menu } from "lucide-react";

import { CiMenuKebab } from "react-icons/ci";

import { useRouter } from "next/navigation";
import ProgramsWidgets from "@/components/ui/reusable_widgets/programs_widget";

const Programs = () => {
  const router = useRouter();
  return (
    <Card className="h-full relative">
      <div className="rounded-lg">
        <div className="px-2 py-1">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Menu />
                <h1 className="text-[#B0B0B0] text-base font-bold">Programs</h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => router.push("/programs")}
                  className="text-[#6F01D0] cursor-pointer font-semibold text-xs"
                >
                  See all
                </button>
                <CiMenuKebab />
              </div>
            </div>

            <div className="flex justify-end items-center gap-3 mx-6">
              <p className="text-[#918C9C] text-xs font-medium">Filter</p>
              <div className="relative inline-flex items-center">
                <select className="text-sm border border-gray-300 py-2 px-1 rounded-md bg-transparent outline-none text-gray-500">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {/* <ChevronDown className="absolute right-2 pointer-events-none" size={16} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[4rem] overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          <ProgramsWidgets programs={programs} />
        </div>
      </main>
    </Card>
  );
};

export default Programs;
