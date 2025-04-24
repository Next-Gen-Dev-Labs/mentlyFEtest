import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "./ui/dropdown";
import ProgramCard from "./ui/program-card";

export default function ProgramsContainer() {
  const programs = [
    {
      topImage: "/uiFundamentals.png",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      hostImage: "/participantsAvatars1.png",
      smallText: "Mentors",
    },
    {
      topImage: "/colourHack.png",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      hostImage: "/participantsAvatars2.png",
      smallText: "Hosted By: Faith Okolo",
    },
    {
      topImage: "/colourHack.png",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      hostImage: "/participantsAvatars2.png",
      smallText: "Hosted By: Faith Okolo",
    },
  ];

  return (
    <div className="p-3 py-5 bg-white rounded-lg">
      <div className="flex flex-row justify-between gap-x-3 items-center mb-4">
        <div className="flex flex-row gap-x-3 items-center">
          <DensitySmallIcon className="cursor-pointer text-gray-600" />
          <span className="text-[#B0B0B0] font-semibold">Programs</span>
        </div>
        <div className="flex flex-row gap-x-3 items-center">
          <span className="text-[#6F01D0] font-semibold cursor-pointer">
            See all
          </span>
          <MoreVertIcon className="cursor-pointer text-gray-600" />
        </div>
      </div>

      <div className="flex px-3 gap-3 justify-end items-center mb-4 min-w-[200px]">
        <span className="text-[#918C9C] text-sm">Filter</span>
        <Dropdown />
      </div>

      <div className="space-y-4">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            topImage={program.topImage}
            description={program.description}
            hostImage={program.hostImage}
            smallText={program.smallText}
          />
        ))}
      </div>
    </div>
  );
}
