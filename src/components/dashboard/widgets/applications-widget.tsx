'use client';

import { Menu, MoreVertical } from 'lucide-react';
import { useWidgets } from '../widgets-context';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface MentorApplication {
  id: string;
  name: string;
  image: string;
  title: string;
  email: string;
  role?: string;
  experience?: string;
}

interface HeadApplication {
  id: string;
  name: string;
  image: string;
  email: string;
  role?: string;
  experience?: string;
  location?: string;
  time?: string;
}

const HeadApplications: HeadApplication[] = [
  {
    id: '1',
    name: 'Maxwell Smith',
    email: 'maxwellsmith@gmail.com',
    image: 'assets/images/programs/pro-icon1.jpg',
    experience: '4 years Experience',
    role: 'Product Designer',
    location: 'Lagos, Nigeria',
    time: 'GMT +1',
  },
];

const mentorApplications: MentorApplication[] = [
  {
    id: '1',
    name: 'Maxwell Smith',
    email: 'maxwellsmith@gmail.com',
    image: 'assets/images/programs/pro-icon1.jpg',
    title: 'Product Designer',
  },
  {
    id: '2',
    name: 'Adeati Samuel',
    email: 'maxwellsmith@gmail.com',
    image: 'assets/images/programs/pro-icon2.jpg',
    title: 'Product Designer',
  },
  {
    id: '3',
    name: 'Adeati Samuel',
    email: 'maxwellsmith@gmail.com',
    role: 'Product Designer',
    experience: 'Senior Experience',
    image: 'assets/images/programs/pro-icon3.jpg',
    title: 'Product Designer',
  },
  {
    id: '4',
    name: 'Maxwell Smith',
    email: 'maxwellsmith@gmail.com',
    image: 'assets/images/programs/pro-icon1.jpg',
    title: 'Product Designer',
  },
];

export default function ApplicationsWidget() {
  const { widgets } = useWidgets();

  if (!widgets.applications) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-4 px-4 sm:px-6 md:px-8">
        <div className="flex items-center">
          <Menu className="w-6 h-6 text-gray-700" />
          <h3 className="font-medium text-gray-500">Applications</h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-purple-600 cursor-pointer">See all</span>
          <MoreVertical className="text-gray-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 w-full shadow-md">
        <h4 className="font-medium mb-4">Mentors</h4>
        {HeadApplications.map((application, index) => (
          <div
            key={application.id}
            className={`flex flex-col sm:flex-row items-center justify-between ${
              index < HeadApplications.length - 1 ? 'mb-4 pb-4 border-b' : ''
            }`}
          >
            <div className="flex items-center w-full sm:w-auto">
              <Checkbox className="mr-3" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <img
                  src={application.image}
                  alt={application.role}
                  className="w-10 h-8 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{application.name}</div>
                <div className="text-xs text-gray-500">{application.email}</div>
                {application.role && (
                  <div className="flex flex-wrap items-center text-xs mt-1 space-x-2">
                    <span className="bg-pink-100 text-pink-600 rounded-lg px-2 py-0.5 whitespace-nowrap">{application.role}</span>
                    <span className="bg-green-100 text-green-600 rounded-lg px-2 py-0.5 whitespace-nowrap">
                      {application.experience}
                    </span>
                    <span className="bg-blue-100 text-black rounded-lg px-2 py-0.5 whitespace-nowrap">{application.location}</span>
                    <span className="bg-gray-300 text-black rounded-lg px-2 py-0.5 whitespace-nowrap">{application.time}</span>
                  </div>
                )}
              </div>

              <hr className="border-t-8 border-black my-4"></hr>
            </div>

            <div className="flex items-center space-x-1 mt-2 sm:mt-0">
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-red-200 text-red-900 border-red-200 hover:bg-red-200 hover:text-red-700"
              >
                Reject
              </Button>
              <Button size="sm" className="text-xs text-white bg-purple-900 hover:bg-purple-700">
                Accept
              </Button>
            </div>
          </div>
        ))}

        <hr></hr>
        <br />
        <h4 className="font-medium mb-4">Students</h4>

        {mentorApplications.map((application, index) => (
          <div
            key={application.id}
            className={`flex flex-col sm:flex-row items-center justify-between ${
              index < mentorApplications.length - 1 ? 'mb-4 pb-4 border-b' : ''
            }`}
          >
            <div className="flex items-center w-full sm:w-auto">
              <Checkbox className="mr-3" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <img
                  src={application.image}
                  alt={application.title}
                  className="w-10 h-8 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{application.name}</div>
                <div className="text-xs text-gray-500">{application.email}</div>
                {application.role && (
                  <div className="flex flex-wrap items-center text-xs mt-1 space-x-2">
                    <span className="mr-2">{application.role}</span>
                    <span className="bg-gray-200 rounded px-2 py-0.5">
                      {application.experience}
                    </span>
                  </div>
                )}
              </div>

              <hr className="border-t-8 border-black my-4"></hr>
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-red-200 text-red-900 border-red-200 hover:bg-red-200 hover:text-red-700"
              >
                Reject
              </Button>
              <Button size="sm" className="text-xs text-white bg-purple-900 hover:bg-purple-700">
                Accept
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
