"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface WidgetOption {
  id: string;
  name: string;
  enabled: boolean;
}

interface ManageWidgetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ManageWidgetModal({
  open,
  onOpenChange,
}: ManageWidgetModalProps) {
  const [widgets, setWidgets] = useState<WidgetOption[]>([
    { id: "programs", name: "Programs", enabled: true },
    { id: "group-calls", name: "Group Calls", enabled: true },
    { id: "mentors", name: "Mentors", enabled: true },
    { id: "recent-activities", name: "Recent Activities", enabled: true },
    { id: "application", name: "Application", enabled: true },
    { id: "earnings", name: "Earnings", enabled: false },
    { id: "forum", name: "Forum", enabled: false },
    { id: "program-analysis", name: "Program Analysis", enabled: false },
  ]);

  const handleToggleWidget = (id: string) => {
    setWidgets(
      widgets.map((widget) => {
        if (widget.id === id) {
          return { ...widget, enabled: !widget.enabled };
        }
        return widget;
      })
    );
  };

  const handleSaveChanges = () => {
    // Here you would save the widget preferences to your state management or backend
    console.log("Saving widget preferences:", widgets);
    onOpenChange(false);
  };

  const handleResetToDefault = () => {
    setWidgets([
      { id: "programs", name: "Programs", enabled: true },
      { id: "group-calls", name: "Group Calls", enabled: true },
      { id: "mentors", name: "Mentors", enabled: true },
      { id: "recent-activities", name: "Recent Activities", enabled: true },
      { id: "application", name: "Application", enabled: true },
      { id: "earnings", name: "Earnings", enabled: false },
      { id: "forum", name: "Forum", enabled: false },
      { id: "program-analysis", name: "Program Analysis", enabled: false },
    ]);
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => onOpenChange(false)}
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[350px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-end p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="text-[32px] text-purple-700 font-bold mb-4">Manage Widget</h2>
            <p className="text-sm text-gray-600 mb-6">
              Personalize your dashboard by managing widgets add, remove, or
              reorder them to fit your workflow.
            </p>

            <div className="space-y-4">
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm">{widget.name}</span>
                  </div>
                  <Checkbox
                    id={`widget-${widget.id}`}
                    checked={widget.enabled}
                    onCheckedChange={() => handleToggleWidget(widget.id)}
                    className="h-5 w-5 border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between gap-4">
              <Button
                variant="default"
                className="flex-1 bg-purple-700 hover:bg-purple-800"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-gray-300"
                onClick={handleResetToDefault}
              >
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
