'use client';

import { UserIcon as Menu, Plus, MoreVertical } from 'lucide-react';
import { useWidgets } from '../widgets-context';
import { Button } from '@/components/ui/button';
import RecentActivitiesWidget from '@/components/dashboard/widgets/recent-activities-widget';

interface Mentor {
  id: string;
  name: string;
  role: string;
  image?: string;
}

const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Maxwell Smith',
    role: 'Product Designer',
    image: 'assets/images/programs/pro-icon1.jpg',
  },
  {
    id: '2',
    name: 'Adeati Samuel',
    role: 'Product Designer',
    image: 'assets/images/programs/pro-icon3.jpg',
  },
];

export default function MentorsWidget() {
  const { widgets } = useWidgets();

  if (!widgets.mentors) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
           <Menu className="w-6 h-6 text-gray-700" />
          <h3 className="font-medium text-gray-500">Mentors</h3>
        </div>
        <div className="flex items-center space-x-4">
          <Plus className="text-gray-500" />
          <MoreVertical className="text-gray-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        {mentors.map((mentor, index) => (
          <div
            key={mentor.id}
            className={`flex items-center justify-between ${index < mentors.length - 1 ? 'mb-4 pb-4 border-b' : ''}`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <img
                  src={mentor.image}
                  alt={mentor.role}
                  className="w-10 h-8 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{mentor.name}</div>
                <div className="text-xs text-gray-500">{mentor.role}</div>
              </div>
            </div>
            <Button size="sm" className="text-xs text-white bg-purple-900 hover:bg-purple-700">
              Message
            </Button>
          </div>
        ))}

        <div className="text-center mt-6">
          <Button
            variant="link"
            className="text-purple-900 bg-purple-300 text-sm rounded-2xl px-4 py-2 w-64"
          >
            See all
          </Button>
        </div>
      </div>
<br></br>
      <RecentActivitiesWidget />
    </div>
  );
}
