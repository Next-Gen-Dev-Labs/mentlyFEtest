'use client';

import Image from 'next/image';
import Link from 'next/link';

const MentorsWidget = () => {
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      profession: 'Product Designer',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=sarah',
    },
    {
      id: 2,
      name: 'Michael Chen',
      profession: 'UX Researcher',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=michael',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-full  border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
            <button className="text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
              </svg>
            </button>
            <h2 className="text-md font-semibold text-gray-400">Mentors</h2>
          </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <div className="w-6 h-6 rounded-full border border-[#DDD6FB] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mentors List */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-700">{mentor.name}</h3>
                <p className="text-[10px] text-gray-500">{mentor.profession}</p>
              </div>
              <button className="text-xs font-medium text-white  bg-[#6F01D0] rounded-full px-3 py-1.5 hover:bg-[#8B72FC]/10 hover:text-[#6F01D0] hover:border hover:border-[#6F01D0]">
                Message
              </button>
            </div>
            <div className="h-px bg-gray-200" />
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-4">
        <Link href="#" className="block w-full text-center text-sm font-medium text-[#6F01D0] bg-[#DDD6FB] rounded-full py-2 hover:bg-[#8B72FC]">
          See all
        </Link>
      </div>
    </div>
  );
};

export default MentorsWidget; 