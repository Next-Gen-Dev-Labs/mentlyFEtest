import React, { useState, FC } from 'react';

interface WidgetSettings {
  programs: boolean;
  groupCalls: boolean;
  mentors: boolean;
  recentActivities: boolean;
  application: boolean;
  userStats: boolean;
  forum: boolean;
  programAnalysis: boolean;
}

interface ManageWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: WidgetSettings) => void;
  initialSettings: WidgetSettings;
}

const ManageWidget: FC<ManageWidgetProps> = ({ isOpen, onClose, onSave, initialSettings }) => {
  const [widgets, setWidgets] = useState<WidgetSettings>(initialSettings);

  const handleToggle = (widgetName: keyof WidgetSettings) => {
    setWidgets({
      ...widgets,
      [widgetName]: !widgets[widgetName]
    });
  };

  const handleSave = () => {
    onSave(widgets);
    onClose();
  };

  const resetToDefault = () => {
    setWidgets({
      programs: true,
      groupCalls: true,
      mentors: true,
      recentActivities: true,
      application: true,
      userStats: true,
      forum: false,
      programAnalysis: false,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold text-purple-800">Manage Widget</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">
          Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
        </p>
        
        <div className="space-y-4">
          {Object.entries(widgets).map(([key, value]) => {
            const widgetKey = key as keyof WidgetSettings;
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return (
              <div key={key} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </span>
                  <span>{label}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={value}
                    onChange={() => handleToggle(widgetKey)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-auto p-4 flex space-x-4">
        <button
          onClick={handleSave}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
        >
          Save Changes
        </button>
        <button
          onClick={resetToDefault}
          className="flex-1 bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded border border-gray-300"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default ManageWidget;