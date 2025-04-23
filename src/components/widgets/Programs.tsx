import React from "react";
import Card from "../ui/Card";
import { programs } from "@/db/dataBase";
import Image from "next/image";
import ButtonWithBorderPurple from "@/components/ui/ButtonWithBorderPurple";
import ButtonPurple from "../ui/ButtonPurple";
import { ChevronDown, Menu } from "lucide-react";
import { CiMenuKebab } from "react-icons/ci";

const Programs = () => {
  return (
    <Card className="h-full relative">
      <div className=" px-2 py-1">
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

        <div className="flex justify-end items-center gap-3 mx-6">
          <p className="text-[#918C9C] text-xs font-medium">Filter</p>
          <select className="text-xs border-2 outline-0 px-3 py-1.5 rounded-md border-[#E1E7EC] flex items-center gap-2 font-medium text-[#595564]">
            <option value="Active">
              Active
              <ChevronDown />
            </option>
            <option value="Inactive">
              Inactive
              <ChevronDown />
            </option>
          </select>
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[4rem] overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          {programs.map((programsItems, index) => (
            <Card key={index} className="p-3">
              <div className="space-y-2.5">
                <div>
                  <Image
                    src="/path/to/your/image.jpg"
                    alt="Description of the image"
                    width={500}
                    height={300}
                  />
                  <h1></h1>
                  <p></p>
                </div>

                <p className="text-[#A3A3A3] text-xs font-normal">{programsItems.description}</p>

                <div className="flex justify-between items-center">
                  <div className="space-x-2 flex items-center">
                    {Array.isArray(programsItems.avatars) ? (
                     <div className="flex relative">
                      { programsItems.avatars.map((avatar, i) => (
                        <Image 
                          className="rounded-full border-2 border-white"
                          style={{ marginLeft: i > 0 ? '-15px' : '0' }}
                          key={i} 
                          src={avatar} 
                          alt={`avatar ${i + 1}`} 
                          width={32} 
                          height={32} 
                        />
                      ))}
                     </div>
                    ) : (
                      <Image 
                        src={programsItems.avatar} 
                        alt="avatar" 
                        width={32} 
                        height={32} 
                      />
                    )}
                    <h1 className="text-xs font-semibold text-[#6C6C6C]">{programsItems.mentors}</h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <ButtonWithBorderPurple
                      className="px-2 py-2 rounded-md"
                      value="View Details"
                    />
                    <ButtonPurple
                      className="px-4 py-2 rounded-md text-xs"
                      value="Analysis"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default Programs;
