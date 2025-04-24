import { EllipsisVertical } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

const programs = [
  {
    title: "Fundamentals of User Interface & Experience",
    tag: "Bootcamp",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    banner: "/program-1.jpg",
    mentor: {
      name: "Mentors",
      avatar: "/images/mentor-avatar.png",
    },
    actions: ["View Details", "Analysis"],
  },
  {
    title: "Colour Hack Practical Group Call",
    tag: "Group Call",
    description: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    banner: "/program-2.jpg",
    mentor: {
      name: "Faith Okolo",
      avatar: "/avatar-4.png",
    },
    actions: ["View Details", "Analysis"],
  },
  {
    title: "Colour Hack Practical Group Call",
    tag: "Group Call",
    description: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    banner: "/program-2.jpg",
    mentor: {
      name: "Self",
      avatar: "/avatar-4.png",
    },
    actions: ["View Details", "Assign Mentor"],
  },
];

const ProgramsSection = () => {
  return (
    <div className="w-[295px] ">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <GiHamburgerMenu className="w-[14px] inline " />
          <h2 className="text-[16px] text-[#B0B0B0] font-bold inline">
            Programs
          </h2>
        </div>
        <div className="space-x-2">
          <button className="text-purple-600 text-[12.27px] inline font-medium">
            See all
          </button>
          <EllipsisVertical className="text-black w-[14px] inline" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden"
          >
            <div className="relative ">
              <img
                src={program.banner}
                alt="Program banner"
                className="w-full  h-[90px]  object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-2  bg-gradient-to-t from-black/60 to-transparent">
                <IoMdSettings className="text-white" />
                <div className="text-white font-bold w-[224.19px]   text-[16px]">
                  {program.title}
                </div>
                <span className="text-xs inline bg-blue-100 text-blue-600 px-2 py-1 rounded-full w-max mt-1">
                  <GoDotFill className="inline" /> {program.tag}
                </span>
              </div>
            </div>
            <p className="text-[10px] px-2 my-2">{program.description}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {index === 0 ? (
                    <div className="flex items-center -space-x-2 px-2">
                      <img
                        src="/avatar-1.png"
                        alt="mentor1"
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                      <img
                        src="/avatar-2.png"
                        alt="mentor2"
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                      <img
                        src="/avatar-3.png"
                        alt="mentor3"
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                    </div>
                  ) : (
                    <img
                      src={program.mentor.avatar}
                      alt="mentor"
                      className="w-6 h-6 rounded-full"
                    />
                  )}
                  <span className="text-[9px]">
                    {index === 0 ? "" : "Hosted By:"} {program.mentor.name}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 my-3 mx-2">
                {program.actions.map((action, i) => (
                  <button
                    key={i}
                    className={`text-[7px] w-[65.7px] h-[22.17px] rounded  font-medium
        ${
          i === 0
            ? "border border-purple-600 text-purple-600 bg-white"
            : "bg-purple-600 text-white"
        }
      `}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
