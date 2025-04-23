import { useState } from "react";
import { FaGripLines } from "react-icons/fa";

const widgetList = [
  "Programs",
  "Group Calls",
  "Mentors",
  "Recent Activities",
  "Application",
  "Earnings",
  "Forum",
  "Program Analysis",
];

const defaultSelected = new Set([
  "Programs",
  "Group Calls",
  "Mentors",
  "Recent Activities",
  "Application",
]);

export default function ManageWidgets() {
  const [selectedWidgets, setSelectedWidgets] = useState(
    new Set(defaultSelected)
  );

  const toggleWidget = (widget: string) => {
    const newSelected = new Set(selectedWidgets);
    if (newSelected.has(widget)) {
      newSelected.delete(widget);
    } else {
      newSelected.add(widget);
    }
    setSelectedWidgets(newSelected);
  };

  const resetToDefault = () => {
    setSelectedWidgets(new Set(defaultSelected));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-purple-700">Manage Widget</h2>
        <p className="text-sm text-gray-600 mt-2">
          Personalize your dashboard by managing widgets add, remove, or reorder
          them to fit your workflow.
        </p>
      </div>

      <ul className="mt-4 space-y-4">
        {widgetList.map((widget) => (
          <li
            key={widget}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center space-x-2">
              <FaGripLines className="text-gray-400" />
              <span className="text-gray-800 font-semibold">{widget}</span>
            </div>
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 text-green-600 rounded"
              checked={selectedWidgets.has(widget)}
              onChange={() => toggleWidget(widget)}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex space-x-4">
        <button className="bg-purple-700 text-white px-4 py-2 rounded-md font-semibold w-full">
          Save Changes
        </button>
        <button
          onClick={resetToDefault}
          className="border border-purple-700 text-purple-700 px-4 py-2 rounded-md font-semibold w-full"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}
