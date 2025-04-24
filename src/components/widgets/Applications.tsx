import React from "react";
import Card from "@/components/ui/Card";
import { CiMenuKebab } from "react-icons/ci";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ApplicationsData } from "@/db/dataBase";
import ButtonPurple from "@/components/ui/ButtonPurple";
import ButtonRedBorder from "@/components/ui/ButtonRedBorder";

const Applications = () => {
  return (
    <Card className="h-full relative">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Menu />
          <h1 className="text-[#B0B0B0] text-base font-bold">Applications</h1>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-[#6F01D0] font-semibold text-xs">See all</h2>
          <CiMenuKebab />
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide p-4">
        {/* Mentors */}
        <div className="mb-4">
          <h2 className="text-[#7D8DA6] font-normal text-xs">Mentors</h2>
        </div>
        <div className="flex flex-col gap-4">
          {ApplicationsData.mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex space-x-10 items-center justify-between">
                <div className="flex items-center gap-3">
                  <input 
                    className="w-4 h-4 border rounded border-[#A5A5A5]" 
                    type="checkbox" 
                  />
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-[#4F4F4F] font-semibold text-sm">
                      {mentor.name}
                    </p>
                    <p className="text-[#7D8DA6] text-xs">
                      {mentor.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ButtonRedBorder className="px-6 py-2 text-xs rounded-md" value="Reject" />
                  <ButtonPurple className="px-6 py-2 text-xs rounded-md" value="Accept" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs px-3 py-1 rounded border ${
                  mentor.skill && "bg-[#F3ECF9] text-[#9985A7] border-[#DDCEEE]"
                }`}>
                  {mentor.skill}
                </span>
                <span className={`text-xs px-3 py-1 rounded border ${
                  mentor.experience && "bg-[#E8FDFB] text-[#58948E] border-[#DDCEEE]"
                }`}>
                  {mentor.experience}
                </span>
                <span className={`text-xs px-3 py-1 rounded border ${
                  mentor.location && "bg-[#E3ECF9] text-[#8196B5] border-[#DDCEEE]"
                }`}>
                  {mentor.location}
                </span>
                <span className={`text-xs px-3 py-1 rounded border ${
                  mentor.timezone && "bg-[#F4F4F4] text-[#595564] border-[#DDCEEE]"
                }`}>
                  {mentor.timezone}
                </span>
              </div>
              <div className="border-b border-[#DBDBDB] mb-4"></div>
            </div>
          ))}
        </div>

        {/* Students */}
        <div className="mt-6 mb-4">
          <h2 className="text-[#7D8DA6] font-normal text-xs">Students</h2>
        </div>
        <div className="flex flex-col gap-4">
          {ApplicationsData.students.map((student, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex space-x-10 items-center w-full">
                <div className="flex items-center gap-3 flex-1">
                  <input 
                    className="w-4 h-4 border rounded border-[#A5A5A5]" 
                    type="checkbox" 
                  />
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-[#4F4F4F] font-semibold text-sm">
                      {student.name}
                    </p>
                    <p className="text-[#7D8DA6] text-xs">
                      {student.email}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 min-w-[200px] justify-end">
                  <ButtonRedBorder className="px-6 py-2 text-xs rounded-md w-[90px]" value="Reject" />
                  <ButtonPurple className="px-6 py-2 text-xs rounded-md w-[90px]" value="Accept" />
                </div>
              </div>
              <div className="border-b border-[#DBDBDB] w-full"></div>
            </div>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default Applications;
