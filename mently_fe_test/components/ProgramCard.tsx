import { CiSettings } from "react-icons/ci";

const programData = [
  {
    title: "Fundamentals of User interface & Experience ",
    text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    category: "Bootcamp",
    color: "#0077FF",
    bg: "#D4E0F3",
    mentor: 3,
  },
  {
    title: "Fundamentals of User interface & Experience ",
    text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    category: "Bootcamp",
    color: "#0077FF",
    bg: "#D4E0F3",
    mentor: 3,
  },
  {
    title: "Fundamentals of User interface & Experience ",
    text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    category: "Bootcamp",
    color: "#0077FF",
    bg: "#D4E0F3",
    mentor: 3,
  },
];

export default function ProgramCard() {
  return (
    <div className="bg-white w-[270px] rounded-xl shadow p-2 max-w-xl mx-auto">
      <div className="relative">
        <img
          src="/programImg1.png"
          alt="Banner"
          className="w-full h-[72px] object-cover rounded-lg"
        />
        <p className="text-[#FFFFFF] absolute top-1 right-0 px-2  text-[16px] font-bold">
          Fundamentals of User interface & Experience{" "}
        </p>
        <CiSettings className="absolute top-1 right-2 text-white bg-opacity-50 p-1 rounded-full text-2xl cursor-pointer" />

        <span className="absolute flex items-center gap-2 bottom-1 left-2 bg-[#D4E0F3] text-[#0077FF] text-[8px] font-semibold px-2 rounded-3xl">
          <div className="bg-[#0077FF] h-[4px] w-[4px] rounded-full"></div>
          Bootcamp
        </span>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-[10px] text-[#000000]">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approach
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className="flex -space-x-2">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="/mentor1.png"
            />
            <img
              className="w-full h-8 rounded-full border-2 border-white"
              src="/mentor2.png"
            />
            <img
              className="w-full h-8 rounded-full border-2 border-white"
              src="/mentor3.png"
            />
          </div>
          <span className=" text-[8px] text-[#6C6C6C] font-medium">
            Mentors
          </span>
        </div>

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
