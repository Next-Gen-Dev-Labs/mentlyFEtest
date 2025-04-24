import { activityData } from "@/utils/data";
import React from "react";

const Activities = () => {
  return (
    <div className="bg-white p-4 rounded-[12.04px]">
      <div>
        {/* panel */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img src="/four-outline.svg" alt="outline" />
            </div>
            <p className="font-bold text-[#B0B0B0]">Recent Activities</p>
          </div>

          {/* see all */}
          <div>
            <div className="flex items-center gap-5">
              <p className="text-[12.27px] font-semibold text-[#6F01D0]">
                See all
              </p>
              <button className="cursor-pointer">
                <img src="/seeall.svg" alt="See all" />
              </button>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="px-1 mt-7 flex flex-col gap-4">
          {activityData.map((activity) => (
            <div
              key={activity.id}
              className="flex gap-2 border-b border-[#F1EFEF] pb-1 last:border-b-0"
            >
              {/* profile */}
              <div>
                <div className="w-[32px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={activity.profileImage}
                    alt={activity.title}
                  />
                </div>
              </div>
              {/* activity */}
              <div>
                <h1 className="text-sm text-[#011627] font-bold">
                  {activity.title}
                </h1>
                <p className="text-xs text-[#707991] py-1">
                  {activity.description}
                </p>
                <p className="text-xs text-[#707991]">{activity.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
