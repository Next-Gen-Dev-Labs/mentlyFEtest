import React from 'react'
import DashboardCards from "@/components/dashboard/DashboardCards";
import {mentorsData} from "@/constants";
import MentorsCard from "@/components/ui/MentorsCard";

const Mentors = () => {
    return (
        <DashboardCards title="Mentors" mentors>
            <div className="mt-6 px-5 ">
                {mentorsData.map(mentor => (
                    <MentorsCard key={mentor.id} mentor={mentor}/>
                ))}
                <button className="px-6 py-4  text-[#6F01D0] bg-[#DDD6FB] font-bold rounded-3xl w-full mt-1 cursor-pointer">
                    See all
                </button>
            </div>
        </DashboardCards>
    )
}
export default Mentors
