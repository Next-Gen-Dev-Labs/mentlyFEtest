import {
  ActivityType,
  ApplicationTypeMentor,
  ApplicationTypeStudent,
  MentorType,
} from "@/types/data";
import Image from "next/image";
import React from "react";

const ActivityCard = ({ activity }: { activity: ActivityType }) => {
  return (
    <div className="flex w-full flex-col border-b border-b-[#DBDBDB] py-3">
      <div className="flex w-full items-center gap-2">
        <Image
          src={activity.image}
          className="w-8 h-8 rounded-full"
          width={100}
          height={100}
          alt=""
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[#4F4F4F] font-bold text-sm">{activity.title}</h1>
          <p className="text-[10px] text-[#7D8DA6]">{activity.description}</p>
          <p className="text-[10px] text-[#7D8DA6]">
            {activity.time} minutes ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
