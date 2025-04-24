import React, { useState, useEffect } from 'react';
import { Check, Menu, X } from 'lucide-react';

interface WidgetOption {
  id: string;
  name: string;
  enabled: boolean;
}

const ManageWidgetModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [widgetOptions, setWidgetOptions] = useState<WidgetOption[]>([
    { id: 'programs', name: 'Programs', enabled: true },
    { id: 'groupCalls', name: 'Group Calls', enabled: true },
    { id: 'mentors', name: 'Mentors', enabled: true },
    { id: 'recentActivities', name: 'Recent Activities', enabled: true },
    { id: 'application', name: 'Application', enabled: true },
    { id: 'earnings', name: 'Earnings', enabled: false },
    { id: 'forum', name: 'Forum', enabled: false },
    { id: 'programAnalysis', name: 'Program Analysis', enabled: false },
  ]);
  
  const [isRendered, setIsRendered] = useState(false);
  
  // Modal animation timing
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300); 
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
 
  if (!isRendered && !isOpen) return null;

  const toggleWidget = (id: string) => {
    setWidgetOptions(
      widgetOptions.map(widget => 
        widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
      )
    );
  };

  const handleSaveChanges = () => {
   
    console.log('Saving widget preferences:', widgetOptions);
    onClose();
  };

  const handleResetToDefault = () => {
    setWidgetOptions(
      widgetOptions.map(widget => ({
        ...widget,
        enabled: ['programs', 'groupCalls', 'mentors', 'recentActivities', 'application'].includes(widget.id)
      }))
    );
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop with blur effect */}
      <div 
        className={`absolute inset-0 bg-  transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? 'bg-opacity-30' : 'bg-opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal panel sliding from right */}
      <div 
       className={`absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      >
        
        <div className="p-6 pb-0 flex flex-col">
        <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none flex justify-end cursor-pointer"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-medium text-purple-700 py-4">Manage Widget</h2>

        </div>
        
        <p className="px-6 text-sm text-gray-500">
          Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
        </p>
        
        {/* Widget options */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {widgetOptions.map((widget) => (
            <div key={widget.id} className="flex items-center justify-between py-2">
              
              <div className="flex items-center gap-3">
                <Menu size={20} />
                <span className="text-gray-700">{widget.name}</span>
              </div>
              <button
                onClick={() => toggleWidget(widget.id)}
                className={`w-5 h-5 rounded flex items-center justify-center ${
                  widget.enabled ? 'bg-green-500' : 'border border-gray-300'
                }`}
              >
                {widget.enabled && <Check size={16} color="white" />}
              </button>
            </div>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
          <div className="flex gap-3 justify-start">
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
            >
              Save Changes
            </button>
            <button
              onClick={handleResetToDefault}
              className="px-4 py-2 border border-purple-700 text-purple-700 rounded hover:bg-purple-50 transition"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWidgetModal;