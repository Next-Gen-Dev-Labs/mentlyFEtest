'use client';

import { useState } from 'react';
import { ChevronDown, Menu, MoreVertical } from 'lucide-react';
import { useWidgets } from '../widgets-context';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'Group Call' | 'Bootcamp';
  members?: number;
  host?: string;
}

const programs: Program[] = [
  {
    id: '1',
    title: 'Fundamentals of User Interface & Experience',
    description:
      'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...',
    image: 'assets/images/programs/program-1.jpg',
    status: 'Bootcamp',
    members: 24,
  },
  {
    id: '2',
    title: 'Colour Hack Practical Group Call',
    description:
      'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...',
    image: 'assets/images/programs/program-2.jpg',
    status: 'Group Call',
    host: 'Faith Okeke',
  },

  {
    id: '3',
    title: 'Colour Hack Practical Group Call',
    description:
      'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...',
    image: 'assets/images/programs/program-3.jpg',
    status: 'Group Call',
    host: 'Assign Mentor',
  },
];

export default function ProgramsWidget() {
  const { widgets } = useWidgets();
  const [filter, setFilter] = useState<'Group Call' | 'all' | 'Bootcamp'>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!widgets.programs) return null;

  const filteredPrograms = programs.filter(
    (program) => filter === 'all' || program.status === filter
  );

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
        <Menu className="w-6 h-6 text-gray-700" />
          <h3 className="font-medium text-gray-500">Programs</h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-purple-600 cursor-pointer">See all</span>
          <MoreVertical className="text-gray-500" />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="text-sm">Filter</div>
        <div
          className="bg-white rounded px-3 py-1 text-sm flex items-center cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}{' '}
          <ChevronDown className="ml-2 h-4 w-4" />
        </div>
        {isDropdownOpen && (
          <div className="absolute mt-8 bg-white shadow-lg rounded-md p-2 z-10">
            <div
              className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter('all');
                setIsDropdownOpen(false);
              }}
            >
              All
            </div>

            <div
              className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter('Group Call');
                setIsDropdownOpen(false);
              }}
            >
              Group Call
            </div>
            <div
              className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter('Bootcamp');
                setIsDropdownOpen(false);
              }}
            >
              Bootcamp
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="overflow-hidden shadow">
      <div className="relative">
        <img
          src={program.image || 'assets/images/programs/pro-icon2.jpg'}
          alt={program.title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-2 w-full">
          <div className="font-medium">{program.title}</div>
        </div>
        <div
          className={`absolute top-2 right-2 ${program.status === 'Group Call' ? 'bg-green-200 text-green-900 font-bold' : 'bg-blue-100 text-blue-700 font-bold'} text-white text-xs px-2 py-1 rounded`}
        >
          {program.status === 'Bootcamp' ? 'Bootcamp' : 'Group Call'}
        </div>
      </div>
      <CardContent className="p-3">
        <p className="text-xs text-gray-600 mb-2">{program.description}</p>
        <div className="flex justify-between items-center">
          {program.members ? (
            <div className="flex items-center">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="assets/images/programs/pro-icon1.jpg"
                    alt="Host"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="assets/images/programs/pro-icon3.jpg"
                    alt="Host"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="assets/images/programs/pro-icon2.jpg"
                    alt="Host"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs ml-2">Members</span>
            </div>
          ) : program.host ? (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src="assets/images/programs/pro-icon2.jpg"
                  alt="Host"
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="text-xs ml-1">Hosted By: {program.host}</span>
            </div>
          ) : null}
        </div>
        <div className="flex justify-between items-center mt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-purple-900 border-purple-500 hover:border-purple-400"
          >
            View Details
          </Button>
          <Button size="sm" className="text-xs text-white bg-purple-900 hover:bg-purple-700">
            {program.status === 'Bootcamp' && program.host === 'Assign Mentor'
              ? 'Assign Mentor'
              : 'Analysis'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
