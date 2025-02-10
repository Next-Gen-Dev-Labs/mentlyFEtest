"use client";
import { Alert } from "@/components/Alert";
import { Checkbox } from "@/components/CheckBox";
import MentorshipCard from "@/components/MentorshipCard";
import { Navbar } from "@/components/SideBar";
import {
  IconBriefcase,
  IconCalendarWeek,
  IconCaretDown,
  IconCaretDownFilled,
  IconCertificate,
  IconChevronUp,
  IconCircleDashedLetterT,
  IconCopy,
  IconDotsVertical,
  IconInfoCircle,
  IconMapPin,
  IconPhonePlus,
  IconPlus,
  IconSettings,
  IconUserPentagon,
  IconUsersGroup,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  {
    /* <IconArrowLeft /> */
  }
  return (
    <div className='grid grid-cols-[100px_1fr]'>
      {/* SIDEBAR */}
      <Navbar />
      {/* CONTENT */}
      <div className=''>
        {/* TOP */}
        <div className='flex justify-end border-b border-solid border-b-neutral-300 p-3'>
          <div className=''>
            <img
              className='dark:invert w-12 rounded-full'
              src='/images/user1.png'
              alt='User Display Picture'
            />
          </div>
          <div className=''>
            <div className=''>Godwin Jimmy</div>
            <div className=''>
              Free Plan <span className=''>Upgrade</span>
            </div>
          </div>
        </div>
        <div className='flex '>
          {/* LEFT */}
          <div className='p-4 w-1/2'>
            <div className='flex justify-between'>
              <p className=''>Back to home</p>
              <div className='flex  gap-2 bg-blue-200'>
                <IconSettings size={25} className='' />
                <IconCopy size={25} className='' />
                <button className=''>Share </button>
              </div>
            </div>
            <div className=''>
              <div className=''>Program Information</div>
            </div>
            {/* INPUT */}
            <div className=''>
              <p className=''>Describe Section Title</p>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <IconCircleDashedLetterT size={25} />
                  <IconCaretDownFilled size={25} />
                </div>
                <input
                  type='text'
                  className='w-full pl-16 pr-10 py-2 text-base border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-gray-400
                placeholder:text-gray-500 placeholder:font-light'
                  placeholder='Describe Section Title eg What you stand to learn'
                />
              </div>
            </div>
            <Alert
              message="Provide your prefered title for this section i.e What's in this
              Program for you?"
            />
            <div className=''>
              <textarea
                id='section-description'
                className='border border-gray-300 rounded w-full py-2 px-3 h-24 mb-4'
                // value={sectionDescription}
                // onChange={(e) => setSectionDescription(e.target.value)}
                placeholder='Input Text'
              ></textarea>
            </div>
            <Alert message='Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions..' />
            <div className='border border-neutral-500 rounded-lg flex flex-col items-center justify-center gap-2 p-2'>
              <div className='flex gap-3'>
                <IconPlus size={20} />
                <p className=''>Add new sections</p>
              </div>
              <div className='text-sm text-center text-gray-500'>
                (Maximum number of sections to add is 3)
              </div>
            </div>
            <div className='mt-4'>
              <Checkbox label='Show this section when Published ' />
            </div>
            <div className='mt-4 flex flex-col gap-2'>
              <div className='rounded-md border border-neutral-200 border-solid bg-neutral-200 p-3 flex justify-between'>
                <p className=''>Program Information Text 1</p>
                <div className='flex gap-3'>
                  <IconChevronUp size={25} />
                  <IconDotsVertical size={25} />
                </div>
              </div>
              <div className='rounded-md border border-neutral-200 border-solid bg-neutral-200 p-3 flex justify-between'>
                <p className=''>Program Information Text 2</p>
                <div className='flex gap-3'>
                  <IconChevronUp size={25} />
                  <IconDotsVertical size={25} />
                </div>
              </div>
            </div>

            <div className='flex gap-4 justify-center '>
              <button className='py-2 px-4'>Go Back</button>
              <button className='flex py-2 px-4'>
                Save & Proceed <IconCaretDown size={25} />
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className='p-4 w-1/2'>
            <div className='flex justify-end'>
              <p className=''>
                13th February 2024, 12:15PM{" "}
                <span className=''>(Local Time)</span>
              </p>
            </div>

            <div className='text-2xl font-bold'>Mentorship Program</div>
            <div className=''>
              <MentorshipCard />
            </div>
            {/* More Details */}
            <div className='flex gap-3 mt-6'>
              <div className='w-1/2'>
                UI/UX Design Checks ins with faith is a way for beginners in
                UI/UX Design to get started about the fundamentals and how they
                can build a Design Career, share document their progress on a
                weekly basis
              </div>
              <div className='p-6 flex flex-col justify-center items-center w-1/2 shadow-md'>
                <div className='flex items-center w-full  text-gray-600 mt-2'>
                  <IconBriefcase className='w-[40%]' size={30} />
                  <p className='w-[60%]'>Mentorship Program</p>
                </div>
                <div className='flex items-center text-gray-600 mt-2 justify-between w-full'>
                  <IconCalendarWeek className='' size={30} />
                  <p>21/4/2024-21/5/2024</p>
                </div>
                <div className='flex items-center justify-between w-full text-gray-600 mt-2'>
                  <IconMapPin className='' size={30} />
                  <p>In Person</p>
                </div>
              </div>
            </div>
            {/* Program Information */}
            <div className=''>
              <p className=''>Program Information Text</p>
              {/*       */}
              <div className=''>
                <IconCertificate />
                <p className=''>Content</p>
              </div>
              <div className=''>
                <IconBriefcase />
                <p className=''>Content</p>
              </div>
              <div className=''>
                <IconUsersGroup />
                <p className=''>Content</p>
              </div>
              <div className=''>
                <IconPhonePlus />
                <p className=''>Content</p>
              </div>
              <div className=''>
                <IconPhonePlus />
                <p className=''>Content</p>
              </div>
              <div className=''>
                <IconPhonePlus />
                <p className=''>Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
  //         <li className="mb-2">
  //           Get started by editing{" "}
  //           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
  //             src/app/page.tsx
  //           </code>
  //           .
  //         </li>
  //         <li>Save and see your changes instantly.</li>
  //       </ol>

  //       <div className="flex gap-4 items-center flex-col sm:flex-row">
  //         <a
  //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );
}
