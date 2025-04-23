import React from "react";
import Header from "../ui/Header";
import { ActivityItems } from "@/data/activity.items";
import { Cards } from "../ui/Cards";
import { ActivityType } from "@/types/data";

const Activities = () => {
  return (
    <div className="w-full rounded-[10px] py-2 bg-white">
      <Header title="Recent Activities" />
      <div className="w-full px-5">
        {ActivityItems.map((activity: ActivityType, index: number) => (
          <Cards.ActivityCard activity={activity} key={index} />
        ))}
        <div className="mt-4 w-full"></div>
      </div>
    </div>
  );
};

export default Activities;
