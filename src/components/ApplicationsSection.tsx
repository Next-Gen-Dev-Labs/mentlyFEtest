// src/components/ApplicationsSection.tsx
import { FC } from 'react';
import Image from 'next/image';

const ApplicationsSection: FC = () => {
  const applications = [
    {
      id: 1,
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'Program Coordinator',
      level: 'GATE 2',
      type: 'Team Lead/Mentor'
    },
    {
      id: 2,
      name: 'Adesoji Samuel',
      email: 'adesojisam@gmail.com',
      role: 'Program Assistant',
      level: 'GATE 1',
      type: 'Team Lead/Mentor'
    },
    {
      id: 3,
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'Program Coordinator',
      level: 'GATE 2',
      type: 'Team Lead/Mentor'
    },
    {
      id: 4,
      name: 'Adesoji Samuel',
      email: 'adesojisam@gmail.com',
      role: 'Program Assistant',
      level: 'GATE 1',
      type: 'Team Lead/Mentor'
    },
    {
      id: 5,
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'Program Coordinator',
      level: 'GATE 2',
      type: 'Team Lead/Mentor'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Applications</h2>
        <div className="flex space-x-2">
          <button className="text-sm text-purple-600 hover:underline">See all</button>
        </div>
      </div>
      
      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                className="w-4 h-4 mr-3 rounded border-gray-300 text-purple-600 focus:ring-purple-500" 
              />
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={`/images/rpp1.jpg`} 
                    alt={app.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">{app.name}</div>
                  <div className="text-xs text-gray-500">{app.email}</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs text-purple-600 border border-purple-600 rounded hover:bg-purple-50">
                Reject
              </button>
              <button className="px-3 py-1 text-xs text-white bg-purple-600 rounded hover:bg-purple-700">
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsSection;