'use client';

import Link from 'next/link';
import Image from 'next/image';

const GroupCallsWidget = () => {
  const groupCalls = [
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      status: "Ongoing",
      date: "Mon. Jul 30, 2024",
      time: "9:00-11:00 AM",
      group: "UX Strategy Study group",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=meeting1",
      participants: [
        { name: "John Doe", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant1" },
        { name: "Jane Smith", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant2" },
        { name: "Mike Johnson", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant3" },
        { name: "Sarah Williams", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant4" }
      ]
    },
    {
      id: 2,
      title: "Design System Workshop - Component Library Review",
      status: "Upcoming",
      date: "Wed. Aug 1, 2024",
      time: "2:00-4:00 PM",
      group: "Design System Team",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=meeting2",
      participants: [
        { name: "Alex Brown", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant5" },
        { name: "Emily Davis", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant6" },
        { name: "Chris Wilson", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant7" }
      ]
    },
    {
      id: 3,
      title: "User Research Findings Presentation",
      status: "Upcoming",
      date: "Fri. Aug 3, 2024",
      time: "10:00-11:30 AM",
      group: "Research & Insights",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=meeting3",
      participants: [
        { name: "Lisa Chen", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant8" },
        { name: "David Kim", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant9" },
        { name: "Rachel Green", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant10" },
        { name: "Tom Wilson", image: "https://api.dicebear.com/7.x/avataaars/png?seed=participant11" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-[82%] h-[40%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button className="text-black hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
            </svg>
          </button>
          <h2 className="text-md font-semibold text-gray-400">Group Calls</h2>
        </div>
        <div className="flex items-center gap-2">
          <Link href="#" className="text-[#8B72FC] hover:text-[#6F01D0] text-sm font-bold">
            See all
          </Link>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="h-px bg-gray-200 mx-2 mb-4" />

      {/* Group Calls Container */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {groupCalls.map((call) => (
          <div key={call.id} className="flex-none w-70 bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Call Image */}
            <div className="relative h-20">
              <Image
                src={call.image}
                alt={call.title}
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            </div>

            {/* Call Content */}
            <div className="p-3">
              <div className="mb-1 -mt-1">
                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
                  call.status === "Ongoing" 
                    ? "bg-[#D4F3D4] text-[#008000]" 
                    : "bg-[#D4E0F3] text-[#0055CC]"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                    call.status === "Ongoing" 
                      ? "bg-[#008000]" 
                      : "bg-[#0055CC]"
                  }`}></span>
                  {call.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-600 mb-2 line-clamp-2">
                {call.title}
              </h3>
              
              {/* Divider */}
              <div className="h-px bg-gray-200 w-full mb-2" />
              
              {/* Date and Time */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-500">{call.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-500">{call.time}</span>
                </div>
              </div>

              {/* Study Group and Mentors Section */}
              <div className="flex gap-6 mb-4">
                {/* Study Group */}
                <div className="flex-[2]">
                  <div className="text-[10px] text-gray-400 ml-8 mb-2">Study Group</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={call.image}
                        alt={call.group}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 truncate">{call.group}</span>
                  </div>
                </div>

                {/* Mentors */}
                <div className="flex-1">
                  <div className="text-[10px] text-gray-500 mb-2">Mentors</div>
                  <div className="flex -space-x-2">
                    {call.participants.slice(0, 3).map((participant, index) => (
                      <div key={index} className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <Image
                          src={participant.image}
                          alt={participant.name}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="w-32 py-2 text-xs font-medium text-[#8B72FC] border border-[#8B72FC] rounded-lg hover:bg-[#8B72FC]/10 transition-colors">
                  View Participants
                </button>
                <button className="w-32 py-2 text-xs font-medium text-white bg-[#8B72FC] rounded-lg hover:bg-[#6F01D0] transition-colors flex items-center justify-center gap-1">
                  Join Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCallsWidget; 