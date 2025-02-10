"use client"

import { Briefcase,  MessageQuestion, CallAdd,  People, Notepad2, Messages1, Calendar2, Location  } from "iconsax-react";
import { motion } from "framer-motion";


export default function MentorshipProgram() {

  const icons = [MessageQuestion, Briefcase, People, Notepad2, CallAdd, Messages1];


  return (
    <div className="max-w-lg md:max-w-3xl mx-auto p-4 md:w-1/3"
    style={{ width: "695px", height: "1146px", top: "198px", left: "700px" }}
    >
        
      {/* Date & Time */}
      <p className="text-sm text-right text-gray-500">
        13th February 2024, 12:15 PM <span className="text-xs">(Local time)</span>
      </p>

      {/* Page Title */}
      <div className=" border-grey p-2 w-[695px] h-[1146px] gap-8 ml-4 top-[198px] left-[700px] border rounded-[4px] border-[1px] absolute">
      <h1 className="text-4xl mt-8 font-bold text-[#0B0D34]">Mentorship Program</h1>
      
      {/* Main Card */}
      <div className="mt-4 bg-gradient-to-r from-gray-900 to-gray-600 p-4 w-[668px] h-[206px] rounded-md relative flex items-center">
       <div className="w-[390px] h-[119px] flex ml-4">
        <div className="absolute left-4 p-1 rounded-lg">
          <img src="/frame.png" alt="Mentor" className="w-[84px] h-[126px] rounded-lg" />
        </div>
        <div className="ml-28  w-[289px] h-[109px]">
          <h2 className="text-xl font-bold text-white">Mastering the work life Equation</h2>
          <p className="text-white italic">With Nwachukwu Peculiar</p>
          <button className="px-3 py-1 text-white rounded-md bg-gradient-to-r from-[#FF0044] to-[#F6A000]">Masterclass</button>
        </div>
        </div>

       

        
        <div className="absolute right-8 w-[46.6px] h-[95.8px] font-small gap-10 top-10 text-white text-right text-xs">
  <p className="font-bold mb-2">20TH OCT, 2024</p>
  <hr />
  <p className="mt-1">2PM</p>
</div>
</div>
      
      
      {/* Description */}
      <div className="flex flex-col gap-6 font-chivo md:flex-row items-stretch w-full max-w-2xl p-2 rounded-lg ">
        
      <div className="flex-1 flex items-center justify-center   rounded-md">
          <p className="text-gray-600 text-sm leading-relaxed">
            UI/UX Design check-ins with faith is a way for beginners in UI/UX Design to get started about the fundamentals
            and how they can build a Design Career, share, document their progress on a weekly basis.
          </p>
        </div>

        {/* Information Card */}
        <div className="flex-1 flex items-center p-4">
          <div className="bg-white-100 p-4 rounded-md text-sm font-chivo w-full h-full flex flex-col justify-center shadow-md">
            <div className="flex items-center gap-[64px]">
              <span ><Briefcase size={20} color="grey"/> </span>
              <p className="text-gray-700 ">Mentorship Program</p>
            </div>
            <div className="flex items-center gap-[64px] mt-2">
              <span><Calendar2 size={20} color="grey"/></span>
              <p className="text-gray-700 ">21/4/2024 - 21/5/2024</p>
            </div>
            <div className="flex items-center gap-[64px] mt-2">
            <span><Location size={20} color="grey"/></span>
              <p className="text-gray-700 ">In Person</p>
            </div>
          </div>
        </div>
        </div>
      
      

      {/* Program Information Sections */}
      <div className="mt-6">
        {/* Section 1 */}
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto text-[#FEE0B1]"
    >
      <h2 className="text-lg font-bold text-[#1F0954]">Program Information Text</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-amber-100 p-2 rounded-full"
            >
              <Icon size="20" color="#1F0954" />
            </motion.span>
            <motion.p
              whileHover={{ scale: 1.05, color: "#1F0954" }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 cursor-pointer"
            >
              Content
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    
        {/* Section 2 */}
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-amber-50 border border-amber-200 rounded-lg mt-6 p-6 max-w-3xl mx-auto"
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-[#1F0954]">Program Information Text 2</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Left Column: Bullet Points */}
        <ul className="col-span-1 space-y-2 text-gray-700 font-medium">
          {Array(6)
            .fill("Content")
            .map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="list-disc list-inside"
              >
                {text}
              </motion.li>
            ))}
        </ul>
      
        {/* Right Column: Empty (or use this for additional content) */}
        <div className="col-span-1" />
      </div>
    </motion.div>
      </div>
      </div>
    </div>
  );
}