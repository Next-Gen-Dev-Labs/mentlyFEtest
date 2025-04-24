import ProgramsSection from '@/components/ui/Dashboard/ProgramSection';
import GroupCallsSection from '@/components/ui/Dashboard/GroupCallsSection';
import { Button } from '@/components/ui/button';
import ApplicationsSection from '@/components/ui/Dashboard/ApplicationsSection';
import MentorsSection from '@/components/ui/Dashboard/MentorsSection';
import RecentActivitiesSection from '@/components/ui/Dashboard/RecentActivities';
import UserStatsSection from '@/components/ui/Dashboard/UserStatsSection';

export default function DashboardMainContent() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen max-w-[1110px] overflow-x-hidden">
      {/* Welcome Message */}
      <div className="bg-purple-600 text-white rounded-xl px-6 py-5 mb-6 flex justify-between items-center flex-wrap">
        <h2 className="text-[20px] font-bold">Welcome Aboard, Alpha 👋</h2>
        <p className="text-[16px] font-semibold text-[#BDBDBD]">We’re thrilled to have you join Techrity Team!</p>
        <Button className='bg-white hover:bg-white text-black text-[16px]'>Update Profile</Button>
      </div>

      {/* Programs + Group Calls Scrollable Row */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ">
        <div className="flex flex-col ">
          <ProgramsSection />
          <UserStatsSection/>
        </div>
        <div className="">
          <GroupCallsSection />
          <div className='flex gap-3'>
          <ApplicationsSection/>
          <div className='flex flex-col'>
            <MentorsSection/>
            <RecentActivitiesSection/>
          </div>
          

          </div>
         
        </div>
      </div>
    </div>
  );
}
