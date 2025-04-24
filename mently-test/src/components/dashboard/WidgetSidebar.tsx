// /components/dashboard/WidgetSidebar.tsx
"use client";
import Bar from "@/assets/icons/order.svg";
import { useWidgets } from "@/contexts/WidgetContext";

export function WidgetSidebar() {
  const {
    isSidebarOpen,
    tempVisibleWidgets,
    toggleTempWidget,
    saveWidgets,
    toggleSidebar,
    resetToDefaults,
  } = useWidgets();

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 backdrop-blur-xs"
        onClick={toggleSidebar}
      />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl p-8">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="w-fit ml-auto pb-3">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={toggleSidebar}
                >
                  <span className="sr-only">Close panel</span>✕
                </button>
              </div>
              <hr />
              <div className="mt-6">
                <h2 className="text-3xl text-[#6F01D0] mb-3 font-bold ">
                  Manage Widgets
                </h2>
                <p className="text-[#374557] text-xs mb-4">
                  Personalize your dashboard by managing widgets add, remove, or
                  reorder them to fit your workflow.
                </p>
                <div className="space-y-4">
                  {Object.entries(tempVisibleWidgets).map(
                    ([widget, isVisible]) => (
                      <div
                        key={widget}
                        className="flex items-center justify-between pb-3"
                      >
                        <div className="flex items-center gap-x-4">
                          <Bar />
                          <label
                            htmlFor={`widget-${widget}`}
                            className="ml-3 text-sm text-gray-700 capitalize"
                          >
                            {widget}
                          </label>
                        </div>
                        <input
                          id={`widget-${widget}`}
                          name={`widget-${widget}`}
                          type="checkbox"
                          checked={isVisible}
                          onChange={() =>
                            toggleTempWidget(
                              widget as keyof typeof tempVisibleWidgets
                            )
                          }
                          className="h-4 w-4 rounded border-gray-300 accent-gree-400"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="flex space-x-3 mt-8 w-full">
                <button
                  type="button"
                  className="rounded-md bg-[#6F01D0] px-4 py-3 text-sm font-medium w-1/2 text-white hover:bg-[#5A01A8]"
                  onClick={saveWidgets}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-4 py-3 text-sm font-medium w-1/2 text-gray-700 hover:bg-gray-50"
                  onClick={() => resetToDefaults()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
