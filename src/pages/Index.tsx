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
import GroupCallSection from '@/components/dashboard/GroupCallSection';

// Mock data
const programsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80',
    title: 'Fundamentals of User Interface & Experience',
    description: 'This program aims to guide you through the foundations of UI/UX design and help you build a strong portfolio.',
    instructors: [
      { name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
      { name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
    ],
    timeAgo: 'Started 1 hour ago',
    status: 'ongoing',
    participantsCount: 24,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&q=80',
    title: 'Colour Heist Practical Design Call',
    description: 'This program aims to guide you through the foundations of UI/UX design and help you build a strong portfolio.',
    instructors: [
      { name: 'Sarah Brown', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
    ],
    timeAgo: 'Started 2 hours ago',
    status: 'ongoing',
    participantsCount: 18,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80',
    title: 'Weekly Meeting - Product Demo Review with Testers',
    description: 'This program aims to guide you through the foundations of UI/UX design and help you build a strong portfolio.',
    instructors: [
      { name: 'Michael Johnson', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
      { name: 'Emily Wilson', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
    ],
    timeAgo: 'Started 30 minutes ago',
    status: 'ongoing',
    participantsCount: 12,
  },
];

const applicationsData = [
  {
    id: 1,
    name: 'Maxwell Smith',
    email: 'maxwellsmith@gmail.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 2,
    name: 'Adaafi Samuel',
    email: 'adaafisamuel@gmail.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
  }
];

const mentorsData = [
  {
    id: 1,
    name: 'Maxwell Smith',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 2,
    name: 'Adaafi Samuel',
    role: 'Product Manager',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
  }
];

const userStatsData = {
  active: 160,
  inProgress: 52,
  pending: 28,
  total: 240,
};

const activitiesData = [
  {
    id: 1,
    title: 'KYC Verification',
    description: 'All new projects will have to verify on Monday',
    timeAgo: '20 minutes ago',
    iconUrl: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 2,
    title: 'New User Sign Up!',
    description: 'We have new users signed up on Monday',
    timeAgo: '25 minutes ago',
    iconUrl: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 3,
    title: 'Withdrawal Request',
    description: 'All new projects had entered to verify mode',
    timeAgo: '30 minutes ago',
    iconUrl: 'https://i.pravatar.cc/150?img=12',
  }
];

const groupCallParticipants = [
  {
    name: 'Sarah Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?img=13',
    isMuted: false,
    isVideoOn: true,
    isSpeaking: true,
  },
  {
    name: 'Michael Wilson',
    avatarUrl: 'https://i.pravatar.cc/150?img=14',
    isMuted: false,
    isVideoOn: true,
    isSpeaking: false,
  },
  {
    name: 'Adaafi Samuel',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    isMuted: true,
    isVideoOn: false,
    isSpeaking: false,
  },
  {
    name: 'Blessing O.',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    isMuted: false,
    isVideoOn: true,
    isSpeaking: false,
  }
];

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header username="Techrity Forum" userRole="Member" />
        <div className="flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-4 overflow-y-auto">
          <WelcomeBanner username="Blessing" />

          <div className="mt-4 md:mt-6">
            {/* Group Call Section */}
            <GroupCallSection 
              participants={groupCallParticipants}
              callTitle="UI/UX Weekly Group Call"
              time="Wed, 10:30am - 11:30am"
              onLeave={() => toast({
                title: "You left the call",
                description: "You have left the group call.",
                variant: "destructive"
              })}
            />
          </div>

          {/* Programs Section */}
          <div className="mt-4 md:mt-6">
            <SectionHeader title="Programs" showFilter />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {programsData.map(program => (
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 md:mt-6">
            {/* Applications Section */}
            <div>
              <SectionHeader title="Applications" />
              <div className="space-y-3">
                {applicationsData.map(application => (
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

            {/* Mentors Section */}
            <div>
              <SectionHeader title="Mentors" />
              <div className="space-y-3">
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
              <div className="mt-4 text-center">
                <button className="text-xs text-techrity-purple font-medium hover:underline focus:underline transition-colors">
                  See all
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 md:mt-6">
            {/* Users Section */}
            <div className="bg-white rounded-lg shadow-sm p-2 sm:p-4 animate-fade-in">
              <SectionHeader title="Users" />
              <div>
                <UserStatsChart stats={userStatsData} />
              </div>
            </div>
            {/* Recent Activities Section */}
            <div className="bg-white rounded-lg shadow-sm p-2 sm:p-4 animate-fade-in">
              <SectionHeader title="Recent Activities" />
              <div className="mt-4">
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
  );
};

export default Index;
