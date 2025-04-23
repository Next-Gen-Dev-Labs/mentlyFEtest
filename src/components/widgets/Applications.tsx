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
          <h2 className="text-[#6F01D0] font-semibold text-xs">Mentors</h2>
        </div>
        <div className="flex flex-col gap-2">
          {ApplicationsData.mentors.map((mentor, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-[#6F01D0] font-semibold text-xs">
                    {mentor.name}
                  </p>
                  <p className="text-[#6F01D0] font-semibold text-xs">
                    {mentor.email}
                  </p>
                </div>

                <div>
                  <ButtonRedBorder value="Reject" />
                  <ButtonPurple value="Accept" />
                </div>
              </div>

              <div>
                <p>{mentor.skill}</p>
                <p>{mentor.experience}</p>
                <p>{mentor.location}</p>
                <p>{mentor.timezone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Students */}
        <div>
          <h2 className="text-[#6F01D0] font-semibold text-xs">Students</h2>
        </div>
        <div className="flex flex-col gap-2">
          {ApplicationsData.students.map((student, index) => (
            <div key={index}>
              <input type="checkbox" />
              <div>
                <Image
                  src={student.image}
                  alt={student.name}
                  width={40}
                  height={40}
                />
                <p>{student.name}</p>
                <p>{student.email}</p>
              </div>
              <div>
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
