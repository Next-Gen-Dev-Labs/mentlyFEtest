import Tag from "@/components/ui/Tag";


const ApplicantCard = ({ application, onSelect }) => {
    return (
        <div className="border-b border-[#F3F3F3] py-4">
            <div className="flex items-center mb-2">
                {/* Checkbox */}
                <div className="pr-4">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#A5A5A5] border-1 text-purple-600 focus:ring-purple-500"
                        onChange={(e) => onSelect(application.id, e.target.checked)}
                    />
                </div>

                {/* User info */}
                <div className="flex flex-1 flex-col sm:flex-row sm:items-center">
                    {/* Avatar and name section */}
                    <div className="flex items-center flex-1">
                        <img
                            src={application.avatar}
                            alt={application.name}
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="ml-3">
                            <h3 className="text-sm font-bold text-[#4f4f4f]">{application.name}</h3>
                            <p className="text-xs text-[#7D8DA6]">{application.email}</p>

                        </div>
                    </div>

                    {/* Tags and location */}

                </div>

                {/* Action buttons */}
                <div className="ml-4 flex items-center gap-2">
                    <button className="px-[23px] py-[7px] text-[9px] border font-medium bg-[#FFEDED] text-[#D83535] border-[#D09696] rounded-md">
                        Reject
                    </button>
                    <button className="px-6 py-2 text-[9px] font-medium bg-[#6F01D0] text-white rounded-md">
                        Accept
                    </button>
                </div>
            </div>
            <div className="mt-2 ml-8 sm:mt-0 flex flex-wrap gap-2 items-center">
                {application.tags && application.tags.length > 0 && (
                    application.tags.map((tag, index) => (
                        <Tag key={index} label={tag.label} color={tag.color} flag={tag.flag} />
                    ))
                )}


            </div>
        </div>
    );
};

export default ApplicantCard;