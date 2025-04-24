// components/GroupCallCard.tsx
"use client";

interface GroupCallCardProps {
  title: string;
  status: string;
  time: string;
  hostImage: string;
}

const GroupCallCard = ({ title, status, time, hostImage }: GroupCallCardProps) => {
  return (
    <div className="min-w-[180px] bg-purple-100 rounded-xl p-4">
      <img src={hostImage} alt={title} className="rounded-lg w-full h-20 object-cover mb-2" />
      <h4 className="text-sm font-semibold text-gray-700 leading-tight">{title}</h4>
      <p className="text-xs text-gray-500">{status} • {time}</p>
    </div>
  );
};

export default GroupCallCard;