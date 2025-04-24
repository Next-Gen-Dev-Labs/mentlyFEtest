// components/ApplicationsSection.jsx
import React from "react";
import { Menu, MoreHorizontal, MoreVertical } from "lucide-react";
import Image from "next/image";
import mentorImg from "../../../public/mentor.png";
import studentImg from "../../../public/student.jpg";

function ApplicationRow({ image, name, email, type = "Mentor" }) {
  return (
    <div>
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 w-4 h-4 rounded border-gray-300"
          />
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-3">
              <Image
                src={image}
                alt={`${name}'s photo`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium">{name}</h4>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-8 md:ml-0">
          <button className="text-xs py-2 px-6 bg-[#FFEDED] border border-[#D09696] rounded text-red-500 hover:bg-red-50 mr-2">
            Reject
          </button>
          <button className="text-xs py-2 px-6 rounded text-white bg-purple-700">
            Accept
          </button>
        </div>
      </div>

      {type === "Mentor" && (
        <div className="flex flex-wrap w-full  gap-2 md:px-3 md:py-2">
          <span className="bg-[#F3ECF9] text-[#9985A7] text-[12px] font-medium px-3 py-1 rounded-[5px]  border border-[#DDCEEE]">
            Product Designer
          </span>
          <span className="bg-[#E8FDFB] text-[#58948E] text-[12px] font-medium px-3 py-1 rounded-[5px]  border border-[#A1BDBA]">
            4years Experience
          </span>
          <span className="bg-[#E3ECF9] text-[#8196B5] text-[12px] font-medium px-3 py-1 rounded-[5px]  border border-[#ABBEE0] flex items-center gap-1">
            🇳🇬 Lagos, Nigeria
          </span>
          <span className="bg-[#F4F4F4] text-[#595564] text-[12px] font-medium px-3 py-1 rounded-[5px]  border border-[#C8C8C8]">
            GMT +1
          </span>
        </div>
      )}
    </div>
  );
}

export default function ApplicationsSection() {
  const mentorApplications = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: mentorImg,
      type: "Mentor",
    },
  ];

  const studentApplications = [
    {
      id: 2,
      name: "Adeola Samuel",
      email: "adeolasamuel@gmail.com",
      image: studentImg,
      type: "Student",
    },
    {
      id: 3,
      name: "Adeola Samuel",
      email: "adeolasamuel@gmail.com",
      image: mentorImg,
      type: "Student",
    },
    {
      id: 4,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: studentImg,
      type: "Student",
    },
    {
      id: 5,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: mentorImg,
      type: "Student",
    },
    {
      id: 6,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: studentImg,
      type: "Student",
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex p-4 items-center justify-between mb-1">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            <div className="">
              <Menu size={20} />
            </div>
          </div>
          <h2 className="text-lg text-[#B0B0B0] font-[700]">Applications</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xs text-[#6F01D0] text-[12px] font-[600]">
            See all
          </button>
          <button className="text-gray-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg  overflow-x-auto">
        <div className="border-gray-200 p-6 py-3 text-sm text-[#7D8DA6] font-medium">
          Mentors
        </div>
        <div className="p-4">
          {mentorApplications.map((application) => (
            <ApplicationRow key={application.id} {...application} />
          ))}
        </div>

        <div className="border-gray-200 p-6 py-4  text-sm text-[#7D8DA6] font-medium">
          Students
        </div>
        <div className="p-4 space-y-4">
          {studentApplications.map((application) => (
            <ApplicationRow key={application.id} {...application} />
          ))}
        </div>
      </div>
    </div>
  );
}
