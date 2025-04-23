import Image from "next/image"
import Img1 from "@/public/Images/img1.jpg"
import Img2 from "@/public/Images/img2.jpg"
import Img3 from "@/public/Images/img3.jpg"
export default function CourseCard() {
  return (
    <div className=" rounded-md bg-white shadow-md overflow-hidden">
      {/* Card Header with Image */}
      <div className="relative">
        <div className="h-32 bg-gray-800 relative">
          <Image
            src={Img1}
            alt="Workspace with laptop"
            width={448}
            height={128}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 p-3 flex flex-col justify-center">
            <h2 className="text-white text-sm font-bold leading-tight">
              Fundamentals of User <br />
              Interface & Experience
            </h2>
          </div>

          {/* Settings Icon */}
          <button className="absolute top-4 right-4 text-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>

          {/* Bootcamp Badge */}
          <div className="absolute bottom-1 left-3">
            <div className="flex items-center bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Bootcamp
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-2 pt-2">
        <p className="text-gray-800 mb-2 text-xs">
          This program is a hands-on guide designed for designers who want to master color theory and confidently apply
          it to their designs. This practical approach
        </p>

        {/* Mentors Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex -space-x-3 mr-1">
              <div className="w-6 h-6 rounded-full border-2 border-white bg-red-500 z-30"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-500 z-20"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-yellow-500 z-10"></div>
            </div>
            <span className="text-gray-600 text-xs">Mentors</span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button className=" px-1 text-purple-600 border border-purple-600 rounded-md text-xs font-medium">
              View Details
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium">Analysis</button>
          </div>
        </div>
      </div>
    </div>
  )
}
