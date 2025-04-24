import { memo } from "react";
import Link from "next/link";
import ProgramCard from "./ProgramCard";
import interfaceBG from "../assets/programBG.jpg";
import hostAvatar from "../assets/hostAvatar.png";
import Image1 from "../assets/groupcall1.jpg";
import userinterface1 from "../assets/userinterface1.png";
import userinterface2 from "../assets/userinterface2.png";
import userinterface3 from "../assets/userinterface3.png";

// Using memo to prevent unnecessary re-renders
const ProgramSection = memo(function ProgramSection() {
  const programs = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      image: interfaceBG,
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      type: "Bootcamp",
      mentors: [userinterface1, userinterface2, userinterface3],
      mentorsLabel: "Mentors",
      actions: ["View Details", "Analysis"],
      highlighted: true
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      image: Image1,
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      type: "Group Call",
      host: {
        name: "Faith Okolo",
        avatar: hostAvatar
      },
      actions: ["View Details", "Analysis"]
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      image: Image1,
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      type: "Group Call",
      host: {
        name: "Self",
        avatar: hostAvatar
      },
      actions: ["View Details", "Assign Mentor"]
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* header*/}
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-gray-400 font-normal">Programs</h2>
          <Link href="#" className="text-purple-600 text-sm hover:underline">
            See all
          </Link>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-col gap-2">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              className="w-full transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProgramSection;
