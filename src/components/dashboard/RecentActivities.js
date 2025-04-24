// components/dashboard/RecentActivities.jsx
import { EllipsisVerticalIcon, Bars4Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function RecentActivities() {
    const activities = [
        {
            id: 1,
            type: "KYC Verification",
            description: "45 new persons just signed up on Mently.",
            time: "25 minutes Ago",
            img: "/pep8.jpg"
        },
        {
            id: 2,
            type: "New User Sign Up!",
            description: "45 new persons just signed up on Mently.",
            time: "25 minutes Ago",
            img: "/pep5.png" 
        },
        {
            id: 3,
            type: "Withdrawal Request",
            description: "Mardian requested a withdrawal.",
            time: "25 minutes Ago",
            img: "/pep2.jpg"  
        }
    ];

    return (
        <div className="bg-white px-4 py-4 sm:py-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <Bars4Icon className="w-5 h-5" />
                    <h2 className="text-xs sm:text-sm font-medium text-gray-300">Recent Activities</h2>
                </div>
                <div className="flex space-x-2">
                    <a href="#" className="text-primaryDark text-sm">See all</a>
                    <button>
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                        <div className="flex-shrink-0 relative rounded-full overflow-hidden bg-gray-100 w-10 h-10 mr-3">
                            <Image
                                src={activity.img}
                                alt={activity.type}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <div className="font-medium">{activity.type}</div>
                            <div className="text-xs text-gray-500">{activity.description}</div>
                            <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}