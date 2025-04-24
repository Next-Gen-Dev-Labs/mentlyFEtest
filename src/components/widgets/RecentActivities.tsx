import React from "react";
import Card from "../ui/Card";
import { CiMenuKebab } from "react-icons/ci";
import { Menu } from "lucide-react";
import { RecentActivitiesData } from "@/db/dataBase";
import Image from "next/image";

const RecentActivities = () => {
  return (
    <Card className="h-full relative">
      <div className="flex px-2 py-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <Menu />
          <h1 className="text-[#B0B0B0] text-base font-bold">Recent Activities</h1>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-[#6F01D0] font-semibold text-xs">See all</h2>
          <CiMenuKebab />
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide">
      <div className="space-y-4 px-3">
        {RecentActivitiesData.map((activity, index) => (
          <div key={index} className="flex items-start border-b pb-2 border-[#F1EFEF] gap-2 text-start">
            <Image
              src={activity.image}
              alt="activityImage"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div className="space-y-1.5">
              <h1 className="text-sm font-bold font-[#011627]">
                {activity.title}
              </h1>
              <p className="text-[#707991] text-xs font-normal">
                {activity.notification}
              </p>
              <p className="font-light text-[#707991] text-xs">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      </main>
    </Card>
  );
};

export default RecentActivities;
