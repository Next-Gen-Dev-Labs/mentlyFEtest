import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

interface WidgetOption {
    id: string;
    name: string;
    enabled: boolean;
}

interface ManageWidgetSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const ManageWidgetSidebar: React.FC<ManageWidgetSidebarProps> = ({ isOpen, onClose }) => {
    const [widgetOptions, setWidgetOptions] = useState<WidgetOption[]>([
        { id: 'programs', name: 'Programs', enabled: true },
        { id: 'groupCalls', name: 'Group Calls', enabled: true },
        { id: 'mentors', name: 'Mentors', enabled: true },
        { id: 'recentActivities', name: 'Recent Activities', enabled: true },
        { id: 'application', name: 'Application', enabled: true },
        { id: 'earnings', name: 'Earnings', enabled: false },
        { id: 'forum', name: 'Forum', enabled: false },
        { id: 'programAnalysis', name: 'Program Analysis', enabled: false }
    ]);

    const toggleWidget = (id: string) => {
        setWidgetOptions(
            widgetOptions.map(widget =>
                widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
            )
        );
    };

    const resetToDefault = () => {
        setWidgetOptions(
            widgetOptions.map(widget => ({
                ...widget,
                enabled: ['programs', 'groupCalls', 'mentors', 'recentActivities', 'application'].includes(widget.id)
            }))
        );
    };

    const saveChanges = () => {
        // In a real app, you would save these changes to your backend/state management
        console.log('Saving widget preferences:', widgetOptions);
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-2xl font-bold text-purple-800">Manage Widget</h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <p className="text-gray-600 mb-6">
                            Personalize your dashboard by managing widgets: add, remove, or reorder them to fit your workflow.
                        </p>

                        <div className="space-y-4">
                            {widgetOptions.map(widget => (
                                <div key={widget.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <Menu size={20} className="text-gray-500" />
                                        <span className="text-gray-700">{widget.name}</span>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id={widget.id}
                                            checked={widget.enabled}
                                            onChange={() => toggleWidget(widget.id)}
                                            className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t flex gap-4 justify-end">
                        <button
                            onClick={resetToDefault}
                            className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                            Reset to Default
                        </button>
                        <button
                            onClick={saveChanges}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Example usage in parent component
const WidgetBar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Your main dashboard content here */}

            {/* Button to open sidebar */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
            >
                <Menu size={24} />
            </button>

            {/* Sidebar component */}
            <ManageWidgetSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
        </div>
    );
};

export default WidgetBar;