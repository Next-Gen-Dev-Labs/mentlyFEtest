"use client";

import { useWidget } from "@/context/WidgetContext";
import { X } from 'lucide-react';
import ButtonPurple from "@/components/ui/ButtonPurple";
import ButtonWithBorderPurple from "@/components/ui/ButtonWithBorderPurple";
import { Menu } from "lucide-react";


const RightBar = () => {
  const { isRightBarOpen, toggleRightBar } = useWidget();

  return (
    <>
      {/* Blur Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-40
          ${isRightBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleRightBar}
      />

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] bg-white shadow-lg z-50 
          transition-transform duration-300 ease-in-out
          ${isRightBarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end py-3 mx-5 border-b border-[#D7D7D7] mt-8">
            <X onClick={toggleRightBar} />
        </div>
        <div className="p-6 mt-2">
          <div className="space-x-5">
          <h2 className="text-3xl font-bold text-[#6F01D0] mb-4">Manage Widget</h2>
          <p className="text-xs text-[#374557]">
            Personalize your dashboard by managing widgets add, remove, or reorder items to fit your workflow.
          </p>
          </div>

          {/* Widget Options */}
          <div className="space-y-4 mt-7">
            {[
              "Programs",
              "Group Calls",
              "Mentors",
              "Recent Activities",
              "Application",
              "Earnings",
              "Forum",
              "Program Analysis"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Menu />
                  <span className="text-[#4F4F4F] text-sm font-bold">{item}</span>
                </div>
                <input
                  type="checkbox"
                  defaultChecked={index < 5}
                  className="h-5 w-5 rounded border-gray-300 text-[#8B72FC] focus:ring-[#8B72FC]"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-4">
            <ButtonPurple className="flex-1 text-white py-3.5 rounded-md hover:bg-[#7B62EC] transition-colors" value="Save Changes" />
            <ButtonWithBorderPurple className="flex-1 rounded-md text-[#6F01D0] py-3.5 hover:bg-gray-50 transition-colors" value="Reset to Default" />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar; 