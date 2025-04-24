"use client"
import SectionHeader from "../Header/SectionHeader";
const MentorCardSection = ({ mentors }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
      <SectionHeader
        title="Mentor"
        actionVariant="plus-icon"
        onClick={() => console.log("Add clicked")}
      />{" "}
      <div className="space-y-2">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex py-3 items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={mentor.profile}
                alt={mentor.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs  text-gray-800 font-semibold">
                  {mentor.name}
                </p>
                <p className="text-[10px] text-gray-500">{mentor.title}</p>
              </div>
            </div>
            <button className="text-xs text-white bg-[#6F01D0] px-2 py-1 rounded-xl font-medium">
              Message
            </button>
          </div>
        ))}
      </div>
      <button className="bg-purple-200 text-[#6F01D0] w-full rounded-xl text-xs font-medium py-2">
        See all
      </button>
    </div>
  );
};

export default MentorCardSection;
