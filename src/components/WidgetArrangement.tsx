'use client';

import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ManageWidgetsSidebar from './ManageWidgetsSidebar';
import Image from 'next/image';

interface Widget {
  id: string;
  name: string;
  isVisible: boolean;
  component: string;
}

interface WidgetArrangementProps {
  onWidgetsChange: (widgets: Widget[]) => void;
}

const WidgetArrangement = ({ onWidgetsChange }: WidgetArrangementProps) => {
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(1);
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

  const handleWidgetsChange = (newWidgets: Widget[]) => {
    setWidgets(newWidgets);
    onWidgetsChange(newWidgets);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedLayout(1)}
            className={`p-1 transition-all duration-200 ${
              selectedLayout === 1 
                ? 'border border-[#8B72FC] bg-[#8B72FC]/10' 
                : 'opacity-50 hover:opacity-75'
            }`}
          >
            <Image
              src={selectedLayout === 1 ? "/wdg-picked01.png" : "/wdg-arrange01.png"}
              alt="Layout 1"
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
          </button>
          <button 
            onClick={() => setSelectedLayout(2)}
            className={`p-1 transition-all duration-200 ${
              selectedLayout === 2 
                ? 'border border-[#8B72FC] bg-[#8B72FC]/10' 
                : 'opacity-50 hover:opacity-75'
            }`}
          >
            <Image
              src={selectedLayout === 2 ? "/wdg-picked02.png" : "/wdg-arrange02.png"}
              alt="Layout 2"
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
          </button>
        </div>
        <button
          onClick={() => setIsManageOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
          Manage Widgets
        </button>
      </div>

      {/* Blur overlay */}
      {isManageOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10" onClick={() => setIsManageOpen(false)} />
      )}

      <ManageWidgetsSidebar
        isOpen={isManageOpen}
        onClose={() => setIsManageOpen(false)}
        onWidgetsChange={handleWidgetsChange}
      />
    </DndProvider>
  );
};

export default WidgetArrangement; 