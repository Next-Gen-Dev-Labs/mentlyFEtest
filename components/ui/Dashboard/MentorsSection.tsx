import { EllipsisVertical } from "lucide-react";
import { CiCirclePlus } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const mentors = [
    {
      name: 'Maxwell Smith',
      role: 'Product Designer',
      avatar: '/avatar-5.png',
      status: 'Available',
      experience: '4 years Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1'
    },
    {
      name: 'Adatti Samuel',
      role: 'Product Designer',
      avatar: '/avatar-6.jpg',
      status: 'In a meeting',
      experience: '3 years Experience',
      location: 'Abuja, Nigeria',
      timezone: 'GMT +1'
    },
  ];
  
  const MentorsSection = () => {
    return (
      <div className="bg-white w-[320px] h-[272px] rounded-xl shadow p-2">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <GiHamburgerMenu className="w-[14px] inline" />
            <h2 className="text-[16px] text-[#B0B0B0] font-bold inline">Mentors</h2>
          </div>
          <div className="space-x-2">
          <CiCirclePlus className="text-[#B0B0B0] size-[24px] inline" />
           
            <EllipsisVertical className="text-black w-[14px] inline" />
          </div>
        </div>
  
        <div className="space-y-4">
          {mentors.map((mentor, index) => (
            <div key={index} className=" rounded-lg ">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <img src={mentor.avatar} alt={mentor.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium text-[14px]">{mentor.name}</p>
                    <p className="text-[12px] text-gray-500">{mentor.role}</p>
                   
                  </div>
                </div>
                <button className="text-[10px] bg-purple-600 text-white p-2 px-3 rounded-2xl font-medium">Message</button>
              </div>
  
             
            </div>
          ))}
        </div>
  
        <div className="mt-4">
          <button className="w-full text-center py-2 bg-purple-100 text-purple-700 rounded-2xl text-sm font-medium">
            See all
          </button>
        </div>
      </div>
    );
  }
  
  export default MentorsSection;