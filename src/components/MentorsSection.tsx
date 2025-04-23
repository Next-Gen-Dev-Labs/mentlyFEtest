// src/components/MentorsSection.tsx
import { FC } from 'react';
import Image from 'next/image';

const MentorsSection: FC = () => {
  const mentors = [
    {
      id: 1,
      name: 'Maxwell Smith',
      role: 'Program Designer',
      avatar: '/images/rpp2.jpg'
    },
    {
      id: 2,
      name: 'Adesoji Samuel',
      role: 'Product Designer',
      avatar: '/images/rpp2.jpg'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Mentors</h2>
        <button className="text-sm text-purple-600 hover:underline">See all</button>
      </div>
      
      <div className="space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image 
                  src={mentor.avatar} 
                  alt={mentor.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-sm">{mentor.name}</div>
                <div className="text-xs text-gray-500">{mentor.role}</div>
              </div>
            </div>
            <button className="px-3 py-1 text-xs text-white bg-purple-600 rounded hover:bg-purple-700">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;