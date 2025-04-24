import More from "@/assets/icons/more.svg";
import Image from "next/image";
import Bar from "@/assets/icons/order.svg";
import Plus from "@/assets/icons/plus.svg"
import MentorOne from "../../../public/assets/images/mentor-one.png"
import MentorFour from "../../../public/assets/images/mentor-three.jpg"

export default function Mentors() {
  // Sample data for mentors
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      role: "Product Designer",
      image: MentorOne
    },
    {
      id: 2,
      name: "Adeati Samuel",
      role: "Product Designer",
      image: MentorFour
    }
  ];

  return (
    <div className="bg-white h-fit max-h-[280px] overflow-y-auto px-6 py-4 rounded-md hidden-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Bar />
          <h1 className="ml-2 font-bold text-gray-400">Mentors</h1>
        </div>
        
        <div className="flex items-center">
            <Plus className="text-gray-400" />
            <More />
        </div>
      </div>

      {/* Mentors List */}
      <div className="space-y-8">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-8 h-8 rounded-full object-cover mr-3"
              />
              
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{mentor.name}</h3>
                <p className="text-gray-500 text-xs">{mentor.role}</p>
              </div>
            </div>
            
            <button className="px-2.5 py-1.5 bg-purple-600 text-white rounded-full text-sm">
              Message
            </button>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-6 mb-2">
        <button className="w-full py-3 bg-purple-100 text-purple-600 rounded-full font-medium">
          See all
        </button>
      </div>
    </div>
  );
}