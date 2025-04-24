/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { AnimatePresence, motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";
import { Separator } from "../ui/seperator";
import { Icons } from "../Icons";
import CustomCheckbox from "../ui/Checkbox";
import { widgetList } from "../utils/Data";


interface WidgetModalProps{
  showNotificationBar:boolean;
  closeNotification:()=>void;
}
const WidgetModal= ({showNotificationBar, closeNotification}:WidgetModalProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
  return (
    <AnimatePresence>
      {showNotificationBar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeNotification}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-[#6666664D]  h-full flex flex-col items-start justify-start  z-20 fixed transition-transform top-0 right-0  pt-4 px-10 rounded-xl w-full max-w-md shadow-xl cursor-default overflow-hidden"
          >
             <div className="flex justify-end w-full mb-2">
                <IoIosClose className="cursor-pointer" size={30} onClick={closeNotification} />
            </div>
            <Separator/>
            <div className="relative z-10 mt-[63px] ">
              <div className="flex  flex-col   mt-4 pb-3  ">
               <p className="text-[#6F01D0] font-bold text-3xl">Manage Widget</p>
               <p className="text-xs text-[#374557] py-4">Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.</p>
              
              {
                <div className=" mt-8 w-full">
                    {
                        widgetList.map((w,idx)=>(
                            <div className="flex mt-4 flex-col w-full" key={idx}>
                            <div className="flex items-center w-full justify-between">
                              <p className="text-sm capitalize flex items-center text-[#4F4F4F] font-bold">
                                <span className="mr-4"><Icons.hamburger /></span>{w.title}
                              </p>
                              <CustomCheckbox onClick={toggleCheckbox} checked={w.checked} />
                            </div>
                          </div>
                          
                        ))
                    }
                </div>
              }
              <div className="flex flex-wrap gap-6 items-center justify-center mt-10">
                <button className=' bg-[#6F01D0] text-[#FFFFFF] text-sm font-chivo  rounded-md py-3 px-5'>Save Changes</button>
                <button className=' bg-transparent text-[#6F01D0] border border-[#6F01D0]  text-sm font-chivo rounded-md py-3 px-5'>Reset to Default</button>
               </div>
              </div>
              
             
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WidgetModal;
