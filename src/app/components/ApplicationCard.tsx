// components/ApplicationCard.tsx
import Image from "next/image";

interface ApplicationCardProps {
  name: string;
  email: string;
  role?: string;
  experience?: string;
  location?: string;
  timezone?: string;
  avatar: string;
  isMentor?: boolean;
}

export default function ApplicationCard({
  name,
  email,
  role,
  experience,
  location,
  timezone,
  avatar,
  isMentor = false,
}: ApplicationCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-200">
      <div className="flex items-center gap-3 w-10">
        {/* Checkbox */}
        <input type="checkbox" className="accent-purple-600" />

        {/* Avatar */}
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-contain"
        />

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-semibold text-gray-900 leading-none">{name}</h4>
          <p className="text-sm text-gray-500 leading-none mt-1">{email}</p>

          {/* Tags (only for mentors) */}
          {isMentor && (
            <div className="flex flex-nowrap gap-1 mt-2 overflow-x-auto no-scrollbar">
              {role && (
                <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full border border-purple-200 whitespace-nowrap">
                  {role}
                </span>
              )}
              {experience && (
                <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200 whitespace-nowrap">
                  {experience}
                </span>
              )}
              {location && (
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200 flex items-center gap-1 whitespace-nowrap">
                  🇳🇬 {location}
                </span>
              )}
              {timezone && (
                <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-300 whitespace-nowrap">
                  {timezone}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2 hover:bg-red-100">
          Reject
        </button>
        <button className="text-sm text-white bg-[#7F1AE5] rounded-lg px-4 py-2 hover:bg-purple-700">
          Accept
        </button>
      </div>
    </div>
  );
}
