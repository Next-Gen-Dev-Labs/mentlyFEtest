"use client";

import { useWidget } from "@/context/WidgetContext";

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
        className={`fixed top-0 right-0 h-screen w-[320px] bg-white shadow-lg z-50 
          transition-transform duration-300 ease-in-out
          ${isRightBarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#1F0954] mb-4">Manage Widget</h2>
          <p className="text-sm text-gray-600 mb-6">
            Personalize your dashboard by managing widgets add, remove, or reorder items to fit your workflow.
          </p>

          {/* Widget Options */}
          <div className="space-y-4">
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
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">{item}</span>
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
            <button className="flex-1 bg-[#8B72FC] text-white py-2 rounded-md hover:bg-[#7B62EC] transition-colors">
              Save Changes
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar; 