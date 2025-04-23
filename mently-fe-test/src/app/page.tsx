"use client";

import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import React, { useEffect, useState } from "react";
import Programs from "./component/Programs";
import Users from "./component/Users";
import GroupCall from "./component/GroupCalls";
import Application from "./component/Application";
import Mentors from "./component/Mentors";
import RecentActivities from "./component/RecentActivities";
import ManageWidgets from "./component/ManageWidgets";

const Home = () => {
  const [manageWidgets, setManageWidgets] = useState(false);
  useEffect(() => {
    if (manageWidgets) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [manageWidgets]);

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-end max-sm:justify-start gap-6">
          <ICONS.ViewThumbnail />
          <ICONS.GalleryThumbnail />
          <p
            onClick={() => setManageWidgets(!manageWidgets)}
            className="font-bold max-lg:text-sm text-[#1F0954] cursor-pointer hover:text-[#6F01D0] hover:underline"
          >
            Manage Widgets
          </p>
        </div>
        <div className="mt-5 bg-[#6F01D0] rounded py-2 px-6 flex lg:flex-row flex-col max-lg:gap-2 items-center max-sm:items-start lg:justify-between">
          <p className="lg:text-[26px] md:text-[20px] text-[16px] font-semibold text-white">
            Welcome Aboard, Blessing 👋
          </p>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] text-[#BDBDBD] font-semibold max-sm:mx-0 mx-10">
            We’re thrilled to have you join Techrity Team!
          </p>
          <div className="">
            <Button
              variant="outlined"
              className="text-[#1F0954] font-bold hover:text-[#FFF] hover:border-[#FFF]"
            >
              Update Profile
            </Button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 items-start mt-4">
          <div className="lg:w-[35%] w-full flex flex-col gap-4">
            <Programs />
            <Users />
          </div>
          <div className="lg:w-[65%] w-full flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <GroupCall />
            </div>
            <div className="flex md:flex-row flex-col items-start justify-center gap-4">
              <div className="lg:w-[55%] w-full">
                <Application />
              </div>
              <div className="lg:w-[45%] w-full flex flex-col gap-4">
                <Mentors />
                <RecentActivities />
              </div>
            </div>
          </div>
        </div>
      </div>
      {manageWidgets && (
        <div className="fixed inset-0 bg-white/10 bg-opacity-10 backdrop-blur-sm z-500">
          <ManageWidgets setManageWidgets={setManageWidgets} />
        </div>
      )}
    </div>
  );
};

export default Home;
