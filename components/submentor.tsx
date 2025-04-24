// mentor-card.tsx
"use client";
import Image from "next/image";

interface Mentor {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  experience: string;
  location: string;
  country: string;
  countryCode: string;
  timezone: string;
}

const SubMentorCard = ({ mentor }: { mentor: Mentor }) => (
  <div className=" bg-card">
    <div className="flex items-center gap-4 w-full group hover:bg-accent/50 p-2 rounded-lg transition-colors">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-border accent-primary"
      />

      <Image
        src={mentor.avatar || "/placeholder.svg"}
        alt={`${mentor.name}'s avatar`}
        width={40}
        height={40}
        className="rounded-full border-2 border-muted"
      />

      <div className="flex-1">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-[13px] md:text-base font-medium text-foreground">
              {mentor.name}
            </h3>
            <p className="text-[12px] md:text-sm text-muted-foreground">
              {mentor.email}
            </p>
          </div>

          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-destructive/20 text-destructive hover:bg-destructive/10 transition-colors">
              Reject
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-1 mt-2 ml-3 w-full">
      <span className="px-3 py-1 text-[10px] font-medium rounded-full bg-[#F3ECF9] text-[#9985A7]">
        {mentor.role}
      </span>
      <span className="px-3 py-1 text-[10px] font-medium rounded-full bg-[#E8FDFB] text-[#58948E]">
        {mentor.experience}
      </span>
      <span className="px-3 py-1 text-[10px] font-medium rounded-full bg-[#E3ECF9] text-[#8196B5] flex items-center gap-1">
        <span className={`fi fi-${mentor.countryCode.toLowerCase()}`}></span>
        {mentor.location}, {mentor.country}
      </span>
      <span className="px-3 py-1 text-[10px] font-medium rounded-full bg-[#F4F4F4] text-[#595564]">
        {mentor.timezone}
      </span>
    </div>
  </div>
);

export default SubMentorCard;
