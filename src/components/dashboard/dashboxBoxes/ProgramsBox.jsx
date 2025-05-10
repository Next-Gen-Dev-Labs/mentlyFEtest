import React from 'react'
import {boxes} from '@/data/dashboard.json'
import Image from 'next/image'
import SettingsIcon from '@/components/dynamicSvgs/SettingsIcon'
import DotIon from '@/components/dynamicSvgs/DotIon'
import MentorsIcons from './MentorsIcons'

const ProgramsBox = () => {
  return (
    <div>
        {/* top */}
        <div className="flexBetween ">
            <div className="flexBetween gap-4 ">
                <Image className='cursor-pointer' src={boxes.programs.top.outline} alt='outline icon' width={16} height={16} loading='lazy' />
                <button className="font-Chivo font-bold text-base text-neutral-900 "> {boxes.programs.top.title} </button>
            </div>
            <div className="flexBetween gap-4 ">
            <button className="font-Chivo font-semibold text-[12.27px] text-purple-700"> {boxes.programs.top.btn} </button>
            <Image  className='cursor-pointer' src={boxes.programs.top.more} alt='more icon' width={16} height={16} loading='lazy' />
            </div>
        </div>
        {/* filter */}
        <fieldset className='flex items-center justify-end gap-x-[11px] mt-[20.46px] ' >
            <label className='font-Chivo font-[500] text-[11.26px] text-neutral-600 ' htmlFor="filter"> {boxes.programs.filter.label} </label>
            <select className='outline-none border-[0.8px] border-gray-903 py-[6.43px] px-[9.65px] rounded-[3.22px] font-Chivo font-[500] text-[11.26px] text-gray-800 ' name="filter" id="filter">
                {
                    boxes.programs.filter.selects.map((each,i)=> (

                        <option key={i} className='border-none outline-none font-Chivo font-[500] text-[11.26px] text-gray-800 '  value={each}> {each} </option>
                    ))
                }
            </select>

        </fieldset>
        {/* cards */}
        <div className="p-[13.34px] grid grid-cols-1 gap-y-2  ">
            {
                boxes.programs.cards.map((each,i)=> (
                    <div key={i} className="mt-[7px] relative z-[2] card-shadow pb-[13.46px] rounded-[9.85px]  ">
                        {/* img */}
                        <div style={{backgroundImage: `url(${each.img.url})`, backgroundSize: "110%" }} className="w-full md:w-[265px] min-h-[69.8px] rounded-[6.57px] mx-auto    bg-no-repeat bg-center   ">
                            {/* glass cover */}
                            <div className="bg-[#0C0C0CCC] z-[3] absolute top-0  w-full md:w-[265px] min-h-[69.8px] rounded-[6.57px] py-[4.93px] px-[9.85px] ">
                                <div className="grid grid-cols-[224.19px_13.13px] place-content-center gap-x-[10.13px] mb-[5.99px] ">
                                <h2 className="font-Chivo font-bold text-[16.42px] text-white "> {each.img.h2} </h2>
                                    {
                                        each.img.setting && <SettingsIcon color="white"  width='13.13px' height="13.13px" />
                                    }
                                </div>
                                <button className={`py-[1.64px] px-[9.85px] rounded-[9.85px] flexCenter ${ each.img.button["text-tail" ]} font-Chivo font-bold text-[6.57px] ${each.img.button["bg-tail"]}  gap-x-[3.28px]  `}>
                                     <DotIon width={4.11} height={4.11} color={each.img.button.color} /> 
                                     <span>{each.img.button.text}</span>
                                      </button>
                                

                            </div>

                        </div>
                        {/* disc */}
                        <p className="font-Chivo font-normal text-[9.5px] mt-[6.57px] mx-auto leading-[-2] text-start break-keep  text w-[265px] min-h-[36px]  "> {each.disc} </p>
                        {/* footer */}
                        <div className="mt-[9.85px] flexBetween w-full md:w-[265px] mx-auto ">
                            {/* mentors  */}
                            {
                                each.footer.mentors.state &&
                            <div className="flexStart gap-x-[5.56px] ">
                                     <MentorsIcons data={each.footer.mentors.mentors} />

                            {/* mentors label */}
                            <span className="font-Chivo font-semibold text-[8.34px] text-custom-concrete "> {each.footer.mentors.text} </span>
                            </div>
                            }
                            {/* hosted */}
                            {
                                each.footer.hosted.state &&
                                <div className='flexStart gap-x-[6.51px]' >
                                    <Image width={19.71} height={19.71} className='rounded-full h-[19.71px] w-[19.71px] ' src={each.footer.hosted.avater} alt={each.footer.hosted.name} />
                                    <span className="font-Chivo font-normal text-[8.21px] text-custom-concrete  "> 
                                        <span className=""> {each.footer.hosted.label} </span>
                                        <span className=""> {each.footer.hosted.name} </span>

                                    </span>
                                    
                                     </div>
                            }
                            {/* buttons */}
                            <div className="flexBetween gap-x-[5.26px] ">
                                <button className="w-[65.7px] h-[22.17px] border-[0.66px] rounded-[2.63px] border-purple-700 flexCenter font-Chivo font-normal text-[8px] text-purple-700 "> {each.footer.btns.text1} </button>
                                <button className="w-[65.7px] h-[22.17px] border-[0.66px] rounded-[2.63px] border-purple-700 flexCenter font-Chivo font-normal text-[8px] text-white bg-purple-700 "> {each.footer.btns.text2} </button>
                            </div>
                        </div>
                        {
                            each.footer.hosted.icon &&
                        <span className="absolute left-[13.4px] bottom-[-6.57px] w-[13.14px] h-[13.14px] bg-white "> <SettingsIcon color="white" height={13.14} width={13.14}  /> </span>
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProgramsBox