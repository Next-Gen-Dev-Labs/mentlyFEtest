'use client';

import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

interface Widget {
  id: string;
  name: string;
  isVisible: boolean;
  component: string;
}

const ManageWidgetsSidebar = ({ isOpen, onClose, onWidgetsChange }: { isOpen: boolean; onClose: () => void; onWidgetsChange: (widgets: Widget[]) => void }) => {
  const [widgets, setWidgets] = useState<Widget[]>([
    { id: 'programs', name: 'Programs', isVisible: true, component: 'ProgramsWidget' },
    { id: 'group-calls', name: 'Group Calls', isVisible: true, component: 'GroupCallsWidget' },
    { id: 'mentors', name: 'Mentors', isVisible: true, component: 'MentorsWidget' },
    { id: 'recent-activities', name: 'Recent Activities', isVisible: true, component: 'RecentActivitiesWidget' },
    { id: 'applications', name: 'Application', isVisible: true, component: 'ApplicationsWidget' },
    { id: 'earnings', name: 'Earnings', isVisible: false, component: 'EarningsWidget' },
    { id: 'forum', name: 'Forum', isVisible: false, component: 'ForumWidget' },
    { id: 'program-analysis', name: 'Program Analysis', isVisible: false, component: 'ProgramAnalysisWidget' },
  ]);

  const handleToggle = (id: string) => {
    const updatedWidgets = widgets.map(widget =>
      widget.id === id ? { ...widget, isVisible: !widget.isVisible } : widget
    );
    setWidgets(updatedWidgets);
    onWidgetsChange(updatedWidgets);
  };

  const handleReset = () => {
    const defaultWidgets = widgets.map(widget => ({
      ...widget,
      isVisible: ['programs', 'group-calls', 'mentors', 'recent-activities', 'applications'].includes(widget.id)
    }));
    setWidgets(defaultWidgets);
    onWidgetsChange(defaultWidgets);
  };

  const moveWidget = (dragIndex: number, hoverIndex: number) => {
    const draggedWidget = widgets[dragIndex];
    const newWidgets = [...widgets];
    newWidgets.splice(dragIndex, 1);
    newWidgets.splice(hoverIndex, 0, draggedWidget);
    setWidgets(newWidgets);
    onWidgetsChange(newWidgets);
  };

  const handleSaveChanges = () => {
    onWidgetsChange(widgets);
    onClose();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div 
        className={`fixed right-0 top-0 h-screen w-80 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="px-4">
          <div className="flex justify-end">
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="border-b border-gray-200 mt-4" />
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#6F01D0]">Manage Widget</h2>
          </div>
        </div>

        {/* Description */}
        <div className="p-4">
          <p className="text-xs font-semibold text-gray-500">
            Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
          </p>
        </div>

        {/* Widgets List */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          {widgets.map((widget, index) => (
            <DraggableWidget
              key={widget.id}
              widget={widget}
              index={index}
              moveWidget={moveWidget}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <button
              onClick={handleSaveChanges}
              className="flex-1 px-2 bg-[#6F01D0] text-sm text-white rounded-lg hover:bg-[#8B72FC] transition-colors duration-200"
            >
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="flex-1 py-2 px-2 text-sm border border-[#6F01D0] text-[#6F01D0] rounded-lg hover:bg-[#DDD6FB] transition-colors duration-200"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

const DraggableWidget = ({ widget, index, moveWidget, onToggle }: { widget: Widget; index: number; moveWidget: (dragIndex: number, hoverIndex: number) => void; onToggle: (id: string) => void }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'widget',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'widget',
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveWidget(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const ref = (node: HTMLDivElement | null) => {
    drag(drop(node));
  };

  return (
    <div
      ref={ref}
      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
        isDragging ? 'opacity-50 bg-gray-100' : 'opacity-100 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="cursor-move">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-gray-700">{widget.name}</span>
      </div>
      <input
        type="checkbox"
        checked={widget.isVisible}
        onChange={() => onToggle(widget.id)}
        className="h-4 w-4 text-[#6F01D0] rounded border-gray-300 focus:ring-[#6F01D0] transition-colors duration-200"
      />
    </div>
  );
};

export default ManageWidgetsSidebar; 