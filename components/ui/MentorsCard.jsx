import React from 'react'

const MentorsCard = ({mentor}) => {
    return (
        <div className="flex items-center mb-6 border-b border-[#F3F3F3] py-2 ">

            {/* User info */}
            <div className="flex flex-1 flex-col sm:flex-row sm:items-center">
                {/* Avatar and name section */}
                <div className="flex items-center flex-1">
                    <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h3 className="text-sm font-bold text-[#4f4f4f]">{mentor.name}</h3>
                        <p className="text-xs text-[#7D8DA6]">{mentor.stack}</p>

                    </div>
                </div>
            </div>


            <div className="ml-4 flex items-center gap-2">
                <button className="px-4 py-2 text-xs font-medium bg-[#6F01D0] text-white rounded-full cursor-pointer">
                    Message
                </button>
            </div>
        </div>
    )
}
export default MentorsCard
