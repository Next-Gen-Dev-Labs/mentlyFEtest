import React from 'react';
import Image from "next/image";
import Banner from "../../../public/assets/Banner Template.png"
import { Preview } from '../../constants';


const ProgramPreview = () => {
	const { icon1, icon2,icon3,icon4,icon5,icon6,main1,main2,main3 } = Preview;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Date and Time */}
      <div className="hidden md:block text-sm text-gray-600 text-right">
          13th February 2024, 12:15 PM
          <span className="text-gray-400 ml-1">(Local time)</span>
        </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mentorship Program</h2>
      
      {/* Preview Card */}
      <div>
        <Image
        src={Banner} 
        alt="Preview Card" 
       
        className=""
        />
      </div>

      

      {/* Program Details */}
      <div className="flex flex-wrap bg-[#F8F8F8]">
        <div className='p-10 flex-1 md:flex-1/2'>
          <div className="rounded-xl">
            <p className="text-[#666666] mb-6">
              UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started about the fundamentals and how they can build a Design Career, share, document their progress on a weekly basis.
            </p>
          </div>
        </div>
        <div className="mt-8 flex-1 md:flex-1/2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
              <span>
              <Image 
                  src={main1} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              </div>
              <span className="text-[#1A103C] font-medium">Mentorship Program</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
              <span>
              <Image 
                  src={main2} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              </div>
              <span className="text-[#1A103C]">21/4/2024-21/5/2024</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
              <span>
              <Image 
                  src={main3} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              </div>
              <span className="text-[#1A103C]">In Person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Information */}
      <div className="mt-8 bg-[#FFFAF2]">
        <h3 className="text-lg font-semibold text-[#1A103C] mt-2 mb-4">Program Information Text</h3>
        <div className=" rounded-xl p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <span>
              <Image 
                  src={icon1} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
            
              <span className="text-[#1A103C]">Content</span>
            </div>
            <div className="flex items-center space-x-3">
            <span>
              <Image 
                  src={icon2} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              <span className="text-[#1A103C]">Content</span>
            </div>
            <div className="flex items-center space-x-3">
            <span>
              <Image 
                  src={icon3} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              <span className="text-[#1A103C]">Content</span>
            </div>
            <div className="flex items-center space-x-3">
            <span>
              <Image 
                  src={icon4} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              <span className="text-[#1A103C]">Content</span>
            </div>
            <div className="flex items-center space-x-3">
            <span>
              <Image 
                  src={icon5} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              <span className="text-[#1A103C]">Content</span>
            </div>
            <div className="flex items-center space-x-3">
            <span>
              <Image 
                  src={icon6} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                />

              </span>
              <span className="text-[#1A103C]">Content</span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Information Text 2 */}
      <div className="mt-8 bg-[#FFFAF2]">
        <h3 className="text-lg font-semibold text-[#1A103C] mt-2 mb-4">Program Information Text 2</h3>
        <div className="space-y-1  p-6 rounded-xl">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-[#1A103C] rounded-full"></span>
              <span className="text-[#1A103C] font-bold">Content</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPreview;