import Image from "next/image";
import FadeInOnScroll from "../animation/FadeInOnScroll";
const getStatusStyles = (status) => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return "text-green-800 bg-green-100";
    case "upcoming":
      return "text-purple-800 bg-purple-100";
    case "completed":
      return "text-gray-800 bg-gray-200";
    case "cancelled":
      return "text-red-800 bg-red-100";
    default:
      return "text-yellow-800 bg-yellow-100";
  }
};

export default function GroupCallCard({
  imageSrc,
  isOngoing,
  status,
  title,
  date,
  time,
  group,
  mentorAvatars = [],
  onViewParticipants,
  onJoinNow,
}) {
  return (
  

    
    <section className="bg-[#F9F7FF] p-4 shrink-0 rounded-xl  w-full max-w-[350px]">
      {/* Top image */}
      <div className="w-full h-26 rounded-lg overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt="Group meeting"
          width={400}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ongoing badge */}
      {status && (
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-2 ${getStatusStyles(
            status
          )}`}
        >
          ● {status}
        </span>
      )}

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-gray-800 leading-snug mb-3">
        {title}
      </h3>

      {/* Date and time */}
      <div className="flex items-center justify-between text-xs text-gray-500 space-x-2 mb-2">
        <span className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          {date}
        </span>
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {time}
        </span>
      </div>

      {/* Group and mentors */}
      <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
        <div className="flex flex-col">
          <span className="ms-4 text-gray-400 text-sx">Study Group</span>
          <div className="flex items-center">
            <Image
              src="/asset/ux.png"
              alt="mentor"
              width={20}
              height={20}
              className="rounded-full border-2 object-cover border-white"
            />
            <span className="font-semibold">{group}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Mentors</span>
          <div className="flex -space-x-2">
            <Image
              src="/asset/R1.png"
              alt="mentor"
              width={20}
              height={20}
              className="rounded-full border-2 object-cover border-white"
            />
            <Image
              src="/asset/m2.png"
              alt="mentor"
              width={20}
              height={20}
              className="rounded-full border-2 object-cover border-white"
            />
            <Image
              src="/asset/m1.png"
              alt="mentor"
              width={20}
              height={20}
              className="rounded-full border-2 object-cover border-white"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onViewParticipants}
          className="text-xs font-semibold text-purple-600 border border-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-50"
        >
          View Participants
        </button>
        <button
          onClick={onJoinNow}
          className="text-xs font-semibold text-white bg-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-700"
        >
          Join Now
        </button>
      </div>
    </section>
   
  );
}
