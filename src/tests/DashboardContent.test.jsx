import React from 'react';
import ProgramsList from './ProgramsList';
import UserStatsCard from './UserStatsCard';
import MentorsCard from './MentorsCard';
import RecentActivities from './RecentActivities';
import GroupCalls from './GroupCalls';
import ApplicationsCard from './ApplicationsCard';

const DashboardContent = () => {
  return (
    <main className="flex-1 p-4 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ProgramsList />
        </div>
        <div>
          <UserStatsCard />
        </div>
        <div>
          <MentorsCard />
        </div>
        <div>
          <RecentActivities />
        </div>
        <div>
          <GroupCalls />
        </div>
        <div className="lg:col-span-2">
          <ApplicationsCard />
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
