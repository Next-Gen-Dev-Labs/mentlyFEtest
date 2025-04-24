"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useWidgets, type Widget } from "@/components/context/widget-context";

interface WidgetSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WidgetSidebar({ open, onOpenChange }: WidgetSidebarProps) {
  const { widgets, toggleWidget, resetToDefault } = useWidgets();
  const [tempWidgets, setTempWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    if (open) {
      setTempWidgets([...widgets]);
    }
  }, [open, widgets]);

  const handleWidgetToggle = (id: any, checked: boolean) => {
    setTempWidgets((prev) =>
      prev.map((widget) =>
        widget.id === id ? { ...widget, enabled: checked } : widget
      )
    );
  };

  const handleSaveChanges = () => {
    tempWidgets.forEach((widget) => {
      toggleWidget(widget.id, widget.enabled);
    });

    onOpenChange(false);
  };

  const handleResetToDefault = () => {
    resetToDefault();
    setTempWidgets([...widgets]);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[350px] sm:w-[400px] p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-2xl font-bold text-purple-700">
              Manage Widget
            </SheetTitle>
          </div>
        </SheetHeader>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-6">
            Personalize your dashboard by managing widgets add, remove, or
            reorder them to fit your workflow.
          </p>

          <div className="space-y-4">
            {tempWidgets.map((widget) => (
              <div key={widget.id} className="flex items-center space-x-2">
                <div className="w-6 flex justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">{widget.name}</div>
                <Checkbox
                  id={`widget-${widget.id}`}
                  checked={widget.enabled}
                  onCheckedChange={(checked) =>
                    handleWidgetToggle(widget.id, !!checked)
                  }
                  className="h-5 w-5 border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            <Button
              className="flex-1 bg-purple-700 hover:bg-purple-800 text-white"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-purple-700 text-purple-700 hover:bg-purple-50"
              onClick={handleResetToDefault}
            >
              Reset to Default
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
