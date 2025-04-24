import { X } from "lucide-react";
import React from "react";

interface WidgetManagerProps {
  onClose: () => void;
}
const widgets = [
  { id: "programs", name: "Programs", enabled: true },
  { id: "group-calls", name: "Group Calls", enabled: true },
  { id: "mentors", name: "Mentors", enabled: true },
  { id: "recent-activities", name: "Recent Activities", enabled: true },
  { id: "application", name: "Application", enabled: true },
  { id: "earnings", name: "Earnings", enabled: false },
  { id: "forum", name: "Forum", enabled: false },
  { id: "program-analysis", name: "Program Analysis", enabled: false },
];

const ManageWidget = ({ onClose }: WidgetManagerProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end backdrop-blur-sm">
      <div className="animate__animated animate__slideInRight h-full w-full max-w-lg bg-white shadow-lg space-y-8">
        <div className="flex justify-end p-4 border-b border-[#D7D7D7]">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-[#8D8D8D]" />
          </button>
        </div>

        <div className="py-4 px-12 space-y-2">
          <h2 className="text-2xl lg:text-[32px] font-bold text-[#6F01D0]">
            Manage Widget
          </h2>
          <p className="text-xs text-[#374557] mb-2">
            Personalize your dashboard by managing widgets add, remove, or
            reorder items to fit your workflow.
          </p>
        </div>
        <div className="space-y-4 px-12">
          {widgets.map((widget) => (
            <div
              key={widget.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-lg">≡</span>
                <span className="text-[14.4px] font-bold text-[#4F4F4F]">
                  {widget.name}
                </span>
              </div>
              <input
                type="checkbox"
                defaultChecked={widget.enabled}
                className={` pt-1 w-5 pl-[2.5px] h-5   appearance-none 
    ${
      widget.enabled
        ? "bg-[#07C500] rounded-[4px]"
        : "bg-white border-2 border-[#A5A5A5]"
    }
    checked:bg-green-500 checked:after:content-[''] 
    checked:after:block checked:after:w-[6px] checked:after:h-[10px] 
    checked:after:border-b-2 checked:after:border-r-2 
    checked:after:border-white checked:after:rotate-45 
    checked:after:translate-x-[3px] checked:after:translate-y-[-1px]`}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-4 px-12 mt-auto">
          <button className="flex-1 py-3 px-4 bg-[#6F01D0] text-[13.19px] font-bold text-white rounded-[6.59px] hover:bg-[#5c01ae] transition-colors">
            Save Changes
          </button>
          <button className="flex-1 py-3 px-4 border text-[13.19px] font-bold border-[#6F01D0] text-[#6F01D0] rounded-[6.59px] hover:bg-gray-50 transition-colors">
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageWidget;
