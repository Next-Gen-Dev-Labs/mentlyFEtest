import { useState } from "react";
import More from "@/assets/icons/more.svg";
import Image from "next/image";
import Bar from "@/assets/icons/order.svg";
import { mentors, students } from "../list-items/dashboard";

export default function Applications() {
  // Sample data for mentors and students

  // State for checkboxes
  const [selectedMentors, setSelectedMentors] = useState<
    Record<number, boolean>
  >({});
  const [selectedStudents, setSelectedStudents] = useState<
    Record<number, boolean>
  >({});

  // Toggle selection
  const toggleMentorSelection = (id: number) => {
    setSelectedMentors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleStudentSelection = (id: number) => {
    setSelectedStudents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white h-fit max-h-[605px] overflow-y-auto px-4 py-4 hidden-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Bar />
          <h1 className="font-bold ml-2 text-gray-500">Applications</h1>
        </div>

        <div className="flex items-center">
          <button className="text-purple-700 font-medium mr-4">See all</button>
          <button className="text-gray-500">
            <More />
          </button>
        </div>
      </div>

      {/* Mentors Section */}
      <div className="mb-8">
        <h2 className="text-lg text-gray-500 mb-6">Mentors</h2>

        <div className="space-y-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-1 lg:mr-3 w-5 h-5 border-2 border-gray-300 rounded accent-purple-700"
                    checked={selectedMentors[mentor.id] || false}
                    onChange={() => toggleMentorSelection(mentor.id)}
                  />

                  <div className="flex items-center">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-8 h-8 rounded-full object-cover mr-1 lg:mr-3"
                    />

                    <div>
                      <h3 className="text-xs lg:text-sm font-semibold text-gray-800">
                        {mentor.name}
                      </h3>
                      <p className=" lg:text-xs text-gray-500 text-[10px]">{mentor.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="px-1.5 py-1 lg:px-3 lg:py-1.5 bg-red-50 text-red-500 rounded-lg text-[9px] lg:text-[11px]">
                    Reject
                  </button>
                  <button className="px-1.5 py-1 lg:px-3 lg:py-1.5 bg-purple-600 text-white rounded-lg text-[9px] lg:text-[11px]">
                    Accept
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-6">
                <span className="bg-purple-100 text-purple-800 px-2 text-[9px] py-1 rounded-md">
                  {mentor.role}
                </span>
                <span className="bg-green-100 text-green-800 px-2 text-[9px] py-1 rounded-md">
                  {mentor.experience}
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 text-[9px] py-1 rounded-md flex items-center">
                  <div className="mr-1 w-2 h-2 bg-green-700 rounded-sm"></div>
                  {mentor.location}
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 text-[9px] py-1 rounded-md">
                  {mentor.timezone}
                </span>
              </div>

              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Students Section */}
      <div>
        <h2 className="text-lg text-gray-500 mb-4">Students</h2>

        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="border-b-1 last:border-none">
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 w-5 h-5 border-2 border-gray-300 rounded accent-purple-700"
                    checked={selectedStudents[student.id] || false}
                    onChange={() => toggleStudentSelection(student.id)}
                  />

                  <div className="flex items-center">
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={48}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />

                    <div>
                      <h3 className="text-xs lg:text-sm font-semibold text-gray-800">
                        {student.name}
                      </h3>
                      <p className="lg:text-xs text-gray-500 text-[9px]">{student.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="px-1.5 py-1 lg:px-3 lg:py-1.5 bg-red-50 text-red-500 rounded-lg text-[9px] lg:text-[11px]">
                    Reject
                  </button>
                  <button className="px-1.5 py-1 lg:px-3 lg:py-1.5 bg-purple-600 text-white rounded-lg text-[9px] lg:text-[11px]">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
