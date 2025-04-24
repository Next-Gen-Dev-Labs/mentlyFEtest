import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { widgetOptions } from "@/data/data";

export function ManageWidgets() {
  const [selectedWidgets, setSelectedWidgets] = useState<Record<string, boolean>>(
    widgetOptions.reduce((acc, widget) => ({
      ...acc,
      [widget.id]: widget.defaultChecked,
    }), {})
  );

  const handleWidgetToggle = (widgetId: string, checked: boolean) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [widgetId]: checked,
    }));
  };

  const handleReset = () => {
    setSelectedWidgets(
      widgetOptions.reduce((acc, widget) => ({
        ...acc,
        [widget.id]: widget.defaultChecked,
      }), {})
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="font-chivo cursor-pointer text-[#1F0954] font-bold text-[16px] hover:bg-transparent">
          Manage Widgets
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[600px] bg-white">
      <Separator className="mb-6" />
        <div>
            <Separator className="mb-6" />
            <SheetHeader className="mb-2">
                <SheetTitle className="text-[32px] font-bold text-[#6F01D0] font-chivo">Manage Widget</SheetTitle>
                <p className="text-[#374557] font-chivo font-normal text-[12px]">
                    Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
                </p>
            </SheetHeader>
            <div className="space-y-4">
                {widgetOptions.map((widget) => (
                    <div key={widget.id} className="flex items-center justify-between px-8">
                        <div className="flex items-center gap-3">
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H11M1 4H11M1 1H11M1 10H11" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <label htmlFor={widget.id} className="text-[14px] text-[#4F4F4F] font-chivo font-bold cursor-pointer">
                            {widget.label}
                            </label>
                        </div>
                        <Checkbox
                            id={widget.id}
                            checked={selectedWidgets[widget.id]}
                            onCheckedChange={(checked) => handleWidgetToggle(widget.id, checked as boolean)}
                            className="h-5 w-5 border-gray-300 data-[state=checked]:bg-[#07C500] data-[state=checked]:border-[#07C500]"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-8 px-8">
                <Button className="bg-[#6F01D0] cursor-pointer text-white font-chivo font-bold text-[13px] hover:bg-[#8B77E5] px-8">
                    Save Changes
                </Button>
                <Button
                    variant="outline"
                    onClick={handleReset}
                    className="text-[#7E69AB] cursor-pointer border-[#7E69AB] hover:text-[#7E69AB] hover:bg-[#7E69AB]/10"
                >
                    Reset to Default
                </Button>
            </div>
        </div>
        
      </SheetContent>
    </Sheet>
  );
}
