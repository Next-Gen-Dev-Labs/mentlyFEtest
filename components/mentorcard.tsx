import { Menu, EllipsisVertical } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const mentors = [
  {
    name: "Maxwell Smith",
    role: "Product Designer",
    avatar: "/man.svg",
  },
  {
    name: "Sarah Johnson",
    role: "UX Researcher",
    avatar: "/man.svg",
  },
];

const MentorCards = () => {
  return (
    <div className="h-auto rounded-xl bg-card py-1.5 md:px-1 px-3 shadow-sm pb-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 pl-1">
          <Menu size={16} />
          <span className="text-base font-bold text-muted-foreground/100">
            Mentors
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="">
            <Image
              src="/plus.svg"
              alt="Add mentor"
              width={18}
              height={18}
              className="text-muted-foreground"
            />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <EllipsisVertical className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Mentors List */}
      <div className="space-y-4">
        {mentors.map((mentor, index) => (
          <React.Fragment key={mentor.name}>
            <div className="flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-lg">
              {/* Avatar */}
              <Image
                src={mentor.avatar}
                alt={`${mentor.name} avatar`}
                width={40}
                height={40}
                className="rounded-full border-2 border-muted"
              />

              {/* Mentor Info */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-foreground">
                  {mentor.name}
                </h3>
                <p className="text-[12px] text-muted-foreground">
                  {mentor.role}
                </p>
              </div>

              {/* Action Button */}
              <Button size="sm" className="rounded-full">
                Message
              </Button>
            </div>

            {index !== mentors.length - 1 && (
              <hr className="border-t border-muted" />
            )}
          </React.Fragment>
        ))}
      </div>

      <hr className="border-t border-muted" />
      <button className="mt-4 w-full text-sm font-semibold text-purple-600 h-7 outline outline-1 outline-purple-600 px-3 py-6 flex items-center justify-center rounded-3xl cursor-pointer bg-purple-50 hover:bg-purple-100 transition-colors">
        See all
      </button>
    </div>
  );
};

export default MentorCards;
