// components/dashboard/Mentors.jsx
import { EllipsisVerticalIcon, Bars4Icon, PlusCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Mentors() {
    const mentors = [
        {
            id: 1,
            name: "Maxwell Smith",
            role: "Product Designer",
            image: "/pep6.png"
        },
        {
            id: 2,
            name: "Adeati Samuel",
            role: "Product Designer",
            image: "/pep2.jpg"
        }
    ];

    return (
        <div className="bg-white px-4 py-4 sm:py-5 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <Bars4Icon className="w-5 h-5" />
                    <h2 className="text-xs sm:text-sm font-medium text-gray-400">Mentors</h2>
                </div>
                <div className="flex space-x-2">
                    <PlusCircleIcon className="text-gray-400 w-7 h-7" />
                    <button>
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="relative w-10 h-10 mr-3">
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    fill
                                    className="rounded-full bg-gray-200"
                                />
                            </div>

                            <div>
                                <div className="font-medium">{mentor.name}</div>
                                <div className="text-sm text-gray-500">{mentor.role}</div>
                            </div>
                            
                        </div>
                        
                        <button className="bg-primary text-white text-xs px-3 py-1 rounded-full hover:bg-primaryDark transition duration-200">
                            Message
                        </button>
                        
                    </div>
                    
                ))}
                
            </div>
            <div className='flex items-center p-5 mt-3 '>
                <button className='bg-purple-200 hover:bg-primaryDark hover:text-white rounded-full w-full px-3 py-3 text-center text-primary text-sm'>See All</button>
                </div>
            </div>
    );
}