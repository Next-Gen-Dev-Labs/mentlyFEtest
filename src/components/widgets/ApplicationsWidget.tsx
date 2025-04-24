"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Types for application objects
 */
interface BaseApplication {
  id: number;
  name: string;
  email: string;
  image: string;
  type: "mentor" | "student";
}

interface MentorApplication extends BaseApplication {
  type: "mentor";
  profession: string;
  experience: string;
  location: string;
  timezone: string;
}

interface StudentApplication extends BaseApplication {
  type: "student";
}

type Application = MentorApplication | StudentApplication;

/**
 * ApplicationsWidget Component
 *
 * Displays a list of pending mentor and student applications
 * with options to accept or reject each applicant.
 */
const ApplicationsWidget = () => {
  // State for animation and interactive features
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Sample data for mentor applications
  const mentorApplications: MentorApplication[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=sarah",
      profession: "Product Designer",
      experience: "4 years Experience",
      location: "🇳🇬 Lagos, Nigeria",
      timezone: "GMT +1",
      type: "mentor",
    },
  ];

  // Sample data for student applications
  const studentApplications: StudentApplication[] = [
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.w@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=emma",
      type: "student",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.k@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=david",
      type: "student",
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      email: "maria.r@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=maria",
      type: "student",
    },
    {
      id: 6,
      name: "Alex Chen",
      email: "alex.c@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/png?seed=alex",
      type: "student",
    },
  ];

  // Combine all applications
  const allApplications: Application[] = [
    ...mentorApplications,
    ...studentApplications,
  ];

  // Set loaded state after component mounts for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  /**
   * Toggles selection of an application item
   * @param id - The ID of the application to toggle
   */
  const toggleItemSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  /**
   * Handles application acceptance
   * @param id - The ID of the application to accept
   * @param type - The type of application (mentor or student)
   */
  const handleAccept = (id: number, type: string) => {
    console.log(`Accepting ${type} application with ID: ${id}`);
    // Would typically call an API here
  };

  /**
   * Handles application rejection
   * @param id - The ID of the application to reject
   * @param type - The type of application (mentor or student)
   */
  const handleReject = (id: number, type: string) => {
    console.log(`Rejecting ${type} application with ID: ${id}`);
    // Would typically call an API here
  };

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-sm w-full h-full border border-gray-200"
      data-testid="applications-widget"
    >
      {/* Widget Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button
            className="text-black hover:text-gray-700 transition-colors duration-200"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
            </svg>
          </button>
          <h2 className="text-md font-semibold text-gray-400">Applications</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Options"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
        {/* Mentor Section */}
        <h3 className="text-xs font-semibold text-gray-500 pt-4 pb-2">
          Mentors
        </h3>
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <div className="space-y-4">
            {mentorApplications.map((application, index) => (
              <div
                key={application.id}
                className="transition-all duration-200 hover:bg-gray-50 p-2 rounded-lg"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.4s ease-out ${
                    index * 0.1
                  }s, transform 0.4s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    id={`app-${application.id}`}
                    className="mt-1 accent-[#8B72FC] w-4 h-4 cursor-pointer"
                    checked={selectedItems.includes(application.id)}
                    onChange={() => toggleItemSelection(application.id)}
                    aria-label={`Select ${application.name}`}
                  />
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#8B72FC]/20">
                        <Image
                          src={application.image}
                          alt=""
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-700">
                          {application.name}
                        </h4>
                        <p className="text-[10px] text-gray-500">
                          {application.email}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0">
                        <button
                          className="text-xs font-medium text-red-500 border border-red-500 rounded-lg px-4 md:px-6 py-2 hover:bg-red-50 transition-colors duration-200 w-full md:w-auto"
                          onClick={() =>
                            handleReject(application.id, application.type)
                          }
                          aria-label={`Reject ${application.name}`}
                        >
                          Reject
                        </button>
                        <button
                          className="text-xs font-medium text-white bg-[#8B72FC] rounded-lg px-4 md:px-6 py-2 hover:bg-[#6F01D0] transition-colors duration-200 w-full md:w-auto"
                          onClick={() =>
                            handleAccept(application.id, application.type)
                          }
                          aria-label={`Accept ${application.name}`}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="text-[10px] font-medium text-[#9985A7] bg-[#F3ECF9] border border-[#DDCEEE] px-2 py-1 rounded whitespace-nowrap">
                        {application.profession}
                      </span>
                      <span className="text-[10px] font-medium text-[#58948E] bg-[#E8FDFB] border border-[#A1BDBA] px-2 py-1 rounded whitespace-nowrap">
                        {application.experience}
                      </span>
                      <span className="text-[10px] font-medium text-[#8196B5] bg-[#E3ECF9] border border-[#ABBEE0] px-2 py-1 rounded whitespace-nowrap">
                        {application.location}
                      </span>
                      <span className="text-[10px] font-medium text-black bg-white border border-gray-600 px-2 py-1 rounded whitespace-nowrap">
                        {application.timezone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-gray-200 my-4" />

        {/* Student Section */}
        <h3 className="text-xs font-semibold text-gray-500 pb-2">Students</h3>
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(10px)",
            transition:
              "opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s", // Adjusted delay
          }}
        >
          <div className="space-y-4">
            {studentApplications.map((application, index) => (
              <div
                key={application.id}
                className="transition-all duration-200 hover:bg-gray-50 p-2 rounded-lg"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.4s ease-out ${
                    index * 0.1 + 0.3
                  }s, transform 0.4s ease-out ${index * 0.1 + 0.3}s`, // Adjusted delay
                }}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    id={`app-${application.id}`}
                    className="mt-1 accent-[#8B72FC] w-4 h-4 cursor-pointer"
                    checked={selectedItems.includes(application.id)}
                    onChange={() => toggleItemSelection(application.id)}
                    aria-label={`Select ${application.name}`}
                  />
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#8B72FC]/20">
                        <Image
                          src={application.image}
                          alt=""
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-700">
                          {application.name}
                        </h4>
                        <p className="text-[10px] text-gray-500">
                          {application.email}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0">
                        <button
                          className="text-xs font-medium text-red-500 border border-red-500 rounded-lg px-4 md:px-6 py-2 hover:bg-red-50 transition-colors duration-200 w-full md:w-auto"
                          onClick={() =>
                            handleReject(application.id, application.type)
                          }
                          aria-label={`Reject ${application.name}`}
                        >
                          Reject
                        </button>
                        <button
                          className="text-xs font-medium text-white bg-[#8B72FC] rounded-lg px-4 md:px-6 py-2 hover:bg-[#6F01D0] transition-colors duration-200 w-full md:w-auto"
                          onClick={() =>
                            handleAccept(application.id, application.type)
                          }
                          aria-label={`Accept ${application.name}`}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* See All Button */}
      {/* <div 
        className="mt-4"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s',
        }}
      >
        <Link 
          href="#" 
          className="block w-full text-center text-sm font-medium text-white bg-[#6F01D0] rounded-full py-2 hover:bg-[#8B72FC] transition-colors duration-200"
          aria-label="See all applications"
        >
          See all applications
        </Link>
      </div> */}

      {/* Custom scrollbar styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8b72fc;
        }
      `}</style>
    </div>
  );
};

export default ApplicationsWidget;
