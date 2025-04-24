const GroupCallCard = ({ call }) => {
    return (
        <div className="flex flex-col bg-[#F9F7FF] rounded-lg overflow-hidden mb-4 px-4 py-4">
            {/* Banner Image */}
            <div className="h-18 overflow-hidden">
                <img
                    src={call.bannerImage}
                    alt={call.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Status Badge */}
            <div className=" pt-3">
                <div className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                    call.status === "Ongoing"
                        ? "bg-green-100 text-green-800"
                        : "bg-indigo-100 text-indigo-800"
                }`}>
          <span className={`mr-1.5 w-2 h-2 rounded-full ${
              call.status === "Ongoing" ? "bg-[#1F8B01]" : "bg-indigo-500"
          }`}></span>
                    {call.status}
                </div>
            </div>

            {/* Title */}
            <div className=" pt-2">
                <h3 className="text-[#595564]">{call.title}</h3>
            </div>

            <div className=" w-full h-[1px] bg-[#D0D5DD] my-1"/>

            {/* Meeting Details */}
            <div className=" py-3 flex items-center justify-between ">
                {/* Date */}
                <div className="flex items-center text-[8px] font-medium text-[#595564] border-r-1 border-[#D0D5DD] pr-6">
                    <img src="/images/calender.svg" alt="calendar" className=" mr-2" />
                    <span>{call.date}</span>
                </div>

                {/* Time */}
                <div className="flex items-center text-[8px] font-medium text-[#595564]">
                    <img src="/images/clock.svg" alt="clock" className=" mr-2" />
                    <span>{call.time}</span>
                </div>
            </div>

            {/* Study Group and Participants */}
            <div className=" pb-3 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Study Group</span>
                    <span className="text-sm text-gray-700">{call.studyGroup}</span>
                </div>

                <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">Members</span>
                    <div className="flex -space-x-1">
                        {call.participants.map(participant => (
                            <img
                                key={participant.id}
                                src={participant.avatar}
                                alt="Participant"
                                className="w-6 h-6 rounded-full border border-white"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className=" pb-4 flex justify-between">
                <button className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-purple-600">
                    View Participants
                </button>

                {call.isJoinable ? (
                    <button className="bg-purple-600 rounded-md px-3 py-1.5 text-sm text-white flex items-center">
                        Join Now

                        <img src="/images/forward-arrow.svg" alt="forward arrow" className="ml-4 h-4 w-4" />
                    </button>) : (<button className="bg-[rgba(111,1,208,0.3)] rounded-md px-3 py-1.5 text-sm text-white flex items-center">
                        Join Now

                    <img src="/images/forward-arrow.svg" alt="forward arrow" className="ml-4 h-4 w-4" />
                    </button>)
                }
            </div>
        </div>
    );
};

export default GroupCallCard;