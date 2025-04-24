'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import WidgetArrangement from '@/components/WidgetArrangement';
import WelcomeBanner from '@/components/WelcomeBanner';
import ProgramsWidget from '@/components/widgets/ProgramsWidget';
import GroupCallsWidget from '@/components/widgets/GroupCallsWidget';
import UsersWidget from '@/components/widgets/UsersWidget';
import ApplicationsWidget from '@/components/widgets/ApplicationsWidget';
import MentorsWidget from '@/components/widgets/MentorsWidget';
import RecentActivitiesWidget from '@/components/widgets/RecentActivitiesWidget';

interface Widget {
  id: string;
  name: string;
  isVisible: boolean;
  component: string;
}

export default function Home() {
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

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderWidget = (widget: Widget) => {
    if (!widget.isVisible) return null;

    switch (widget.component) {
      case 'ProgramsWidget':
        return <ProgramsWidget key={widget.id} />;
      case 'GroupCallsWidget':
        return <GroupCallsWidget key={widget.id} />;
      case 'UsersWidget':
        return <UsersWidget key={widget.id} />;
      case 'ApplicationsWidget':
        return <ApplicationsWidget key={widget.id} />;
      case 'MentorsWidget':
        return <MentorsWidget key={widget.id} />;
      case 'RecentActivitiesWidget':
        return <RecentActivitiesWidget key={widget.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 ml-48">
        <TopBar />
        <main className="pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end mb-4">
              <WidgetArrangement onWidgetsChange={setWidgets} />
            </div>
            <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <WelcomeBanner />
            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Left Column - Programs and Users */}
              <div className="flex flex-col gap-4">
                {widgets
                  .filter(widget => ['ProgramsWidget', 'UsersWidget'].includes(widget.component))
                  .map(renderWidget)}
              </div>
              {/* Right Column - Group Calls, Applications, Mentors, and Recent Activities */}
              <div className="flex flex-col gap-4">
                {/* Group Calls */}
                {widgets
                  .filter(widget => widget.component === 'GroupCallsWidget')
                  .map(renderWidget)}
                {/* Applications, Mentors, and Recent Activities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Applications */}
                  <div className="animate-fade-in">
                    {widgets
                      .filter(widget => widget.component === 'ApplicationsWidget')
                      .map(renderWidget)}
                  </div>
                  {/* Mentors and Recent Activities */}
                  <div className="flex flex-col gap-4 animate-fade-in">
                    {widgets
                      .filter(widget => ['MentorsWidget', 'RecentActivitiesWidget'].includes(widget.component))
                      .map(renderWidget)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
