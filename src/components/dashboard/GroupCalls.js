import { EllipsisVerticalIcon, Bars4Icon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function GroupCalls() {
    const calls = [
        {
            id: 1,
            title: "Weekly Meeting - Product Demo Review with Testers",
            status: "Ongoing",
            date: "Jul 30, 2024",
            time: "11:00AM",
            group: "Study Group",
            subgroup: "UX Strategy Study Group",
            participants: 3,
            mentors: "Mentors",
            img: "/dash.jpg"
        },
        {
            id: 2,
            title: "Weekly Meeting - Product Demo Review with Testers",
            status: "Upcoming",
            date: "Jul 30, 2024",
            time: "11:00AM",
            group: "Study Group",
            subgroup: "UX Strategy Study Group",
            participants: 3,
            mentors: "Mentors",
            img: "/groimg2.jpg"
        },
        {
            id: 3,
            title: "Weekly Meeting - Product Demo Review with Testers",
            status: "Ongoing",
            date: "Jul 30, 2024",
            time: "11:00AM",
            group: "Study Group",
            subgroup: "UX Strategy Study Group",
            participants: 3,
            mentors: "Mentors",
            img: "/groimg3.jpg"
        }
    ];

    return (
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm overflow-hidden w-full">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
                <div className="flex gap-1 sm:gap-2">
                    <Bars4Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <h2 className="text-sm sm:text-base font-medium text-gray-300">Group Calls</h2>
                </div>
                <div className="flex space-x-1 sm:space-x-2">
                    <a href="#" className="text-primaryDark text-xs sm:text-sm">See all</a>
                    <button>
                        <EllipsisVerticalIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2">
                {calls.map((call) => (
                    <div key={call.id} className="p-3 sm:p-4 rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div
                            className="flex items-start justify-start mb-2 overflow-hidden bg-cover bg-fit shadow-sm h-16 sm:h-20 relative rounded-lg"
                            style={{ backgroundImage: `url(${call.img})` }}
                        >
                        </div>
                        <div className={`flex items-center gap-1 sm:gap-1 text-xs whitespace-nowrap sm:text-sm font-bold w-fit px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-xl ${call.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${call.status === 'Ongoing' ? 'bg-green-600' : 'bg-blue-600'}`}></span>
                            <span>{call.status}</span>
                        </div>

                        <div className="p-2 sm:p-3">
                            <h3 className="font-bold text-gray-400 text-sm sm:text-lg mb-1 sm:mb-2 line-clamp-2">{call.title}</h3>
                            <div className="border border-gray-400/30 outline-none w-full mt-2 mb-3"></div>
                            <div className="flex items-center justify-between whitespace-nowrap gap-1 w-full text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{call.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{call.time}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="mb-1 sm:mb-0">
                                    <span className="text-[10px] sm:text-[10px] text-gray-300">{call.group}</span>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black mr-1 sm:mr-1"></div>
                                        <span className="text-[8px] sm:text-[9px]">{call.subgroup}</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] sm:text-[10px] text-gray-300">{call.mentors}</span>
                                    <div className="flex -space-x-1 sm:-space-x-2">
                                        {Array(Math.min(call.participants, 3)).fill(0).map((_, idx) => (
                                            <div key={idx} className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                                                <Image
                                                    src="/pep6.png"
                                                    alt="Participant"
                                                    fill
                                                    className="rounded-full object-cover bg-gray-200"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-3 sm:mt-5 gap-3 '>
                                <button className="border hover:bg-primary hover:text-white border-purple-100 text-primary w-full text-xs sm:text-[12px] whitespace-nowrap px-1 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-lg">View Participants</button>
                                <button className="bg-primary hover:bg-primaryLight text-white text-xs w-full sm:text-sm whitespace-nowrap px-1 py-1 sm:px-2 sm:py-1.5 rounded-lg">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}