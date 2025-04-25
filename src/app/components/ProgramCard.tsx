
"use client";

import { Settings } from "lucide-react";
import Image from "next/image";

type ProgramCardProps = {
  title: string;
  description: string;
  badge?: string;
  image: string;
  mentors?: string[];
  host?: string;
  actions?: string[];
};

export default function ProgramCard({
  title,
  description,
  badge = "Bootcamp",
  image,
  mentors = [],
  host = "Mentors",
  actions = ["View Details", "Analysis"],
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-[290px] max-w-[420px] p-4 space-y-3">
      {/* Cover Image */}
      <div className="relative h-[130px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt="program"
          fill
          className="object-cover rounded-xl"
        />

        {/* Badge */}
        <span className="absolute bottom-3 left-3 bg-blue-100 text-blue-800 text-[8px] font-semibold px-3 py-[2px] rounded-full">
          ● {badge}
        </span>

        {/* Settings icon */}
        <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full cursor-pointer">
          <Settings className="text-white w-4 h-4" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-bold text-gray-900 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[10px] text-gray-700">
        {description}
      </p>

      {/* Host or Mentors */}
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1 pt-2">
          {mentors.length > 0 ? (
            <>
              <div className="flex -space-x-2">
                {mentors.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`mentor-${i}`}
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-700 font-semibold">Mentors</span>
            </>
          ) : (
            <span className="text-sm text-gray-700 font-semibold">
              Hosted By: {host}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {actions.map((action, i) => (
            <button
              key={i}
              className={`text-[10px] font-semibold px-2 py-1 rounded-md border transition ${
                i === 0
                  ? "border-[#9E00FF] text-[#9E00FF] bg-white"
                  : "bg-[#9E00FF] text-white border-transparent"
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
