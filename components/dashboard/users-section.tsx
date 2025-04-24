"use client";

import { SectionHeader } from "@/components/dashboard/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { DonutChart } from "@/components/charts/donut-chart";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function UsersSection() {
  const userData = {
    total: 240,
    categories: [
      { name: "Students", value: 200, color: "#62B2FD" },
      { name: "Mentors", value: 8, color: "#9BDFC4" },
      { name: "Programs", value: 22, color: "#F99BAB" },
      { name: "Others", value: 10, color: "#FFB44F" }
    ]
  };
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="bg-[#E7DDFF4D] rounded-lg p-2 h-41">
      {/* <SectionHeader title="Users" /> */}
      <div className="flex items-center justify-between mb-4 border-b pb-4">
        <h2 className="text-lg text-[#595564] font-medium">Users</h2>
         <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 flex items-center gap-1"
                    onClick={() => setShowFilter(!showFilter)}
                  >
                    {activeFilter}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  {showFilter && (
                    <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md z-10 w-32">
                      <div
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setActiveFilter("Active");
                          setShowFilter(false);
                        }}
                      >
                        All
                      </div>
                      <div
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setActiveFilter("All");
                          setShowFilter(false);
                        }}
                      >
                        user
                      </div>
                    </div>
                  )}
                </div>
              </div>
      <Card className="overflow-hidden border-0 rounded-none bg-transparent ">
        <CardContent className="p-4">
          <div className="flex items-center justify-center ">
            <DonutChart data={userData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}