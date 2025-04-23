import React from "react";
import Header from "../ui/Header";
import { MentorItems } from "@/data/mentor.items";
import { MentorType } from "@/types/data";
import { Cards } from "../ui/Cards";

const Mentors = () => {
  return (
    <div className="w-full rounded-[10px] py-2 bg-white">
      <Header title="Mentors" />
      <div className="w-full px-5">
        {MentorItems.map((mentor: MentorType, index: number) => (
          <Cards.MentorCard mentor={mentor} key={index} />
        ))}
        <button className="h-11 text-sm font-semibold text-[#6F01D0] mt-4 mb-2 bg-[#DDD6FB] rounded-3xl w-full">
          See All
        </button>
      </div>
    </div>
  );
};

export default Mentors;
