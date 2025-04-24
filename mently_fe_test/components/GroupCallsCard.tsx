import { CiSettings } from "react-icons/ci";

export default function GroupCallsCard() {
  return (
    <div className="bg-white w-[250px] overflow-hidden rounded-xl shadow p-2 max-w-xl mx-auto">
      <div className="relative">
        <img
          src="/programImg1.png"
          alt="Banner"
          className="w-full h-[72px] object-cover rounded-lg"
        />
      </div>

      <div className="mt-4 space-y-1">
        <span className="flex items-center w-[30%] gap-2 bottom-1 left-2 bg-[#2AC10033] text-[#1F8B01] text-[8px] font-semibold px-2 py-1 rounded-3xl">
          <div className="bg-[#1F8B01] h-[4px] w-[4px] rounded-full"></div>
          Ongoing
        </span>
        <p className="text-[16px] font-bold text-[#595564]">
          Weekly Meeting - Product Demo Review with Testers
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
