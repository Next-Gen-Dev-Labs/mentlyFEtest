import WelcomeHeader from './welcome-header';
import ProgramsSection from './programs-section';
import UsersSection from './users-section';
import ActivitiesSection from './activities-section';
import ApplicationsSection from './applications-section';
import MentorsSection from './mentors-section';
import GroupCallSection from './groupCall-Section';

export default function Dashboard() {
  return (
    <div className="space-y-6 overflow-hidden">
      <WelcomeHeader name="Blessing" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
        <ProgramsSection className="md:col-span-1" />
        <UsersSection />
        </div>
        <div className="space-y-6 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <GroupCallSection />
        <div className="grid grid-cols-1 md:grid-cols-2  md:space-x-10">
          <ApplicationsSection />
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">	
          <MentorsSection />
          <ActivitiesSection />
          </div>
        </div>
          </div>
         
        </div>
      </div>
      
      
    </div>
  );
}