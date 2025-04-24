import { CiSettings } from "react-icons/ci";

const programData = [
  {
    title: "Fundamentals of User interface & Experience ",
    text: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    category: "Bootcamp",
    mentor: 3,
    mentor1: "mentor1.png",
    mentor2: "mentor1.png",
    mentor3: "mentor1.png",
    bg: "#D4E0F3",
    color: "#0077FF",
    image: "/programImg1.jpg",
  },
  {
    name: "Faith Okolo",
    title: "Colour Hack Practical Group Call",
    text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentor: 1,
    category: "Group Call",
    bg: "#D4F3D4",
    color: "#008000",
    image: "/sectionsImg.jpg",
    profileImg: "/programProfile.png",
  },
  {
    name: "Self",
    title: "Colour Hack Practical Group Call",
    text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentor: 1,
    category: "Group Call",
    bg: "#D4F3D4",
    color: "#008000",
    image: "/sectionsImg.jpg",
    profileImg: "/programProfile.png",
  },
];

function Card({
  name,
  title,
  text,
  category,
  mentor1,
  mentor2,
  mentor3,
  mentor,
  bg,
  color,
  image,
  settingIcon,
  profileImg,
}: any) {
  return (
    <div className="lg:w-[270px] shadow rounded p-2 max-w-xl mx-auto">
      <div className="relative bg-[#000000]">
        <img
          src={image}
          alt="Banner"
          className="w-full h-[68px] inset-0 opacity-40 object-cover rounded"
        />
        <p className="text-[#FFFFFF] absolute top-1 right-0 px-2  text-[16px] font-bold">
          {title}
        </p>
        {settingIcon && (
          <CiSettings className="absolute top-1 right-2 text-white bg-opacity-50 p-1 rounded-full text-2xl cursor-pointer" />
        )}

        <span
          className={`absolute flex items-center gap-2 bottom-1 left-2  text-[8px] font-semibold px-2 rounded-3xl`}
          style={{ backgroundColor: bg, color: color }}
        >
          <div
            className={`h-[4px] w-[4px] rounded-full`}
            style={{ backgroundColor: color }}
          ></div>
          {category}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-[9.5px] text-[#000000]">{text}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        {mentor === 3 ? (
          <div className="flex gap-2 items-center">
            <div className="flex -space-x-2">
              <img className="w-4 h-4 rounded-full " src={mentor1} />
              <img className="w-4 h-4 rounded-full " src={mentor2} />
              <img className="w-4 h-4 rounded-full " src={mentor3} />
            </div>
            <span className="text-[8px] text-[#6C6C6C] font-medium">
              Mentors
            </span>
          </div>
        ) : (
          <div>
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6 rounded-full " src={profileImg} />
              <span className="text-[8px] text-[#000000] font-medium">
                Hosted By: {name}
              </span>
            </div>
          </div>
        )}

        <div className="flex space-x-1">
          <button className="border border-[#6F01D0] text-[#6F01D0] text-[8px] px-2 py-1.5 rounded hover:bg-gray-200">
            View Details
          </button>
          <button className="bg-[#6F01D0] text-[#FFFFFF] text-[8px] px-2 py-1.5 rounded hover:bg-blue-700">
            Analysis
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProgramCard({}: { settingIcon?: any }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {programData.map((program, index) => (
        <Card key={index} {...program} settingIcon={index === 0} />
      ))}
    </div>
  );
}
