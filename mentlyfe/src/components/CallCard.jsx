import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
export default function CallCard({ call }) {
  const getStatusColorClass = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-500";
      case "Upcoming":
        return "bg-indigo-600";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusBgClass = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-100";
      case "Upcoming":
        return "bg-indigo-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="h-42 w-full">
          {call.image && (
            <div className="h-full w-full bg-gray-200">
              <Image
                src={call.image}
                alt={call.title}
                layout="fill"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex mb-2">
          <div
            className={`px-3 py-1 rounded-full ${getStatusBgClass(
              call.status
            )} inline-flex items-center`}
          >
            <span
              className={`w-2 h-2 rounded-full ${getStatusColorClass(
                call.status
              )} mr-2`}
            ></span>
            <span className="text-xs">{call.status}</span>
          </div>
        </div>

        <h3 className="font-medium text-lg mb-2">{call.title}</h3>
        <hr />

        <div className="flex items-start mb-3 mt-2">
          <div className="flex items-center mr-4">
            <CiCalendarDate className="text-gray-400 mr-2" size={14} />
            <span className="text-sm text-gray-500">{call.date}</span>
          </div>
          {/* <hr className="rotate-90 w-20 h-10" /> */}
          <div className="flex items-center">
            <IoMdTime className="text-gray-400 mr-2" size={14} />
            <span className="text-sm text-gray-500">{call.time}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-xs text-gray-400">Study Group</div>
            <div className="flex items-center mt-1">
              <div className="w-6 h-6 rounded-full bg-gray-800 mr-2 flex items-center justify-center">
                <span className="text-white text-xs">G</span>
              </div>
              <span className="text-xs">{call.studyGroup}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Mentors</div>
            <div className="flex -space-x-2 mt-1">
              {call.mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full bg-gray-200 border border-white"
                >
                  <Image
                    src={mentor}
                    alt="Mentor"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between space-x-2 mt-4">
          <button className="px-3 py-1.5 text-sm border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200 flex-1 text-center">
            View Participants
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-lg hover:opacity-90 transition-colors duration-200 flex-1 text-center flex items-center justify-center
            ${
              call.status === "Upcoming"
                ? "bg-[#6F01D04D] text-white"
                : "bg-purple-600 text-white"
            }`}
          >
            Join Now
            {call.status === "Upcoming" && (
              <MdArrowRightAlt className="ml-2" size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
