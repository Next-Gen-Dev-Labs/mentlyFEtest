// components/ProgramCard.jsx 
import { Settings } from "lucide-react"; 
import Image from "next/image"; 
import React from "react"; 
 
export default function ProgramCard({ 
  title, 
  description, 
  status, 
  category, 
  categoryColor = "pink-500", 
  mentors = [], 
  circleColor, 
  bgColor, 
  textColor, 
  imageSrc = "/api/placeholder/400/150", 
}) { 
  return ( 
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-3">
        <div className="relative rounded-lg overflow-hidden">
          <Image 
            src={imageSrc} 
            alt="Program cover" 
            width={400} 
            height={150} 
            className="w-full h-24 object-cover" 
          /> 
          <div className="absolute top-2 right-2 p-1 z-10 bg-black/30 rounded-full"> 
            <Settings size={20} className="text-white" /> 
          </div> 
   
          <div className="absolute bottom-0  inset-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-black/10">
            <h3 className="text-white text-[16px] font-bold max-w-[80%] leading-[1px"> 
              {title} 
            </h3> 
            <div 
              className="flex items-center px-3 gap-1 mt-2 w-fit py-0.5 rounded-full " 
              style={{ backgroundColor: bgColor }} 
            > 
              <div 
                className="w-2 h-2  rounded-full" 
                style={{ backgroundColor: circleColor }} 
              ></div> 
              <span 
                className="text-[8px]" 
                style={{ 
                  color: textColor, 
                }} 
              > 
                {status} 
              </span> 
            </div> 
          </div>
        </div>
      </div> 
      <div className="px-4 pb-4"> 
        <p className="text-[10px] text-gray-600">{description}</p> 
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-3"> 
          <div className="flex items-center"> 
            <div className="flex -space-x-2"> 
              {mentors.length > 0 ? ( 
                mentors.map((mentor, index) => ( 
                  <div 
                    key={index} 
                    className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative" 
                  > 
                    <Image 
                      src={`https://i.pravatar.cc/150?img=${index + 1}`} 
                      alt={`Mentor ${index + 1}`} 
                      fill 
                      className="object-cover" 
                    /> 
                  </div> 
                )) 
              ) : ( 
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative"> 
                  <Image 
                    src="https://i.pravatar.cc/150?img=1" 
                    alt="Dummy Mentor" 
                    fill 
                    className="object-cover" 
                  /> 
                </div> 
              )} 
            </div> 
            <span className="text-xs text-gray-500 ml-1">Mentors</span> 
          </div> 
 
          <div className="flex mt-2 md:mt-0 items-center space-x-2"> 
            <button className="text-xs text-purple-700 px-3 py-1 border border-purple-700 rounded-md"> 
              View Details 
            </button> 
            <button className="text-xs text-white px-3 py-1 bg-purple-700 rounded-md"> 
              Explore 
            </button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}