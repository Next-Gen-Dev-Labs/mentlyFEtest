'use client';
import { useSidebar } from '@/hooks/useSidebar'; 
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import WelcomeBanner from '@/components/dashboard/welcome-banner';
import ProgramsWidget from '@/components/dashboard/widgets/programs-widget';
import GroupCallsWidget from '@/components/dashboard/widgets/group-calls-widget';
import ApplicationsWidget from '@/components/dashboard/widgets/applications-widget';
import MentorsWidget from '@/components/dashboard/widgets/mentors-widget';
import UsersWidget from '@/components/dashboard/widgets/users-widget';
import ManageWidgetsButton from '@/components/dashboard/manage-widgets-button';
import { WidgetsProvider } from '@/components/dashboard/widgets-context';
import RecentActivitiesWidget from "@/components/dashboard/widgets/recent-activities-widget"

export default function HomePage() {
  const { sidebarOpen, toggleSidebar } = useSidebar(); 

  return (
    <div className="flex min-h-screen">
      <div className="fixed inset-y-0 left-0 z-50 w-64">
        <Sidebar isOpen={sidebarOpen} />
      </div>

      <div className="flex-1 flex flex-col ml-64">
        <Header onToggleSidebar={toggleSidebar} /> 
        <WidgetsProvider>
          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div></div>
                <ManageWidgetsButton />
              </div>

              <WelcomeBanner
                name="Blessing"
                message="We're thrilled to have you join Techrity Team!"
              />

              <ProgramsWidget />
              <GroupCallsWidget />
              {/* <StudentsWidget /> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ApplicationsWidget />
                <MentorsWidget />
                <RecentActivitiesWidget />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UsersWidget />
              </div>
            </div>
          </main>
        </WidgetsProvider>
      </div>
    </div>
  );
}
