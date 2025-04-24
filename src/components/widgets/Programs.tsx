import React from "react";
import Card from "@/components/ui/Card";
import { programs } from "@/db/dataBase";
import Image from "next/image";
import ButtonWithBorderPurple from "@/components/ui/ButtonWithBorderPurple";
import ButtonPurple from "@/components/ui/ButtonPurple";
import { ChevronDown, Menu } from "lucide-react";
import { CiMenuKebab } from "react-icons/ci";
import { Settings } from "lucide-react";

const Programs = () => {
  return (
    <Card className="h-full relative">
      <div className="rounded-lg">
        <div className="px-2 py-1">
          <div>
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
              <div className="relative inline-flex items-center">
                <select className="text-xs border appearance-none pr-8 rounded py-1">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <ChevronDown className="absolute right-2 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[4rem] overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          {programs.map((programsItems, index) => (
            <Card key={index} className="p-3">
              <div className="space-y-2.5">
                <div className="relative w-full h-[160px] rounded-lg overflow-hidden">
                  <Image
                    src={programsItems.backgroundImage}
                    alt="Description of the image"
                    fill
                    objectFit="cover"
                  />

                  {/* Title and tag */}
                  <div className="absolute bottom-4 left-0 top-0 right-0 px-4">
                    <div className="flex justify-between mt-8">
                      <h1 className="text-base font-bold text-white">
                        {programsItems.title}
                      </h1>

                      {index === 0 && <Settings color="#fff" />}
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                  ${
                    programsItems.tag === "Bootcamp"
                      ? "bg-[#D4E0F3] text-[#0077FF]"
                      : " bg-[#D4F3D4] text-[#008000]"
                  }
                `}
                    >
                      <span
                        className={
                          programsItems.tag !== "Bootcamp"
                            ? "w-2 h-2 bg-[#1F8B01] rounded-full mr-1.5"
                            : "w-2 h-2 bg-[#1C0AE1] rounded-full mr-1.5"
                        }
                      ></span>
                      {programsItems.tag}
                    </span>
                  </div>
                </div>

                <p className="text-[#A3A3A3] text-xs font-normal">
                  {programsItems.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="space-x-2 flex items-center">
                    {Array.isArray(programsItems.avatars) ? (
                      <div className="flex relative">
                        {programsItems.avatars.map((avatar, i) => (
                          <Image
                            className="rounded-full border-2 border-white"
                            style={{ marginLeft: i > 0 ? "-15px" : "0" }}
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
                    <h1 className="text-xs font-semibold text-[#6C6C6C]">
                      {programsItems.mentors}
                    </h1>
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
