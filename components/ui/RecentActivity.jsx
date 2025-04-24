import React from 'react'
import DashboardCards from "@/components/dashboard/DashboardCards";
import RecentActivityCard from "@/components/ui/RecentActivityCard";
import {recentActivityData} from "@/constants";

const RecentActivity = () => {

    return (
       <DashboardCards title="Recent Activity">
           <div className="mt-6 px-5 ">
               {recentActivityData.map(recentActivity => (
                   <RecentActivityCard key={recentActivity.id} recentActivity={recentActivity}/>
               ))}

           </div>
       </DashboardCards>
    )

}
export default RecentActivity
