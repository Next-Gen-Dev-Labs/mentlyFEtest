import Image from 'next/image';
import { EllipsisVerticalIcon, Bars4Icon } from '@heroicons/react/24/outline';

export default function Applications() {
    const applications = {
        mentors: [
            {
                id: 1,
                name: "Maxwell Smith",
                email: "maxwellsmith@gmail.com",
                image: "/pep6.png", 
                // role: "Product Designer",
                // specialization: "System Experience",
                // location: "Lagos, Nigeria",
                // timezone: "GMT +1"
            },
            // {
            //     id: 2,
            //     name: "Adeati Samuel",
            //     email: "maxwellsmith@gmail.com",
            //     image: "/avatar-2.svg", 
            //     role: "Product Designer",
            // }
        ],
        students: [
            {
                id: 3,
                name: "Adeati Samuel",
                email: "maxwellsmith@gmail.com",
                image: "/pep2.jpg", 
            },
            {
                id: 4,
                name: "Maxwell Smith",
                email: "maxwellsmith@gmail.com",
                image: "/pep6.png", 
            },
            {
                id: 5,
                name: "Adeati Samuel",
                email: "maxwellsmith@gmail.com",
                image: "/pep2.jpg",
            },
            {
                id: 6,
                name: "Adeati Samuel",
                email: "maxwellsmith@gmail.com",
                image: "/pep6.png", 
            }
        ]
    };

    return (
        <div className="bg-white px-4 py-4 sm:py-6 rounded-lg shadow-sm overflow-hidden w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <Bars4Icon className="w-5 h-5" />
                    <h2 className="text-xs sm:text-sm font-medium text-gray-300">Applications</h2>
                </div>
                <div className="flex space-x-2">
                    <a href="#" className="text-primaryDark text-sm">See all</a>
                    <button>
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Mentors Section */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-gray-300">Mentors</h3>
                <div className="space-y-4">
                    {applications.mentors.map((application) => (
                        <ApplicationCard key={application.id} application={application} />
                    ))}
                    <div className="flex flex-wrap items-center justify-evenly gap-2 mt-4">
                        <button className="bg-purple-100 text-purple-600 border border-purple-600 whitespace-nowrap text-[10px] px-3 py-1 rounded">
                            Product Designer
                        </button>
                        <button className="bg-blue-50 text-blue-500 border border-blue-500 whitespace-nowrap text-[10px] px-3 py-1 rounded">
                            4 Years Experience
                        </button>
                        <button className="bg-blue-100 text-blue-400 border border-blue-400 whitespace-nowrap text-[10px] px-3 py-1 rounded">
                            Lagos, Nigeria
                        </button>
                        <button className="bg-gray-200 text-gray-600 border border-gray-700 whitespace-nowrap text-[10px] px-3 py-1 rounded">
                            GMT +1
                        </button>
                    </div>
                </div>
                <div className="border border-gray-400/30 outline-none w-full mt-5 mb-4"></div>
            </div>

            {/* Students Section */}
            <div>
                <h3 className="text-sm font-semibold mb-3 text-gray-400">Students</h3>
                <div className="space-y-4">
                    {applications.students.map((application) => (
                        <ApplicationCard key={application.id} application={application} />
                    ))}
                </div>
                
            </div>
        </div>
    );
}

function ApplicationCard({ application }) {
    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center flex-1 min-w-0">
                <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mr-2"
                />
                <div className="relative w-6 h-6 mr-2 flex-shrink-0">
                    <Image
                        src={application.image || "/avatar-placeholder.svg"} 
                        alt={application.name}
                        fill
                        className="rounded-full bg-gray-200 object-cover"
                    />
                </div>
                <div className="min-w-0 overflow-hidden">
                    <div className="font-medium text-sm truncate">{application.name}</div>
                    <div className="text-xs text-gray-500 truncate">{application.email}</div>
                </div>
            </div>

            {application.role && (
                <div className="hidden md:block px-3">
                    <div className="text-sm font-medium">{application.role}</div>
                    {application.specialization && (
                        <div className="text-xs bg-gray-100 px-2 py-0.5 rounded inline-block">
                            {application.specialization}
                        </div>
                    )}
                </div>
            )}

            {application.location && (
                <div className="hidden md:flex items-center text-xs text-gray-500 px-3">
                    <div className="w-4 h-3 mr-1 rounded-sm bg-gray-200"></div>
                    {application.location}
                    <span className="ml-2">{application.timezone}</span>
                </div>
            )}

            <div className="flex space-x-2">
                <button className="bg-red-50 hover:bg-red-100 hover:text-white text-red-600 text-xs px-2 py-1 sm:px-3 md:px-5 md:py-2 rounded">
                    Reject
                </button>
                <button className="bg-primary hover:bg-primaryLight text-white text-xs px-2 py-1 sm:px-3 md:px-5 md:py-2 rounded">
                    Accept
                </button>
            </div>
            
        </div>
        
    );
}