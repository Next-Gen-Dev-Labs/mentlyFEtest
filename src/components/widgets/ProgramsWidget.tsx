'use client';

import Link from 'next/link';
import Image from 'next/image';

const ProgramsWidget = () => {
  const programs = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      type: "Bootcamp",
      description: "This program is a hands-on guide designed for designers who want to master the art of creating intuitive and engaging user interfaces.",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=program1",
      mentors: [
        { name: "John Doe", image: "https://api.dicebear.com/7.x/avataaars/png?seed=mentor1" },
        { name: "Jane Smith", image: "https://api.dicebear.com/7.x/avataaars/png?seed=mentor2" },
        { name: "Mike Johnson", image: "https://api.dicebear.com/7.x/avataaars/png?seed=mentor3" }
      ],
      action: "Analysis"
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      type: "Group Call",
      description: "Join our practical session on color theory and its application in modern UI design.",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=program2",
      host: {
        name: "Sarah Williams",
        image: "https://api.dicebear.com/7.x/avataaars/png?seed=host1"
      },
      action: "Assign Mentor"
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      type: "Group Call",
      description: "Join our practical session on color theory and its application in modern UI design.",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=program2",
      host: {
        name: "Sarah Williams",
        image: "https://api.dicebear.com/7.x/avataaars/png?seed=host1"
      },
      action: "Assign Mentor"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-full">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button className="text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
              </svg>
            </button>
            <h2 className="text-md font-semibold text-gray-400">Programs</h2>
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
        <div className="flex justify-end">
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">Filter</span>
            <select className="text-xs text-gray-900 bg-white border border-gray-300 rounded-md px-1.5 py-0.5">
              <option>Active</option>
              <option>Completed</option>
              <option>Upcoming</option>
            </select>
          </div>
        </div>
      </div>

      {/* Program Cards Container */}
      <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px] pr-2">
        {programs.map((program) => (
          <div key={program.id} className="flex-none bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Program Image with Overlay */}
            <div className="relative h-32">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover rounded-md"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-4 font-semibold py-0.5 ${
                    program.type === "Bootcamp" 
                      ? "bg-[#D4E0F3] text-[#0055CC] border border-[#0055CC]" 
                      : "bg-[#D4F3D4] text-[#008000] border border-[#008000]"
                  } text-xs rounded-full`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      program.type === "Bootcamp" 
                        ? "bg-[#0055CC]" 
                        : "bg-[#008000]"
                    }`}></span>
                    {program.type}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-2 mt-1">
                  {program.title}
                </h3>
              </div>
            </div>

            {/* Program Content */}
            <div className="p-3">
              {/* Description */}
              <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                {program.description}
              </p>

              {/* Additional Information and Buttons */}
              <div className="flex justify-between items-center">
                {/* Additional Information */}
                <div className="flex items-center gap-2">
                  {program.mentors ? (
                    <>
                      <div className="flex -space-x-2">
                        {program.mentors.map((mentor, index) => (
                          <div key={index} className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <Image
                              src={mentor.image}
                              alt={mentor.name}
                              width={24}
                              height={24}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">Mentors</span>
                    </>
                  ) : (
                    <>
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <Image
                          src={program.host.image}
                          alt={program.host.name}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        Hosted By: {program.host.name}
                      </span>
                    </>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-xs font-medium text-[#8B72FC] border border-[#8B72FC] rounded-lg hover:bg-[#8B72FC]/10 transition-colors">
                    View Details
                  </button>
                  <button className="px-2 py-1 text-xs font-medium text-white bg-[#8B72FC] rounded-lg hover:bg-[#6F01D0] transition-colors">
                    {program.action}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsWidget;