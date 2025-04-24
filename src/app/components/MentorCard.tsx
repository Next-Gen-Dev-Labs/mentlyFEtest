// components/MentorCard.tsx
"use client";

interface MentorCardProps {
  name: string;
  title: string;
}

const MentorCard = ({ name, title }: MentorCardProps) => {
  return (
    <div className="flex justify-between items-center py-3 px-4 border-b border-gray-100">
      <div>
        <h4 className="font-medium text-sm text-gray-800">{name}</h4>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
      <button className="text-xs text-purple-600 hover:underline">Message</button>
    </div>
  );
};

export default MentorCard;