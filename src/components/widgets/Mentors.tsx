"use client"
import React from "react";
import Card from "@/components/ui/Card";
import { ApplicationsData } from "@/db/dataBase";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { CirclePlus, Menu } from 'lucide-react';
import { useRouter } from "next/navigation";

const Mentors = () => {
  const router = useRouter();
  return (
    <Card className="h-full relative">
      <div className="flex items-center justify-between px-3 py-2">
      <div className="flex gap-2">
      <Menu />
      <h1 className="text-base text-[#B0B0B0] font-bold">Mentors</h1>
      </div>
        <div className="flex items-center gap-2">
        <CirclePlus className="text-[#B0B0B0] text-2xl" />
        <button className=" rounded-full hover:bg-gray-100">
          <CiMenuKebab />
        </button>
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide px-4">
        <div className="space-y-4 mb-4">
          {ApplicationsData.students.slice(0, 2).map((mentor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-chivo font-bold md:text-sm text-xs leading-[150%] text-[#4F4F4F]">
                    {mentor.name}
                  </h3>
                  <p className="font-chivo text-xs font-normal text-[#7D8DA6]">
                    Product Designer
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm text-purple-600 bg-purple-100 rounded-full hover:bg-purple-200">
                Message
              </button>
            </div>
          ))}
        </div>

        <button onClick={() => router.push('/mentors')} className="w-full mb-4 py-3 text-center text-[#6F01D0] text-xs font-semibold bg-[#DDD6FB] rounded-3xl transition-all duration-300 cursor-pointer hover:bg-[#cdc3f9]">
          See all
        </button>
      </main>
    </Card>
  );
};

export default Mentors;
