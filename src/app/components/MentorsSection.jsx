// components/MentorsSection.jsx
import React from 'react';
import { CirclePlus, Menu, MoreHorizontal, MoreVertical, Search } from 'lucide-react';
import Image from "next/image";
import mentorImg from "../../../public/mentor.png";
import studentImg from "../../../public/student.jpg";

function MentorCard({ name, role, image }) {
  return (
    <div className="flex items-center justify-between p-1 md:p-3 border-b border-gray-100">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
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
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <button className="text-xs py-1.5 px-3 rounded-[20px] text-white bg-[#6F01D0]">
        Message
      </button>
    </div>
  );
}

export default function MentorsSection() {
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      role: "Product Designer",
      image: mentorImg
    },
    {
      id: 2,
      name: "Adeola Samuel",
      role: "Product Designer",
      image: studentImg
    }
  ];

  return (
    <div className="mb-4">
     <div className="flex   items-center justify-between mb-4">
           <div className="flex items-center">
             <div className="w-6 h-6 mr-2 flex items-center justify-center">
               <div className=""><Menu size={20} /></div>
             </div>
             <h2 className="text-lg text-[#B0B0B0] font-[700]">Mentors</h2>
           </div>
           <div className="flex items-center space-x-4">
             <button className="text-xs text-[#B0B0B0]"><CirclePlus size={20} /></button>
             <button className="text-gray-500">
               <MoreVertical size={20} />
             </button>
           </div>
         </div>
      
      <div className="bg-white rounded-lg p-1 overflow-hidden">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
        <div className="p-3">
          <button className="w-full bg-[#DDD6FB] py-4 mt-4 text-xs text-center text-purple-700 hover:bg-[#6F01D0] hover:text-white duration-300 transition rounded-[20px] font-[600] flex items-center justify-center gap-2">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}