"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import Image from "next/image"
import SettingsIcon from "../../../../public/icons/products-page/settings-icon.svg"
import CopyIcon from "../../../../public/icons/products-page/copy-icon.svg"
import ShareIcon from "../../../../public/icons/products-page/share-icon.svg"
import TextIcon from "../../../../public/icons/products-page/text-icon.svg"
import CaretDownIcon from "../../../../public/icons/products-page/caret-down-icon.svg"
import CaretDownWhiteIcon from "../../../../public/icons/products-page/caret-down-white-icon.svg"
import InfoIcon from "../../../../public/icons/products-page/info-icon.svg"
import BriefCaseIcon from "../../../../public/icons/products-page/brief-case-icon.svg"
import CalenderIcon from "../../../../public/icons/products-page/calender-icon.svg"
import LocationIcon from "../../../../public/icons/products-page/location-icon.svg"
import Content1Icon from "../../../../public/icons/products-page/content1-icon.svg"
import Content2Icon from "../../../../public/icons/products-page/content2-icon.svg"
import Content3Icon from "../../../../public/icons/products-page/content3-icon.svg"
import Content4Icon from "../../../../public/icons/products-page/content4-icon.svg"
import Content5Icon from "../../../../public/icons/products-page/content5-icon.svg"
import Content6Icon from "../../../../public/icons/products-page/content6-icon.svg"
import Banner from "../../../../public/icons/products-page/banner.svg"
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { motion } from 'motion/react'

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function Information() {
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (newContent: any) => {
    setContent(newContent);
  };

  const [accordionList, setAccordionList] = useState<{ title: string, content: string }[]>([])

  const handleSubmit = () => {
    if (accordionList.length >= 3 || !inputValue || !content) return

    setAccordionList([...accordionList, { title: inputValue, content }])
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 md:gap-0'>
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05, duration: 1 }}
        className='px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 bg-[#FDFDFD] shadow-md lg:w-2/5'>
        <div className='flex items-center justify-between mb-6 sm:mb-7 md:mb-8'>
          <Link className='flex items-center gap-2 text-[#F0C074] text-xs sm:text-sm md:text-base' href={'/main/dashboard'}>
            <span>&lt;</span>
            <span>Back to Home</span>
          </Link>

          <div className='flex items-center gap-2 sm:gap-4 md:gap-6'>
            <DropdownMenu>
              <DropdownMenuTrigger><Image className='w-4 sm:w-5 md:w-6' src={SettingsIcon} alt='Settings Icon'></Image></DropdownMenuTrigger>
              <DropdownMenuContent className='gap-2'>
                <DropdownMenuItem className='text-[#C2C2C2] text-[0.5rem] sm:text-[0.6rem] text-xs cursor-pointer'>Delete</DropdownMenuItem>
                <DropdownMenuItem className='text-[#C2C2C2] text-[0.5rem] sm:text-[0.6rem] text-xs cursor-pointer'>Clear</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Image className='w-4 sm:w-5 md:w-6' src={CopyIcon} alt='Copy Icon'></Image>

            <button className='flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-2xl bg-[#1F0954]'>
              <Image className='w-2 sm:w-3 md:w-4' src={ShareIcon} alt='Share Icon'></Image>
              <span className='text-white font-bold text-[0.6rem] sm:text-xs md:text-sm'>Share</span>
            </button>
          </div>
        </div>

        <div className='mb-4 sm:mb-5 md:mb-6'>
          <h3 className='mb-2 text-[#06152B] text-xl sm:text-2xl md:text-3xl font-bold'>Program Information</h3>
          <p className='text-[#828282] text-[0.6rem] sm:text-xs md:text-sm'>Describe Section Title</p>
        </div>

        <div className='py-3 md:py-4 px-5 md:px-6 border border-[#1F0954] rounded-md flex items-center gap-4 mb-2 md:mb-3'>
          <div className='flex items-center gap-2 md:gap-3'>
            <Image src={TextIcon} className='w-5 sm:w-6 md:w-7 lg:w-8' alt='Text Icon'></Image>
            <Image src={CaretDownIcon} className='w-2 md:w-3 lg:w-4' alt='Caret Down Icon'></Image>
          </div>

          <Input
            className='text-[#06152B] text-[0.6rem] sm:text-xs md:text-sm'
            type="text"
            placeholder="Describe Section Title e.g What you stand to learn"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className='bg-[#CEE1FB] py-2.5 md:py-3.5 px-1.5 md:px-2 flex items-center gap-1.5 md:gap-2 rounded-sm mb-4 sm:mb-5 md:mb-6'>
          <Image className='w-4 sm:w-5 md:w-6' src={InfoIcon} alt='Info Icon'></Image>
          <p className='text-[#777795] text-[0.5rem] sm:text-[0.6rem] md:text-xs'>Provide your prefered title for this section i.e What’s in this Program for you?</p>
        </div>

        <div className='mb-2 md:mb-3'>
          <SunEditor
            onChange={handleChange}
            height='160'
            setOptions={{
              height: "200px",
            }}
          />
        </div>

        <div className='bg-[#CEE1FB] py-2.5 md:py-3.5 px-1.5 md:px-2 flex items-center gap-1.5 md:gap-2 rounded-sm mb-4 sm:mb-5 md:mb-6'>
          <Image className='w-4 sm:w-5 md:w-6' src={InfoIcon} alt='Info Icon'></Image>
          <p className='text-[#777795] text-[0.5rem] sm:text-[0.6rem] md:text-xs'>Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions..</p>
        </div>

        <div className='mb-12 sm:mb-14 md:mb-16'>
          <div className='flex flex-col items-center py-2 md:py-3 px-3 border border-black cursor-pointer mb-2 md:mb-3 rounded-md' onClick={handleSubmit}>
            <div className='flex items-center gap-3 md:gap-4 text-[#494A71] font-medium text-xs sm:text-sm md:text-base'>
              <span>+</span>
              <p>Add new section</p>
            </div>

            <p className='text-[#777795] italic text-[0.6rem] sm-text-[0.7rem] text-xs'>(maximum number of sections to add is 3)</p>
          </div>

          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="" />
            <p className='text-[#333333] text-[0.6rem] sm:text-xs md:text-sm'>Show this section when Published</p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {accordionList.map((item: { title: string, content: string }, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='flex items-center mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24'>
          <Button className='flex-1 bg-white hover:bg-white text-[#A4A5B8] text-xs sm:text-sm md:text-base font-bold'>Go Back</Button>
          <Button className='flex-1 bg-[#1F0954] hover:bg-[#1F0954] flex items-center gap-3'>
            <span className='text-xs sm:text-sm md:text-base font-bold'>Save & Proceed</span>
            <Image className='w-1 sm:w-2 md:w-3' src={CaretDownWhiteIcon} alt='Caret Down White Icon'></Image>
          </Button>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05, duration: 1 }}
        className='lg:w-3/5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-11 py-5 sm:py-6 md:py-8'>
        <p className='text-right text-[#809FB8] text-xs sm:text-sm md:text-md mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-14'>13th February 2024, 12:15 PM <span className='text-[0.5rem] sm:text-[0.6rem] md:text-xs mb-10 sm:mb-12 md:mb-14'>(Local time)</span>.</p>

        <div className='border border-[#d9e1e785] p-2.5 md:p-3.5 rounded-sm pb-12 sm:pb-16 md:pb-20'>
          <h3 className='text-[#1C1D4E] text-xl sm:text-2xl md:text-3xl font-black mb-1.5 md:mb-2'>Mentorship Program</h3>

          <Image className='w-full mb-6 sm:mb-8 md:mb-10' src={Banner} alt='Banner'></Image>

          <div className='grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 sm:gap-14  mb-4 sm:mb-5 md:mb-6'>
            <p className='text-[#808080] text-justify text-xs sm:text-sm md:text-base'>
              UI/UX Design check ins with faith is a way
              for beginners in UI/UX Design to get started
              about the fundamentals and how they can build
              a Design Career, share, document their
              progress on a weekly basis.
            </p>

            <div className='shadow-md rounded flex flex-col gap-2 md:gap-4 lg:gap-5 p-6 sm:p-7 md:p-8'>
              <div className='flex items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
                <Image className='w-4 sm:w-5 md:w-6' src={BriefCaseIcon} alt='Brief Case Icon'></Image>
                <p className='text-[0.6rem] sm:text-xs md:text-sm text-[#777795] font-bold'>Mentorship Program</p>
              </div>

              <div className='flex items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
                <Image className='w-4 sm:w-5 md:w-6' src={CalenderIcon} alt='Calender Icon'></Image>
                <p className='text-[0.6rem] sm:text-xs md:text-sm text-[#777795] font-bold'>21/4/2024-21/5/2024</p>
              </div>

              <div className='flex items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
                <Image className='w-4 sm:w-5 md:w-6' src={LocationIcon} alt='Location Icon'></Image>
                <p className='text-[0.6rem] sm:text-xs md:text-sm text-[#777795] font-bold'>In Person</p>
              </div>
            </div>
          </div>

          <div className='bg-[#FFFAF2] border border-[#FEE0B1] rounded-lg p-3 md:p-4 mb-5'>
            <h4 className='text-[#1F0954] font-semibold text-base sm:text-lg md:text-xl mb-5 sm:mb-7 md:mb-9'>Program Information Text</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-9'>
              <div className='flex items-center gap-2'>
                <Image className='w-6 sm:w-7 md:w-8' src={Content1Icon} alt='Content1 Icon'></Image>
                <p className='text-[#595564] text-xs sm:text-sm md:text-base'>Content</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image className='w-6 sm:w-7 md:w-8' src={Content2Icon} alt='Content2 Icon'></Image>
                <p className='text-[#595564] text-xs sm:text-sm md:text-base'>Content</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image className='w-6 sm:w-7 md:w-8' src={Content3Icon} alt='Content3 Icon'></Image>
                <p className='text-[#595564] text-xs sm:text-sm md:text-base'>Content</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image className='w-6 sm:w-7 md:w-8' src={Content4Icon} alt='Content4 Icon'></Image>
                <p className='text-[#595564] text-xs sm:text-sm md:text-base'>Content</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image className='w-6 sm:w-7 md:w-8' src={Content5Icon} alt='Content5 Icon'></Image>
                <p className='text-[#595564] text-xs sm:text-sm md:text-base'>Content</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image className='w-6 sm:w-7 md:w-8' src={Content6Icon} alt='Content6 Icon'></Image>
                <p className='text-[#595564] text-xs sm:text-sm md:text-base'>Content</p>
              </div>
            </div>
          </div>

          <div className='bg-[#FFFAF2] border border-[#FEE0B1] rounded-lg p-3 md:p-4'>
            <h4 className='text-[#1F0954] font-semibold text-base sm:text-lg md:text-xl mb-5 sm:mb-7 md:mb-9'>Program Information Text 2</h4>

            <ul className='list-disc ml-3 md:ml-4 flex flex-col gap-1 md:gap-2'>
              <li className='text-[#595564] font-semibold text-xs sm:text-sm md:text-base'>Content </li>
              <li className='text-[#595564] font-semibold text-xs sm:text-sm md:text-base'>Content </li>
              <li className='text-[#595564] font-semibold text-xs sm:text-sm md:text-base'>Content </li>
              <li className='text-[#595564] font-semibold text-xs sm:text-sm md:text-base'>Content </li>
              <li className='text-[#595564] font-semibold text-xs sm:text-sm md:text-base'>Content </li>
              <li className='text-[#595564] font-semibold text-xs sm:text-sm md:text-base'>Content </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
