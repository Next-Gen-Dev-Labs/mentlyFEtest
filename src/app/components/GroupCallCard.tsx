import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface GroupCallCardProps {
  title: string;
  tag: string;
  date: string;
  time: string;
}

const GroupCallCard: React.FC<GroupCallCardProps> = ({ title, tag, date, time }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 w-[260px] border">
      <div className="rounded-xl bg-gray-200 h-24 w-full mb-3"></div>
      <span className={`text-xs px-2 py-1 rounded-full ${tag === 'Upcoming' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-700'}`}>
        {tag}
      </span>
      <h4 className="font-semibold text-sm mt-2">{title}</h4>
      <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
        <Calendar size={12} />
        <span>{date}</span>
        <Clock size={12} />
        <span>{time}</span>
      </div>
      <div className="mt-3 flex justify-between gap-2">
        <button className="text-xs border border-purple-500 text-purple-600 px-3 py-1 rounded-full w-full">
          View Participants
        </button>
        <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full w-full">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default GroupCallCard;
