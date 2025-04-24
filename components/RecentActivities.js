"use client";
import Image from "next/image";
import SectionHeader from "./Header/SectionHeader";
const RecentActivities = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
      <SectionHeader
        title="Recent Activities"
        onClick={() => console.log("See all clicked")}
        showSeeAll
      />{" "}
      <div className="space-y-2 py-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="text-xs py-3 text-gray-600 flex items-start gap-2"
          >
            <div className="h-8 w-8  rounded-full">
              {activity.profile ? (
                <Image
                  className="h-full w-full"
                  src={activity.profile}
                  alt="Profile Image"
                  width={80}
                  height={30}
                />
              ) : null}
            </div>{" "}
            <p>
              <strong className="text-gray-800">{activity.title}</strong> <br />
              <span className="text-[10px] text-gray-500">
                {activity.detail}
              </span>{" "}
              <br />
              <span className="text-[10px] text-gray-500">{activity.time}</span>
            </p>
          </div>
        ))}
      </div>
      {/* <button className="text-purple-600 text-xs font-medium">See all</button> */}
    </div>
  );
};

export default RecentActivities;
