import React from 'react';

interface MentorCardProps {
  name: string;
  role: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, role }) => {
  return (
    <div className="flex items-center justify-between border-b p-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <button className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Message</button>
    </div>
  );
};

export default MentorCard;
