// components/ProgramCard.tsx
"use client";

interface ProgramCardProps {
  title: string;
  description: string;
  host: string;
  hostAvatar: string;
}

const ProgramCard = ({ title, description, host, hostAvatar }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-semibold text-sm text-gray-800 mb-2">{title}</h3>
      <p className="text-xs text-gray-600 mb-3">{description}</p>
      <div className="flex items-center gap-2">
        <img src={hostAvatar} alt={host} className="w-6 h-6 rounded-full" />
        <span className="text-xs text-gray-500">{host}</span>
      </div>
    </div>
  );
};

export default ProgramCard;