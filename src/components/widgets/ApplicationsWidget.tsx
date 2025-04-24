'use client';

import Image from 'next/image';
import Link from 'next/link';

const ApplicationsWidget = () => {
  const mentorApplications = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=sarah',
      profession: 'Product Designer',
      experience: '4 years Experience',
      location: '🇳🇬 Lagos, Nigeria',
      timezone: 'GMT +1',
    }
  ];

  const studentApplications = [
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma.w@example.com',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=emma',
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.k@example.com',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=david',
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'david.k@example.com',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=david',
    },
    {
      id: 6,
      name: 'David Kim',
      email: 'david.k@example.com',
      image: 'https://api.dicebear.com/7.x/avataaars/png?seed=david',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-full h-full border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
            <button className="text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
              </svg>
            </button>
            <h2 className="text-md font-semibold text-gray-400">Applications</h2>
          </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-6 max-h-[600px] overflow-y-auto">
        {/* Mentors Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">Mentors</h3>
          <div className="space-y-4">
            {mentorApplications.map((application) => (
              <div key={application.id} className="space-y-4">
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-4" />
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={application.image}
                          alt={application.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-700">{application.name}</h4>
                        <p className="text-[10px] text-gray-500">{application.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-xs font-medium text-red-500 border border-red-500 rounded-lg px-6 py-2hover:bg-red-500/10">
                          Reject
                        </button>
                        <button className="text-xs font-medium text-white bg-[#8B72FC] rounded-lg px-6 py-2 hover:bg-[#6F01D0]">
                          Accept
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      <span className="text-[10px] font-medium text-[#9985A7] bg-[#F3ECF9] border border-[#DDCEEE] px-2 py-1 rounded  whitespace-nowrap">
                        {application.profession}
                      </span>
                      <span className="text-[10px] font-medium text-[#58948E] bg-[#E8FDFB] border border-[#A1BDBA] px-2 py-1 rounded  whitespace-nowrap">
                        {application.experience}
                      </span>
                      <span className="text-[10px] font-medium text-[#8196B5] bg-[#E3ECF9] border border-[#ABBEE0] px-2 py-1 rounded  whitespace-nowrap">
                        {application.location}
                      </span>
                      <span className="text-[10px] font-medium text-black bg-white border border-gray-600 px-2 py-1 rounded">
                        {application.timezone}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Students Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">Students</h3>
          <div className="space-y-4">
            {studentApplications.map((application) => (
              <div key={application.id} className="space-y-4">
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-4" />
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={application.image}
                          alt={application.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-700">{application.name}</h4>
                        <p className="text-xs text-[10px] text-gray-500">{application.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-xs font-medium text-red-500 border border-red-500 rounded-lg px-6 py-2 bg-[#D0969] hover:bg-red-500/10">
                          Reject
                        </button>
                        <button className="text-xs font-medium text-white bg-[#8B72FC] rounded-lg px-6 py-2 hover:bg-[#6F01D0]">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="mt-4">
        <Link href="#" className="block w-full text-center text-sm font-medium text-white bg-[#6F01D0] rounded-full py-2 hover:bg-[#8B72FC]">
          See all
        </Link>
      </div> */}
    </div>
  );
};

export default ApplicationsWidget; 