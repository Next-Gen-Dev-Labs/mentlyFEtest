import ProgramSection from '../sections/ProgramSection'
import GroupCallSection from '../sections/GroupCallSection'
import ApplicationSection from '../sections/ApplicationSection'
import MentorSection from '../sections/MentorSection'
import UserStatsSection from '../sections/UserStatsSection'
import RecentActivitiesSection from '../sections/RecentActivitiesSection'

const Dashboard = () => {
  return (
    <section className="max-w-screen-xl mx-auto mt-4 px-4 grid grid-cols-1 lg:grid-cols-12 gap-2">
    {/* LEFT CONTAINER */}
    <div className="flex flex-col gap-4 lg:col-span-4">
      <div className="rounded-2xl bg-white p-4 shadow-lg">
        <ProgramSection />
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-lg">
        <UserStatsSection />
      </div>
    </div>
  
    {/* RIGHT CONTAINER */}
    <div className="flex flex-col gap-4 lg:col-span-8">
      {/* GroupCall on top full width */}
      <div className="rounded-2xl bg-white p-4 shadow-lg w-full">
        <GroupCallSection />
      </div>
  
      {/* Application + Mentor beside each other */}
      <div className="flex flex-col lg:flex-row gap-4">
  {/* Left Side - Application */}
  <div className="lg:w-[62%] rounded-2xl bg-white p-4 shadow-lg">
    <ApplicationSection />
  </div>

  {/* Right Side - Mentor + Recent */}
  <div className="lg:w-[38%] flex flex-col gap-4">
    <div className="rounded-2xl bg-white p-4 shadow-lg">
      <MentorSection />
    </div>
    <div className="rounded-2xl bg-white p-4 shadow-lg">
      <RecentActivitiesSection />
    </div>
  </div>
</div>
    </div>
  </section>
  
  );
};

export default Dashboard;
