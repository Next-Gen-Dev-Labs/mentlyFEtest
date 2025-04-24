import React from "react";
import { Button } from "../ui/button";

export const ProfileBanner = () => {
  return (
    <div className="bg-brand-blue flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 py-4 rounded">
      <div className="text-center sm:text-left flex flex-col gap-1 xl:flex-row items-center md:gap-4">
        <h2 className="font-semibold text-lg sm:text-2xl text-white">
          Welcome Aboard, Blessing 👋
        </h2>
        <p className="text-brand-gray font-semibold tracking-widest text-sm sm:text-base">
          We’re thrilled to have you join Techrity Team!
        </p>
      </div>
      <Button className="bg-white hover:bg-white text-black font-bold cursor-pointer w-full sm:w-auto">
        Update Profile
      </Button>
    </div>
  );
};
