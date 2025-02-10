import React from "react";
import { PiBriefcase } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";

const MentorshipDetails = () => {
  return (
    <section className="container md:mx-auto py-6 w-full">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="lg:w-1/2 w-full">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-6 text-justify">
            UI/UX Design check-ins with Faith is a way for beginners in UI/UX
            Design to learn fundamentals, build a career, and track their
            progress weekly.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white dark:bg-[#1C1C2D] p-6 rounded-lg shadow-default border-white dark:border-[#2E2F6E]">
            <div className="space-y-4">
              <InfoItem icon={<PiBriefcase />} text="Mentorship Program" />
              <InfoItem icon={<CiCalendar />} text="21/4/2024 - 21/5/2024" />
              <InfoItem icon={<GrLocation />} text="In Person" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-8">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#777795] dark:text-[#A0A0A0]">
      {icon}
    </div>
    <span className="text-sm font-semibold text-slate-500 dark:text-[#F0F0F0]">
      {text}
    </span>
  </div>
);

export default MentorshipDetails;
