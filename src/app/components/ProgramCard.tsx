// components/ProgramCard.tsx
"use client";

import { Settings } from "lucide-react";
import Image from "next/image";

type ProgramCardProps = {
  title: string;
  description: string;
  badge?: string;
  image: string;
  mentors?: string[];
  actions?: string[];
};

export default function ProgramCard({
  title,
  description,
  badge = "Bootcamp",
  image,
  mentors = [],
  actions = ["View Details", "Analysis"],
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-[360px] p-4 space-y-3">
      {/* Cover Image */}
      <div className="relative h-[130px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt="program"
          fill
          className="object-cover rounded-xl"
        />
        {/* Badge */}
        <span className="absolute bottom-3 left-3 bg-blue-100 text-blue-800 text-[12px] font-semibold px-3 py-[2px] rounded-full">
          ● {badge}
        </span>
        {/* Settings icon */}
        <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full cursor-pointer">
          <Settings className="text-white w-4 h-4" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-bold text-gray-900 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700">
        {description}
      </p>

      {/* Mentors */}
      <div className="flex items-center gap-2 pt-2">
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
        <span className="text-sm text-gray-700 font-semibold">Mentors</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        {actions.map((action, i) => (
          <button
            key={i}
            className={`text-[14px] font-semibold px-4 py-2 rounded-md border transition ${
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
  );
}
