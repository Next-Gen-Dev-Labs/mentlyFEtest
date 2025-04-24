import { X } from 'lucide-react';

export default function ManageWidgetModal({ 
  activeWidgets, 
  setActiveWidgets, 
  onClose,
  setWidgetPositions,
  defaultPositions
}) {
  // List of all available widgets
  const widgetOptions = [
    { id: 'programs', label: 'Programs' },
    { id: 'groupCalls', label: 'Group Calls' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'recentActivities', label: 'Recent Activities' },
    { id: 'applications', label: 'Applications' },
    { id: 'earnings', label: 'Earnings' },
    { id: 'forum', label: 'Forum' },
    { id: 'programAnaylsis', label: 'Program Anaylsis' },
  ];

  // Handle toggle of widget visibility
  const handleToggle = (widgetId) => {
    setActiveWidgets({
      ...activeWidgets,
      [widgetId]: !activeWidgets[widgetId],
    });
  };

  // Handle reset of widget layout
  const handleResetLayout = () => {
    // Reset widget positions to default
    setWidgetPositions(defaultPositions);

    // Reset active widgets to default (all active)
    setActiveWidgets({
      programs: true,
      groupCalls: true,
      applications: true,
      mentors: true,
      recentActivities: true,
      usersChart: true,
    });
  };

  return (
    <div className="fixed inset-0 bg-[E3D7FF] backdrop-blur-xs flex justify-end z-50">
      <div className="bg-white p-6 w-full max-w-md h-full px-12">
        <div className="my-8 mb-14">
          <div className="flex items-center justify-end mb-2">
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
          <hr className=" bg-[#D7D7D7] color-[#D7D7D7]" />
        </div>

        <div className="">
          <h2 className="text-3xl font-bold text-[#6F01D0]">Manage Widgets</h2>

          <p className="text-[#374557]  text-sm mb-6 mt-4">
            Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
          </p>

          {widgetOptions.map((widget) => (
            <div key={widget.id} className="flex items-center justify-between py-4 mb-2 ">
              <div className="flex items-center gap-4">
                <img src={`/images/menu.svg`} alt='menu' className="h-6" />
                <span className="text-[#4F4F4F] font-bold">{widget.label}</span>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={activeWidgets[widget.id]}
                  onChange={() => handleToggle(widget.id)}
                />
                <div className="w-6 h-6 border-4 border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#07C500] peer-checked:border-green-500">
                  {activeWidgets[widget.id] && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
          >
            Save Changes
          </button>
          <button
            onClick={handleResetLayout}
            className="px-6 py-4  text-[#6F01D0] outline-1 outline-[#6F01D0] font-bold rounded-lg"
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}
