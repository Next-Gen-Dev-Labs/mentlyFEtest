import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { GripVertical } from "lucide-react";
import { useState } from "react";

const initialWidgets = [
  { name: "Programs", enabled: true },
  { name: "Group Calls", enabled: true },
  { name: "Mentors", enabled: true },
  { name: "Recent Activities", enabled: true },
  { name: "Application", enabled: true },
  { name: "Earnings", enabled: false },
  { name: "Forum", enabled: false },
  { name: "Program Analysis", enabled: false },
];

export default function ManageWidget() {
  const [widgets, setWidgets] = useState(initialWidgets);

  const handleToggle = (index: number) => {
    const updated = [...widgets];
    updated[index].enabled = !updated[index].enabled;
    setWidgets(updated);
  };

  const resetToDefault = () => setWidgets(initialWidgets);

  return (
    <div className="max-w-md mx-auto p-6">
      <p className="text-sm text-gray-600 mb-4">
        Personalize your dashboard by managing widgets: add, remove, or reorder
        them to fit your workflow.
      </p>
      <div className="space-y-4">
        {widgets.map((widget, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-gray-400" />
              <span className="font-medium">{widget.name}</span>
            </div>
            <Checkbox
              checked={widget.enabled}
              onCheckedChange={() => handleToggle(index)}
            />
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <Button className="bg-purple-700 hover:bg-purple-800 text-white">
            Save Changes
          </Button>
          <Button variant="outline" onClick={resetToDefault}>
            Reset to Default
          </Button>
        </div>
      </div>
    </div>
  );
}
