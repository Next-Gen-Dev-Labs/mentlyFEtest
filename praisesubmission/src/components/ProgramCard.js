'use client'
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const ProgramCard = ({ text }) => {
  const [more, setMore] = useState(false)

  const toggleMore = () =>{
    setMore((prev) => !prev)
  }

  return (
    <div className="flex justify-between items-center bg-[#F1F1F1] border border-[#C2C2C2] p-3 rounded-md">
        <p className="text-[#1F0954] text-base font-semibold">{text}</p>
        <div className="flex gap-3">
            <ChevronDown size={24} color="#777795" />
            <div className="relative">
              <Image 
                  src={'/icons/more.png'}
                  alt="more icon"
                  width={100}
                  height={100}
                  className="object-cover size-6"
                  onClick={toggleMore}
              />
              {more && (
                <div className="z-10 absolute top-10 -right-3 flex flex-col justify-start items-start bg-[#FAFAFA] shadow shadow-[#00000040] py-2 px-1 rounded-sm">
                  <button className="w-full text-left text-[#777795] hover:bg-[#777795] hover:bg-opacity-10  hover:rounded-msm py-1 px-6 text-sm">Delete</button>
                  <button className="w-full text-left text-[#777795] hover:bg-[#777795] hover:bg-opacity-10  hover:rounded-msm py-1 px-6 text-sm">Edit</button>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default ProgramCard