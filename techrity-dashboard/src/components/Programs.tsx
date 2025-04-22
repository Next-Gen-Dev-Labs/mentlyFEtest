'use client';
import React from 'react';
import { Menu, Filter, ChevronDown, MoreVertical, Users } from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  avatar: string;
}

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  hostName?: string;
  hostAvatar?: string;
  mentors?: Mentor[];
  actionText: string;
  isGroupCall?: boolean;
}

interface ProgramListProps {
  programs: Program[];
  onViewDetails?: (programId: string) => void;
  onAction?: (programId: string) => void;
  onSeeAll?: () => void;
  onFilterChange?: (filter: string) => void;
}

export default function ProgramList({
  programs = defaultPrograms,
  onViewDetails = () => {},
  onAction = () => {},
  onSeeAll = () => {},
  onFilterChange = () => {},
}: ProgramListProps) {
  return (
    <div className="p-4 rounded-lg bg-white h-[604px] overflow-y-auto w-full">
      {/* Header section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Menu size={20} className="text-gray-500 mr-2" />
          <h1 className="text-lg text-gray-500 font-normal">Programs</h1>
        </div>
        <div className="flex items-center">
          <button 
            onClick={onSeeAll}
            className="text-purple-700 text-sm font-medium mr-2"
          >
            See all
          </button>
          <button>
            <MoreVertical size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Filter section */}
      <div className="flex justify-end mb-4">
        <div className="flex gap-2">
          <div className="border rounded-md px-3 py-1 flex items-center text-sm text-gray-500">
            <Filter size={16} className="mr-1" />
            <span>Filter</span>
          </div>
          <div className="border rounded-md px-3 py-1 flex items-center text-sm text-gray-500">
            <span>Active</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
        </div>
      </div>

      {/* Programs list */}
      <div className="space-y-4">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Program image */}
            <div 
              className="h-32 relative bg-cover bg-center" 
              style={{ backgroundImage: `url(/api/placeholder/400/120)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h2 className="font-bold text-lg">{program.title}</h2>
              </div>
            </div>

            {/* Program details */}
            <div className="p-3">
              <div className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs inline-flex items-center mb-2">
                <span>{program.category}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{program.description}</p>

              {/* Mentors/Host section */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {program.isGroupCall ? (
                    <>
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <Users size={12} className="text-white" />
                      </div>
                      <span className="text-xs ml-2">Hosted by: {program.hostName}</span>
                    </>
                  ) : program.mentors ? (
                    <>
                      <div className="flex -space-x-2">
                        {program.mentors.map((mentor, index) => (
                          <div 
                            key={mentor.id} 
                            className="w-6 h-6 rounded-full bg-gray-300 border border-white flex items-center justify-center overflow-hidden"
                          >
                            {mentor.avatar ? (
                              <img src={mentor.avatar} alt={mentor.name} />
                            ) : (
                              <span className="text-xs">{mentor.name.charAt(0)}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs ml-2">Mentors</span>
                    </>
                  ) : program.hostName ? (
                    <>
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-xs">{program.hostName.charAt(0)}</span>
                      </div>
                      <span className="text-xs ml-2">Hosted by: {program.hostName}</span>
                    </>
                  ) : null}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => onViewDetails(program.id)}
                    className="text-xs text-purple-700 border border-purple-700 rounded px-3 py-1"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => onAction(program.id)}
                    className="text-xs text-white bg-purple-700 rounded px-3 py-1"
                  >
                    {program.actionText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Default programs data for demonstration
const defaultPrograms: Program[] = [
  {
    id: "1",
    title: "Fundamentals of User Interface & Experience",
    description: "This program is a hands-on guide designed for designers who want to master interface theory and confidently apply it to their designs. This practical approach",
    image: "/program1.jpg",
    category: "Design UX/UI",
    mentors: [
      { id: "m1", name: "John Doe", avatar: "" },
      { id: "m2", name: "Jane Smith", avatar: "" },
    ],
    actionText: "Enroll"
  },
  {
    id: "2",
    title: "Colour Hack Practical",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    image: "/program2.jpg",
    category: "Design UX/UI",
    hostName: "Patti Davis",
    actionText: "Analyze"
  },
  {
    id: "3",
    title: "Colour Hack Practical Group Call",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    image: "/program3.jpg",
    category: "Design UX/UI",
    hostName: "Sal",
    isGroupCall: true,
    actionText: "Join Meeting"
  }
];