import React from 'react'

const RecentActivityCard = ({recentActivity}) => {
    return (
        <div className="flex items-center mb-6 border-b border-[#F3F3F3] py-2 ">

            {/* User info */}
            <div className="flex flex-1 flex-col sm:flex-row sm:items-center">
                {/* Avatar and name section */}
                <div className="flex items-center flex-1">
                    <img
                        src={recentActivity.avatar}
                        alt={recentActivity.activity}
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h3 className="text-sm font-bold text-[#4f4f4f]">{recentActivity.activity}</h3>
                        <p className="text-xs text-[#7D8DA6]">{recentActivity.details}</p>
                        <p className="text-xs text-[#7D8DA6]">{recentActivity.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecentActivityCard
