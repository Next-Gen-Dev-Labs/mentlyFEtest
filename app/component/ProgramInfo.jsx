"use client"
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { LuStickyNote } from "react-icons/lu";
import { RxText } from "react-icons/rx";
import { GoBold } from "react-icons/go";
import { GoItalic } from "react-icons/go";
import { RxUnderline } from "react-icons/rx";
import { CgFormatRight } from "react-icons/cg";
import { CgDistributeVertical } from "react-icons/cg";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";
import { TbTextSize } from "react-icons/tb";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { TbNumber66Small } from "react-icons/tb";
import { CiCalculator2 } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { BsLink45Deg } from "react-icons/bs";
import { PiFishSimpleBold } from "react-icons/pi";
import { MdAdd } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CgMoreVertical } from "react-icons/cg";
import Link from 'next/link';

const ProgramInfo = () => {
     const [showDropdown, setShowDropdown] = useState(false);
    
      const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };

  return (
    <section>
        <div className='border-[#1F0954] border-2 py-1 px-4 flex items-center gap-3 mt-10'>
            <div className='border-2 border-dashed border-black px-2'>
            <h1 className='font-extrabold text-xl'>T</h1>
            </div>
            < IoMdArrowDropdown size={20}/>
            <input
                type='text'
                placeholder='Describe Section Title e.g what you stand To learn'
                className='w-full outline-none text-sm max-md:w-auto'
            />
        </div>

            <div className='bg-[#CEE1FB] flex items-center p-2 mt-5 md:gap-2 max-md:w-auto'>
                < MdErrorOutline size={26} color='#498eee'/>
                <h3 className='text-sm text-gray-500'>Please provide your prefered title for this section i.e What's in this Project for you?</h3>
            </div>


            <div className='h-[10rem] w-[31rem] border-[#1F0954] border mt-5 rounded-lg relative'>
                <div className='flex items-center'>

                    <div className='flex gap-6 py-2 px-3 border border-[#1F0954] rounded-lg'>
                        <LuStickyNote size={20} className='hover:scale-125 cursor-pointer transition-all'/>
                        < IoMdArrowDropdown size={20}/>
                    </div>

                    <div className='flex items-center gap-2 border-[#1F0954] border py-2 px-1 rounded-lg w-[28rem] text-gray-400'>
                        < RxText  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        < GoBold size={20}className='hover:scale-125 cursor-pointer transition-all hover:text-black' />
                        <GoItalic  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        <RxUnderline size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        < TbTextSize size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black' />
                        < CgFormatRight  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black' />
                        <CgDistributeVertical  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        < CiTextAlignLeft  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black' />
                        <CiTextAlignJustify  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black' />
                        <MdOutlineFormatListBulleted  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black' />
                        < TbNumber66Small  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        <CiCalculator2  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        <GrGallery  size={16} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                        <BsLink45Deg  size={20} className='hover:scale-125 cursor-pointer transition-all hover:text-black'/>
                    </div>
                </div>

                <textarea
                type='text'
                placeholder='Input text'
                className='w-full outline-none text-sm p-3 '
                />
                
            </div>
                <span className='flex text-sm text-[#A100FF] bg-purple-200 w-32 justify-center gap-2 items-center py-1 absolute bottom-80 max-md:hidden rounded-lg'>
                    <PiFishSimpleBold/>
                    <h2 className='capitalize'>write with may</h2>
                </span>

                <div className='bg-[#CEE1FB] flex items-center p-2 mt-5 gap-2'>
                    < MdErrorOutline size={46} color='#498eee'/>
                    <h3 className='text-sm text-gray-500'>
                        Provide a clear and concise description/information of your program. This can include obectives
                        goals, necessary resources , or any specific instructions.
                    </h3>
                </div>

                <div className='mt-10 border border-[#1F0954] rounded-lg flex flex-col justify-center items-center py-5'>
                    <span className='flex items-center'>
                        <MdAdd />
                        <h2>Add new section</h2>
                    </span>
                    <h3 className='text-gray-500'>(minimum number of sections to add is 3)</h3>

                </div>

                <div className='flex items-center gap-2 mt-3'>
                
                        <input
                        type="checkbox"
                       
                        />
                        <h3>Show this section when Published</h3>
                </div>

                <div className='mt-14 relative'>
                    <div className='bg-[#C2C2C2] rounded-lg py-3 px-2 flex items-center justify-between hover:bg-[#F0C074] hover:scale-110 transition-all max-md:w-auto'>
                    <h2 className='text-[#1F0954] font-bold text-xl max-md:text-sm '>Programme Information Text 1</h2>
                    <span className='flex gap-3'>
                    <MdKeyboardArrowUp size={34} color='gray'/>
                    < CgMoreVertical  size={30}  color='gray'/>
                    </span>
                    </div>

                    <div className='bg-[#C2C2C2] rounded-lg py-3 px-2 flex items-center justify-between mt-5 hover:bg-[#F0C074] hover:scale-110 transition-all max-md:w-auto'>
                    <h2 className='text-[#1F0954] font-bold text-xl max-md:text-sm'>Programme Information Text 2</h2>
                    <span className='flex gap-3'>
                    <MdKeyboardArrowUp size={34} color='gray'/>
                    < CgMoreVertical  size={30}  color='gray'  onClick={toggleDropdown} className='cursor-pointer hover:text-gray-400'/>
                    {showDropdown && (
                        <div className='absolute right-0 bottom-10 bg-white text-black shadow-md w-20 mt-2 rounded-md z-10'>
                        <ul className='py-2'>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
                            Delete
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
                            Clear
                            </li>
                            
                        </ul>
                        </div>
                     )}
                    </span>
                    </div>

                   <div className='mt-24 flex justify-center gap-5 items-center '>
                     <Link href="/">
                        <h2 className='text-gray-400 font-bold hover:text-[#F0C074] transition-all'>Go Back</h2>
                     </Link>

                     <div className='bg-[#1F0954] flex text-white items-center py-4 px-10 rounded-lg cursor-pointer gap-2 hover:scale-90 transition-all'>
                        <h2 className='font-bold'>Save & Proceed</h2>
                        < IoMdArrowDropdown size={20}/>
                     </div>


                   </div>
                    
                
                </div>
    </section>
  )
}

export default ProgramInfo
