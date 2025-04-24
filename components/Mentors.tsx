import React from "react";
import Image from "next/image";
import { EllipsisVertical, Menu } from "lucide-react";

const mentors = [
  {
    name: "Maxwell Smith",
    img: "/max.png",
  },
  {
    name: "Adeati Samuel",
    img: "/ade.jpg",
  },
];
const Mentors = () => {
  return (
    <section className="mentors animate__animated animate__slideInUp bg-[#ffffff] rounded-[8px] space-y-5 px-4 py-6">
      <div className="flex justify-between ">
        <div className="flex gap-6 items-center">
          <button>
            <Menu className="text-[#000000]" />
          </button>
          <p className="text-[#B0B0B0] font-bold text-base">Mentors</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-semibold text-[#6F01D0] text-[12.27px]">See all</p>
          <button>
            <EllipsisVertical className="text-[#000000]" />
          </button>
        </div>
      </div>

      <div>
        <div className="space-y-6 px-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-[#F3F3F3] pb-2"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={mentor.img}
                  alt="time"
                  width={32}
                  height={32}
                  className={`rounded-full h-10 w-10`}
                />
                <div className="">
                  <h1 className="text-[#4F4F4F] font-bold text-[14.4px]">
                    {mentor.name}
                  </h1>
                  <p className="text-[#7D8DA6] text-[10px]">Product Designer</p>
                </div>
              </div>
              <button className="bg-[#6F01D0] py-1 px-5 text-white rounded-[16px]">
                Message
              </button>
            </div>
          ))}
          <button className="w-full text-center bg-[#DDD6FB] py-3 rounded-[24px] text-[#6F01D0] font-semibold text-sm">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
