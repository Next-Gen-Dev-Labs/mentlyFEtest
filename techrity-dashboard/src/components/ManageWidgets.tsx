import { useState } from 'react';
import { Menu, Check, Square } from 'lucide-react';

interface Widget {
  id: string;
  name: string;
  enabled: boolean;
}

export default function ManageWidget() {
  const [widgets, setWidgets] = useState<Widget[]>([
    { id: '1', name: 'Programs', enabled: true },
    { id: '2', name: 'Group Calls', enabled: true },
    { id: '3', name: 'Mentors', enabled: true },
    { id: '4', name: 'Recent Activities', enabled: true },
    { id: '5', name: 'Application', enabled: true },
    { id: '6', name: 'Earnings', enabled: false },
    { id: '7', name: 'Forum', enabled: false },
    { id: '8', name: 'Program Analysis', enabled: false },
  ]);

  const toggleWidget = (id: string) => {
    setWidgets(
      widgets.map(widget => 
        widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
      )
    );
  };

  const resetToDefault = () => {
    setWidgets(
      widgets.map(widget => ({
        ...widget,
        enabled: ['1', '2', '3', '4', '5'].includes(widget.id)
      }))
    );
  };

  const saveChanges = () => {
    // Here you would typically save the state to your backend
    console.log('Saving widget configuration:', widgets);
    // Could add a toast notification here
  };

  return (
    <div className="max-w-md mx-auto overflow-y-auto p-6 bg-white rounded-lg shadow">
        <div className="border border-b mt-5"></div>
      <h1 className="text-3xl font-bold text-purple-700 mb-2 mt-10">Manage Widget</h1>
      
      <p className="text-gray-600 mb-6">
        Personalize your dashboard by managing widgets add,
        remove, or reorder them to fit your workflow.
      </p>
      
      <div className="space-y-4 mb-6">
        {widgets.map(widget => (
          <div 
            key={widget.id} 
            className="flex items-center justify-between py-2 border-b border-gray-100"
          >
            <div className="flex items-center">
              <Menu size={18} className="text-gray-500 mr-3" />
              <span className="text-gray-700">{widget.name}</span>
            </div>
            
            <button 
              onClick={() => toggleWidget(widget.id)}
              className={`w-5 h-5 flex items-center justify-center rounded ${
                widget.enabled ? 'bg-green-500' : 'border border-gray-300'
              }`}
            >
              {widget.enabled && <Check size={14} className="text-white" />}
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <button 
          onClick={saveChanges}
          className="flex-1 py-3 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition-colors"
        >
          Save Changes
        </button>
        
        <button 
          onClick={resetToDefault}
          className="flex-1 py-3 text-purple-700 font-medium border border-purple-700 rounded-md hover:bg-purple-50 transition-colors"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}