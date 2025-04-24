import React from 'react';
import { Hand } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeBanner = () => {
  return (
    <>
        {/* Welcome banner */}
        <div className="flex flex-col md:flex-row mb-2 md:items-center justify-between px-4 py-3 md:px-6 bg-purple-700 text-white rounded-[4px]">
            <div className="flex items-center gap-4">
                <h1 className="text-[26px] flex items-center font-chivo max-md:text-[20px] font-normal">
                    Welcome Aboard, Blessing 👋
                </h1>
                <span className="hidden lg:inline-block opacity-90 text-[20px] text-[#BDBDBD] font-chivo font-semibold">
                    We're thrilled to have you join Techrity Team!
                </span>
            </div>
            <div className="mt-2 md:mt-0">
                <Button size="sm" variant="secondary" className="bg-white text-[16px] cursor-pointer text-[#1F0954] hover:bg-gray-100 transition-all font-chivo">
                    Update Profile
                </Button>
            </div>
        </div>
    </>
  )
}

export default WelcomeBanner