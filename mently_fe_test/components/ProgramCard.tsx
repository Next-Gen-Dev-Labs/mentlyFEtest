import { MdSettings } from "react-icons/md";

export default function ProgramCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 max-w-xl mx-auto">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Banner"
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* Settings Icon (Top Right) */}
        <MdSettings className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full text-2xl cursor-pointer" />

        {/* Tag (Bottom Left) */}
        <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Featured
        </span>
      </div>

      {/* Title & Description */}
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold">Leadership Program</h2>
        <p className="text-sm text-gray-600">
          Build your leadership and mentoring skills with this guided course.
        </p>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-4">
        {/* Profiles + Mentors */}
        <div className="flex items-center">
          <div className="flex -space-x-2">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/2.jpg"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/3.jpg"
            />
          </div>
          <span className="ml-3 text-sm text-gray-700 font-medium">
            Mentors
          </span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button className="bg-gray-100 text-gray-800 text-sm px-4 py-1.5 rounded-md hover:bg-gray-200">
            View Details
          </button>
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700">
            Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
