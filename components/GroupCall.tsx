// GroupCalls.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Img1 from "@/public/Images/img1.jpg"
import Img2 from "@/public/Images/img2.jpg"
import Img3 from "@/public/Images/img3.jpg"
interface Mentor {
  id: string;
  name: string;
  avatar: StaticImageData;
}

interface StudyGroup {
  id: string;
  name: string;
  avatar: StaticImageData;
}

interface GroupCall {
  id: string;
  title: string;
  image: StaticImageData;
  date: string;
  timeRange: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  studyGroup: StudyGroup;
  mentors: Mentor[];
}

const GroupCallCard: React.FC<{ call: GroupCall }> = ({ call }) => {
  return (
    <div className="flex-shrink-0  rounded-md w-full max-w-[300px]">
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
        {/* Call Image */}
        <div className="h-20 p-2">
          <Image
            src={call.image}
            alt={call.title}
            // layout="fill"
            width={100}
            height={100}
            objectFit="cover"
            className="rounded-md h-24 w-full object-cover"
          />
        </div>

        {/* Status Badge */}
        <div className="ml-4 mt-7">
          <span className={`
            inline-flex items-center px-2 py-1 rounded-full text-sm font-medium
            ${call.status === 'Ongoing' ? 'bg-green-100 text-green-800' : ''}
            ${call.status === 'Upcoming' ? 'bg-purple-100 text-purple-800' : ''}
            ${call.status === 'Completed' ? 'bg-gray-100 text-gray-800' : ''}
          `}>
            {call.status === 'Ongoing' && (
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            )}
            {call.status === 'Upcoming' && (
              <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
            )}
            {call.status}
          </span>
        </div>

        {/* Call Content */}
        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-800 mb-2 border-b-2">{call.title}</h3>

          {/* Date and Time */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center text-sm text-gray-500 border-r-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {call.date}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {call.timeRange}
            </div>
          </div>

          {/* Study Group and Mentors */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full overflow-hidden mr-2">
                <Image
                  src={call.studyGroup.avatar}
                  alt={call.studyGroup.name}
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs text-gray-500">Study Group</div>
                <div className="text-xs font-medium">{call.studyGroup.name}</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500 mr-2">Mentors</div>
              <div className="flex -space-x-2">
                {call.mentors.map((mentor) => (
                  <div key={mentor.id} className="h-6 w-6 rounded-full border border-white overflow-hidden">
                    <Image
                      src={mentor.avatar}
                      alt={mentor.name}
                      width={24}
                      height={24}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 gap-3">
            <button className=" px-2 text-purple-600 border border-purple-600 rounded-md text-sm font-medium">
              View Participant
            </button>
            <button className={` flex px-4 py-4 text-purple-600 border border-purple-600 rounded-md text-sm font-medium  ${call.status === 'Ongoing' ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-600 '}`}>

              Join Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GroupCalls: React.FC = () => {
  // Sample data
  const groupCalls: GroupCall[] = [
    {
      id: '1',
      title: 'Weekly Meeting - Product Demo Review with Testers',
      image: Img1,
      date: 'Mon. Jul 30, 2024',
      timeRange: '9:00 - 11:00AM',
      status: 'Ongoing',
      studyGroup: {
        id: '1',
        name: 'UX Strategy Study group',
        avatar: Img3,
      },
      mentors: [
        { id: '1', name: 'John Doe', avatar: Img3 },
        { id: '2', name: 'Jane Smith', avatar: Img3 },
        { id: '3', name: 'Bob Johnson', avatar: Img3 },
      ],
    },
    {
      id: '2',
      title: 'Weekly Meeting - Product Demo Review with Testers',
      image: Img2,
      date: 'Mon. Jul 30, 2024',
      timeRange: '9:00 - 11:00AM',
      status: 'Upcoming',
      studyGroup: {
        id: '1',
        name: 'UX Strategy Study group',
        avatar: Img3,
      },
      mentors: [
        { id: '1', name: 'John Doe', avatar: Img3 },
        { id: '2', name: 'Jane Smith', avatar: Img3 },
        { id: '3', name: 'Bob Johnson', avatar: Img3 },
      ],
    },
    {
      id: '3',
      title: 'Weekly Meeting - Product Demo Review with Testers',
      image: Img1,
      date: 'Mon. Jul 30, 2024',
      timeRange: '9:00 - 11:00AM',
      status: 'Ongoing',
      studyGroup: {
        id: '1',
        name: 'UX Strategy Study group',
        avatar: Img3,
      },
      mentors: [
        { id: '1', name: 'John Doe', avatar: Img3 },
        { id: '2', name: 'Jane Smith', avatar: Img3 },
        { id: '3', name: 'Bob Johnson', avatar: Img3 },
      ],
    },
  ];

  return (
    <div className="px-4  bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-sm text-gray-500 font-medium">Group Calls</h1>
        </div>
        <div className="flex items-center">
          <Link href="/group-calls" className="text-purple-600 text-sm font-medium mr-4">
            See all
          </Link>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Group Call Cards - Horizontal Scrollable */}
      <div className="flex space-x-1 overflow-x-auto ">
        {groupCalls.map((call) => (
          <GroupCallCard key={call.id} call={call} />
        ))}
      </div>
    </div>
  );
};

export default GroupCalls;