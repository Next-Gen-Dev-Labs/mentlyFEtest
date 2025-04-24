import { RiCloseLine } from "react-icons/ri"
import { Checkmark } from "../ui/Checkbox"
import Image from "next/image"

export const WidgetSlider =({visibility, onClose}:{visibility:boolean, onClose:()=> void})=> {

  return(
    <div className={`${visibility ? 'flex' : 'hidden'} w-screen h-screen top-0 left-0 fixed z-40 backdrop-blur-sm justify-end overflow-hidden`}>
      <div className={`${visibility ? 'translate-x-0': 'translate-x-100%'} transition-transform duration-500 ease-linear bg-white w-full h-full md:w-[50%] lg:w-[30%] p-5 md:px-10`}>
        <div className="flex justify-end w-full border-b border-[#d7d7d7]">
          <RiCloseLine onClick={onClose} className="text-3xl hover:scale-105 transition-all ease-in-out " />
        </div>
        <div className="font-chivo font-bold text-primary-lite text-[32px] mt-6 mb-4">
        Manage Widget
      </div>

      <div className="font-chivo text-font text-[12px] mb-6">
        Personalize your dashboard by managing widgets, add or remove or reorder them to fit your workflow.
      </div>

        <div className="flex flex-col gap-4">
          {
            ['Programs', 'Group call', 'Mentors', 'Recent Activities', 'Application', 'Earnings', 'Forum', 'Program Analysis'].map((item)=>(
              <div key={item} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image src='/menu.svg' alt='menu' width={20} height={20} className="hover:scale-105 transition-transform duration-200 ease-in-out" />
                  <span className="font-bold text-sm text-Grey-2 font-chivo">
                    {item}
                  </span>
                </div>
                <Checkmark/>
              </div>
            ))
          }
        </div>

        <div className="flex w-full gap-4 justify-center mt-10">
            <button className="bg-primary-lite w-full border border-primary-lite h-[40px] justify-center flex items-center py-2.5 px-4 text-white text-nowrap rounded-[6px] font-chivo text-[8px] hover:opacity-80 transform-color duration-200 ease-in-out">
              Save Changes
            </button>
          <button className="bg-white border border-primary-lite w-full h-10 justify-center flex items-center py-2.5 px-4 text-mently-blue text-nowrap rounded-[6px] font-chivo text-[8px] hover:opacity-80 transform-color duration-200 ease-in-out">
              Reset to Default
          </button>
          
        </div>
      </div>
      

    </div>
  )
}