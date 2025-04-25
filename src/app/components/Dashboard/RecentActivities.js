import React from 'react'
import Image from 'next/image'

const RecentActivities = () => {
    const list = [
        {
            title: "KYC Verification",
            time: "25 minutes Ago",
            logo: "/kyc.svg",
            content: "45 new persons just signed up on Mently.",
        },
        {
            title: "New User Sign Up!",
            time: "25 minutes Ago",
            logo: "/new-user.svg",
            content: "45 new persons just signed up on Mently.",
        },
        {
            title: "Withdrawal Request",
            time: "25 minutes Ago",
            logo: "/samuel.svg",
            content: "Mardian requested a withdrawal.",
        },
    ]

    return (
        <div className='lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 rounded shadow-md p-4 bg-white'>
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <Image src="/menu.svg" alt="Menu" width={16} height={16} />

                <div className="flex items-center gap-[2.5rem] md:gap-[9rem]">
                    <h1 className="text-left text-[#B0B0B0] text-base font-bold">Recent Activities</h1>
                    <button className="font-semibold text-xs text-[#6F01D0]">See All</button>
                </div>

                <Image src="/more.svg" alt="More" width={18} height={18} />
            </div>

            {/* List */}
            <div className="space-y-4 mt-10">
                {list.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start pb-4 border-b border-[#D0D5DD] last:border-0">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={item.logo} alt={item.title} width={40} height={40} />
                        </div>
                        <div>
                            <h2 className="font-bold text-sm text-[#011627]">{item.title}</h2>
                            <p className="text-[10px] md:text-xs text-[#707991]">{item.content}</p>
                            <p className="text-xs text-[#707991] font-light">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentActivities
