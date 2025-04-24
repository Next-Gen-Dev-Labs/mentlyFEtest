"use client"

import firstImage from '../component/assets/first_image.svg'
import secondImage from '../component/assets/rainbow.svg'
import thirdImage from '../component/assets/muuk.svg'
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';


const calls = [
  {
    id: 1,
    status: 'Ongoing',
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 08, 2024',
    time: '10:00 - 11:30AM',
    image: firstImage,
  },
  {
    id: 2,
    status: 'Upcoming',
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 08, 2024',
    time: '10:00 - 11:30AM',
    image: secondImage,
  },
  {
    id: 3,
    status: 'Ongoing',
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 08, 2024',
    time: '10:00 - 11:30AM',
    image: thirdImage,
  },
];

const GroupCalls = () => {
  return (
    <section className="p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Group Calls</h2>
        <a href="#" className="text-sm text-purple-600 font-medium">See all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {calls.map((call) => (
          <div
            key={call.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image src={call.image} alt="Group call banner" className="w-full object-contain" />
            <div className="p-4">
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium inline-block mb-2 ${
                  call.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}
              >
                {call.status}
              </span>
              <h3 className="text-sm font-semibold leading-snug mb-2">
                {call.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 space-x-2 mb-3">
                <FaCalendarAlt />
                <span>{call.date}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 space-x-2 mb-4">
                <FaClock />
                <span>{call.time}</span>
              </div>
              <div className="flex gap-2">
                <button className="bg-white border border-purple-400 w-auto text-purple-700 text-sm font-semibold px-3 py-1 rounded hover:bg-purple-200">
                  View Participants
                </button>
                <button className="bg-purple-600 text-white text-sm font-semibold w-auto px-3 py-1 rounded hover:bg-purple-700">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupCalls;
