import { useState } from 'react';
import { EllipsisVerticalIcon, FunnelIcon, Bars4Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ProgramsList() {
    const [activeFilter, setActiveFilter] = useState('Active');

    const programs = [
        {
            id: 1,
            title: "Fundamentals of User Interface & Experience",
            description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
            status: "Bootcamp",
            mentors: 3,
            img: "/proimg1.jpg",
        },
        {
            id: 2,
            title: "Colour Hack Practical Group Call",
            description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
            status: "Group Call",
            mentors: 2,
            hostedBy: "Faith Okehi",
            img: "dash.jpg",
        },
        {
            id: 3,
            title: "Colour Hack Practical Group Call",
            description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
            status: "Group Call",
            mentors: 2,
            hostedBy: "Saf",
            img: "/dash.jpg",
        }
    ];

    return (
        <div className="bg-white py-3 px-4 sm:py-4 sm:px-6 rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
                <div className="flex gap-1 sm:gap-2">
                    <Bars4Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <h2 className="text-xs sm:text-sm font-medium text-gray-300">Programs</h2>
                </div>
                <div className="flex space-x-1 sm:space-x-2">
                    <a href="#" className="text-primaryDark text-xs sm:text-sm">See all</a>
                    <button>
                        <EllipsisVerticalIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="flex justify-end items-center mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm text-gray-500 mr-1 sm:mr-2">Filter:</div>
                <div className="relative">
                    <button className="flex items-center text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                        {activeFilter}
                        <FunnelIcon className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
                {programs.map((program) => {
                    if (program.id === 1) {
                        // Card A – Bootcamp
                        return (
                            <div key={program.id} className="p-3 sm:p-4 rounded-lg shadow-lg border border-gray-200 bg-white transform transition duration-300 ease-in-out hover:scale-105 animate-fade-in-up">
                                <div
                                    className="flex items-start justify-start mb-2 overflow-hidden bg-cover bg-center h-16 sm:h-20 relative rounded"
                                    style={{ backgroundImage: `url(${program.img})` }}
                                >
                                    <div className="absolute inset-0 bg-black/50 z-10" />
                                    <h3 className="font-bold text-base sm:text-base text-white mb-1 sm:mb-2 px-2 py-1 sm:py-2 z-20 relative">
                                        {program.title}
                                    </h3>
                                </div>

                                <div className="bg-blue-100 text-blue-800 text-xs flex gap-1 sm:gap-2 mb-1 sm:mb-2 px-2 py-0.5 rounded-xl w-20 sm:w-24 items-center">
                                    <span className="rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-blue-300"></span>
                                    <span>{program.status}</span>
                                </div>

                                <p className="text-xs font-bold text-gray-700 mb-2 sm:mb-4 line-clamp-2">{program.description}</p>

                                <div className="flex items-center flex-wrap gap-1 justify-between">
                                    <div className="flex -space-x-1 sm:-space-x-2">
                                        {Array(Math.min(program.mentors, 3)).fill(0).map((_, idx) => (
                                            <div key={idx} className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white">
                                                <Image
                                                    src="/pep3.png"
                                                    alt="Mentor"
                                                    fill
                                                    className="rounded-full bg-gray-200"
                                                />
                                            </div>
                                        ))}
                                        {program.mentors > 3 && (
                                            <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                                                +{program.mentors - 3}
                                            </div>
                                        )}
                                        <span className="ml-2 sm:ml-4 text-xs"> Mentors</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <button className="text-[10px] sm:text-xs whitespace-nowrap text-gray-600 border border-gray-300 py-0.5 sm:py-1 px-2 sm:px-3 rounded">
                                            View
                                        </button>
                                        <button className="text-[10px] sm:text-xs whitespace-nowrap text-white bg-primary py-0.5 sm:py-1 px-2 sm:px-3 rounded">
                                            Assign
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        // Card B – Group Call
                        return (
                            <div key={program.id} className="py-3 sm:py-4 rounded-lg shadow-lg border border-gray-200 bg-white px-3 sm:px-5 transform transition duration-300 ease-in-out hover:scale-105 animate-fade-in-up">
                                <div
                                    className="flex items-start justify-start mb-2 overflow-hidden bg-cover bg-center h-16 sm:h-20 relative rounded"
                                    style={{ backgroundImage: `url(${program.img})` }}
                                >
                                    <div className="absolute inset-0 bg-black/50 z-10" />
                                    <h3 className="font-bold text-base sm:text-base text-white mb-1 sm:mb-2 px-2 py-1 sm:py-2 z-20 relative">
                                        {program.title}
                                    </h3>
                                </div>

                                <div className="bg-green-100 text-green-800 whitespace-nowrap text-xs flex gap-1 sm:gap-2 mb-1 sm:mb-2 px-2 py-0.5 rounded-xl w-20 sm:w-24 items-center">
                                    <span className="rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-green-300"></span>
                                    <span>{program.status}</span>
                                </div>

                                <p className="text-xs font-bold text-gray-700 mb-2 sm:mb-4 line-clamp-2">{program.description}</p>

                                <div className="flex w-full items-center justify-between flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                                    <div className="flex items-center">
                                        <div className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 mr-1">
                                            <Image
                                                src="/pep3.png"
                                                alt={program.hostedBy}
                                                fill
                                                className="rounded-full bg-gray-200"
                                            />
                                        </div>
                                        <span className="text-[10px] sm:text-xs whitespace-nowrap">Hosted by:</span>
                                        <span className="text-[10px] sm:text-xs whitespace-nowrap ml-1">{program.hostedBy}</span>
                                    </div>

                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <button className="text-[10px] sm:text-xs whitespace-nowrap text-gray-600 border border-gray-300 py-0.5 sm:py-1 px-2 sm:px-3 rounded">
                                            View
                                        </button>
                                        <button className="text-[10px] sm:text-xs whitespace-nowrap text-white bg-primary py-0.5 sm:py-1 px-2 sm:px-3 rounded">
                                            Assign
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}