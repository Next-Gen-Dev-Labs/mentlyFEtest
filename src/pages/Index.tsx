import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import SectionHeader from '@/components/dashboard/SectionHeader';
import ProgramCard from '@/components/dashboard/ProgramCard';
import ApplicationCard from '@/components/dashboard/ApplicationCard';
import MentorCard from '@/components/dashboard/MentorCard';
import UserStatsChart from '@/components/dashboard/UserStatsChart';
import ActivityItem from '@/components/dashboard/ActivityItem';
import { useToast } from '@/hooks/use-toast';
import GroupCallsCarousel from '@/components/dashboard/GroupCallsCarousel';
import { activitiesData, applicationsData, mentorsData, mockGroupCallsData, programsData, userStatsData } from '@/mock-data';
import { PlusCircle } from 'lucide-react';


const Index = () => {
  const { toast } = useToast();

  const handleAccept = (name: string) => {
    toast({
      title: "Application accepted",
      description: `You've accepted ${name}'s application.`,
    });
  };

  const handleReject = (name: string) => {
    toast({
      title: "Application rejected",
      description: `You've rejected ${name}'s application.`,
      variant: "destructive",
    });
  };

  const handleMessage = (name: string) => {
    toast({
      title: "Message sent",
      description: `Opening chat with ${name}.`,
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area - scrollable */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header username="Techrity Forum" userRole="Member" />
        <div className="flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-4 overflow-y-auto">
          <WelcomeBanner username="Blessing" />

          {/* Programs Section */}
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4">
            {/* Programs on the left */}
            <div className="md:w-1/3">
              <SectionHeader title="Programs" showFilter />
              <div className="">
                {programsData.slice(0, 2).map(program => (
                  <ProgramCard
                    key={program.id}
                    image={program.image}
                    title={program.title}
                    description={program.description}
                    instructors={program.instructors}
                    timeAgo={program.timeAgo}
                    status={program.status as 'ongoing' | 'upcoming'}
                    participantsCount={program.participantsCount}
                  />
                ))}
              </div>

              {/* Users Section */}
              <div className="bg-white rounded-lg shadow-sm p-2 sm:p-4 animate-fade-in w-full my-2 border">
                <SectionHeader title="Users" />
                <div>
                  <UserStatsChart stats={userStatsData} />
                </div>
              </div>
            </div>


            {/* Additional content on the right */}
            <div className="md:flex-1 md:w-2/3 overflow-hidden">
              <div className="w-full">
                {/* Group Calls Carousel */}
                <GroupCallsCarousel
                  groupCalls={mockGroupCallsData}
                  onJoin={(id) => toast({
                    title: "You joined the call",
                    description: `You have joined group call #${id}.`,
                  })}
                  onViewParticipants={(id) => toast({
                    title: "Viewing participants",
                    description: `Showing participants for group call #${id}.`,
                  })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-4 md:mt-6">
                {/* Applications Section */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-full">
                    <SectionHeader title="Applications" />
                    <div className="space-y-2">
                      <h2 className='text-techrity-muted/50 font-bold text-xs mb-2'>Mentors</h2>
                      {applicationsData.mentors.map(application => (
                        <ApplicationCard
                          key={application.id}
                          name={application.name}
                          email={application.email}
                          avatarUrl={application.avatarUrl}
                          attribute={application.attribute}
                          onAccept={() => handleAccept(application.name)}
                          onReject={() => handleReject(application.name)}
                        />
                      ))}
                    </div>

                    <div className="space-y-4 mt-4">
                      <h2 className='text-techrity-muted/50 font-bold text-xs mb-2'>Students</h2>
                      {applicationsData.students.map(application => (
                        <ApplicationCard
                          key={application.id}
                          name={application.name}
                          email={application.email}
                          avatarUrl={application.avatarUrl}
                          onAccept={() => handleAccept(application.name)}
                          onReject={() => handleReject(application.name)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Mentors Section */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <SectionHeader title="Mentors" renderSeeAll={() => (
                      <button>
                        <PlusCircle className='text-techrity-muted/30' />
                      </button>
                    )} />
                    <div className="space-y-3 mt-2">
                      {mentorsData.map(mentor => (
                        <MentorCard
                          key={mentor.id}
                          name={mentor.name}
                          role={mentor.role}
                          avatarUrl={mentor.avatarUrl}
                          onMessage={() => handleMessage(mentor.name)}
                        />
                      ))}
                    </div>
                    <div className="mt-4">
                      <button className="text-techrity-purple font-medium hover:underline focus:underline transition-colors bg-techrity-purple/20 w-full py-2 rounded-full text-md">
                        See all
                      </button>
                    </div>
                  </div>

                  {/* Recent Activities Section */}
                  <div className="bg-white rounded-lg shadow-sm p-4 animate-fade-in">
                    <SectionHeader title="Recent Activities" />
                    <div className="mt-3">
                      {activitiesData.map(activity => (
                        <ActivityItem
                          key={activity.id}
                          title={activity.title}
                          description={activity.description}
                          timeAgo={activity.timeAgo}
                          iconUrl={activity.iconUrl}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
