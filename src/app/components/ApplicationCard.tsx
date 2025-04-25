// components/ApplicationCard.tsx
import { BadgeCheck, Mail } from "lucide-react";
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
    <div className="flex items-start justify-between py-4 border-b">
      <div className="flex items-start gap-3">
        <input type="checkbox" className="mt-2" />
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover mt-1"
        />
        <div>
          <h4 className="text-base font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{email}</p>
          {isMentor && (
            <div className="flex flex-wrap gap-2 mt-2">
              {role && (
                <span className="text-xs font-size-[9px] bg-purple-100 text-purple-800 px-2 py-1 rounded-full border border-purple-200">
                  {role}
                </span>
              )}
              {experience && (
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full border border-teal-200">
                  {experience}
                </span>
              )}
              {location && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-200 flex items-center gap-1">
                  🇳🇬 {location}
                </span>
              )}
              {timezone && (
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full border border-gray-300">
                  {timezone}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-red-600 border border-red-300 px-4 py-2 text-sm rounded-lg bg-red-50">
          Reject
        </button>
        <button className="text-white bg-[#7F1AE5] px-4 py-2 text-sm rounded-lg">
          Accept
        </button>
      </div>
    </div>
  );
}
