import React from "react";
import Card from "../ui/Card";
import { CiMenuKebab } from "react-icons/ci";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ApplicationsData } from "@/db/dataBase";
import ButtonPurple from "../ui/ButtonPurple";
import ButtonRedBorder from "../ui/ButtonRedBorder";

const Applications = () => {
  return (
    <Card className="h-full relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Menu />
          <h1 className="text-[#B0B0B0] text-base font-bold">Programs</h1>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-[#6F01D0] font-semibold text-xs">See all</h2>
          <CiMenuKebab />
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide p-4">
        {/* Mentors */}
        <div>
          <h2 className="text-[#7D8DA6] font-normal text-xs">Mentors</h2>
        </div>
        <div className="flex flex-col gap-2">
          {ApplicationsData.mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col gap-4 border-b border-[#DBDBDB] pb-6">
              <div className="flex items-center gap-2">
                <input className="w-3.5 border rounded-xs outline-none border-[#A5A5A5] h-3.5" type="checkbox" />
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[#4F4F4F] font-bold text-sm">
                    {mentor.name}
                  </p>
                  <p className="text-[#7D8DA6] font-normal text-xs">
                    {mentor.email}
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <ButtonRedBorder className="px-6 py-2 font-medium text-xs" value="Reject" />
                  <ButtonPurple className="px-6 py-2 font-medium text-xs" value="Accept" />
                </div>
              </div>

              <div className="flex justify-between items-center space-x-2">
                <p className="text-[#9985A7] px-1 py-2 font-[Chivo] w-[500px] text-xs font-medium rounded-sm border border-[#DDCEEE] bg-[#F3ECF9]">{mentor.skill}</p>
                <p className="text-[#9985A7] px-1 py-2 font-[Chivo] text-xs font-medium rounded-sm border border-[#DDCEEE] bg-[#F3ECF9]">{mentor.experience}</p>
                <p className="text-[#9985A7] px-1 py-2 font-[Chivo] text-xs font-medium rounded-sm border border-[#DDCEEE] bg-[#F3ECF9]">{mentor.location}</p>
                <p className="text-[#9985A7] px-1 py-2 font-[Chivo] text-xs font-medium rounded-sm border border-[#DDCEEE] bg-[#F3ECF9]">{mentor.timezone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Students */}
        <div className="mt-5">
          <h2 className="text-[#6F01D0] font-semibold text-xs">Students</h2>
        </div>
        <div className="flex flex-col px-10 gap-2">
          {ApplicationsData.students.map((student, index) => (
            <div className="flex justify-center items-center" key={index}>
              <input type="checkbox" />
              <div className="flex items-center">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={40}
                  height={40}
                />
                <p>{student.name}</p>
                <p>{student.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <ButtonRedBorder value="Reject" />
                <ButtonPurple value="Accept" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default Applications;
