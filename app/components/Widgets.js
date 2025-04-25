'use client'
import React from 'react'
import Image from 'next/image'

const widgetList = [
    'Programs',
    'Group Calls',
    'Mentors',
    'Recent Activities',
    'Application',
    'Earnings',
    'Forum',
    'Program Analysis'
]

const Widgets = ({ widget, setWidget }) => {
    return (
        widget && <div className={`p-5 pt-7.5 px-10 w-[30%] min-w-[320px] max-w-[450px] fixed right-0 top-0 z-30 h-full bg-white shadow-md drop-shadow-[ -4px_0_3px_rgba(0,0,0,0.07) ] drop-shadow-[ -2px_0_2px_rgba(0,0,0,0.06) ] transition-transform duration-300 transform`}>
        <button className='flex items-center justify-end w-full mb-5' onClick={()=>setWidget(false)}>
            <Image src='/close-btn.svg' alt='close-button' width={24} height={24} />
        </button>

        <hr className='border-[#D7D7D7] mb-4' />
        <div className='mb-6'>
            <h1 className='text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-[#1F0954] mb-2'>Manage Widgets</h1>
            <p className='text-xs text-gray-600'>
                Personalize your dashboard by managing widgets — add, remove, or reorder them to fit your workflow.
            </p>
        </div>

        <div className="space-y-3 mb-6 w-full">
            {widgetList.map((item, index) => (
                <div key={index} className="flex items-center justify-between w-full">
                    <div className='flex items-center gap-3'>
                        <Image src='/menu.svg' alt='menu-icon' width={16} height={16} />
                        <span className="text-sm font-bold text-gray-800">{item}</span>
                    </div>

                    <div className="relative">
                        <input
                            type="checkbox"
                            id={`widget-${index}`}
                            className="hidden peer"
                        />
                        <label
                            htmlFor={`widget-${index}`}
                            className="w-5 h-5 border-2 border-gray-400 rounded-sm cursor-pointer peer-checked:bg-[#07C500] peer-checked:border-[#07C500] flex items-center justify-center"
                        >
                            <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                    </div>
                </div>
            ))}
        </div>

        {/* Action Buttons */}
        <div className='flex justify-between gap-4 mt-[4rem]'>
            <button className='bg-[#6F01D0] text-white font-bold py-2 px-2 rounded-md w-full text-xs lg:text-base'>
                Save Changes
            </button>
            <button className='text-[#6F01D0] border border-[#6F01D0] font-bold py-2 px-2 rounded-md w-full text-xs lg:text-base'>
                Reset to Default
            </button>
        </div>
        </div>
    )
}

export default Widgets
