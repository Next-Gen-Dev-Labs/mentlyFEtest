"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import SideMenuIcon from '@/components/common/icons/sidemenu-icon'
import { SideSheet } from '@/components/common/sidebar/sidesheet'
import { CollapsibleSection } from "@/components/ui/collapsible-section"
import { PopoverDropdown } from '@/components/common/dropdown/drop-down'
import { CollapsibleTrigger } from '@/components/ui/collapsible'
import { EllipsisVertical, Menu, Settings, LogOut, User, MoreVertical, ChevronDown } from 'lucide-react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { GroupCallCard } from '@/components/common/card/groupcall-cards'
import { GroupCallCard2 } from '@/components/common/card/groupcall-cards-2'
import UserStatsDonutChart from '@/components/common/chart/UserStatsDonutChart'
import BusinessCard from '@/components/common/card/business-card'
import Notification from '@/components/common/notification/notification-1';
import MentorCard from '@/components/common/card/mentor-card';
import { mentors, students, notifications, businessCards, groupCalls, chartData } from './data';

const DashboardOverview = () => {
  const dropDownItems = [

     {
          label: 'Option 1',
          // icon: <Settings className="h-4 w-4" />,
          onClick: () => console.log('Settings clicked')
        },
    {
      label: 'Option 2',
      // icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log('Settings clicked')
    },
    {
      label: 'Cancel',
      // icon: <LogOut className="h-4 w-4" />,
      variant: 'destructive' as const,
      onClick: () => console.log('Logout clicked')
    }
  ];

  const filterDropDownItems = [

    {
      label: 'Pending',
      // icon: <LogOut className="h-4 w-4" />,
      // variant: 'destructive' as const,
      onClick: () => console.log('Pending clicked')
    },
    {
         label: 'Active',
         // icon: <Settings className="h-4 w-4" />,
         onClick: () => console.log('Active clicked')
       },
   {
     label: 'Inactive',
     // icon: <Settings className="h-4 w-4" />,
     onClick: () => console.log('Inactive clicked')
   },
 ];

  const [showMessage, setShowMessage] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Pending');

  const handleMessageClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };
  const handleAccept = () => {
    console.log('User accepted');
  };

  const handleReject = () => {
    console.log('User rejected');
  };

  return (
    <div className="space-y-4 w-full text-sm ">
      <div className="flex items-center gap-x-4 ml-auto w-max">
        <div className="rounded px-1 py-2.5 gap-4 flex items-center cursor-pointer hover:text-[#6F01D0] hover:font-bold hover:ring duration-300 hover:ring-[#6F01D0]/30">
          <SideMenuIcon />
        </div>
        <SideSheet />
      </div>

      <div className="w-full bg-[#6F01D0] text-white rounded-lg p-2.5 px-4 lg:px-8 flex items-center justify-between">
        <div className="flex flex-col lg:flex-row flex-1">

        <h1 className='text-base lg:text-xl font-bold'>Welcome Aboard, Blessing 👋</h1>
        <h2 className='text-gray-300 text-sm lg:text-lg hidden lg:block'>We&apos;re thrilled to have you join Techrity Team!</h2>
        </div>
        <Button className='bg-white text-[#1F0954] font-bold text-xs hover:bg-gray-200'>Update Profile</Button>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4">
        <div className="w-max min-h-screen flex-col flex gap-4">
          <CollapsibleSection
            className='border rounded-lg duration-300 overflow-hidden bg-white w-full'
            customHeader={
              <div className="w-full flex items-center justify-between p-4 py-2 border-b overflow-hidden">
                <div className="flex items-center gap-3">
                  <CollapsibleTrigger asChild>
                    <button className="focus:outline-none">
                      <Menu className="text-gray-600" />
                    </button>
                  </CollapsibleTrigger>
                  <div>
                    <h3 className="font-semibold text-gray-600">Programs</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button className='text-xs bg-transparent hover:bg-transparent shadow-none border-0 text-[#6F01D0] font-bold cursor-pointer'>
                    See All
                  </Button>
                  <PopoverDropdown 
                    trigger={<Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>}
                    items={dropDownItems}
                    className="w-36 -translate-x-28 absolute"
                  />
                </div>
              </div>
            }
            contentClassName="bg-white"
          >
            <div className="flex items-center justify-end px-6 pt-3 gap-4">
              <p>Filter</p>
              <PopoverDropdown 
              trigger={
                <Button variant="outline" className='shadow-none text-xs'>
                {selectedFilter} <ChevronDown />
                </Button>
              }
              items={filterDropDownItems.map(item => ({
                ...item,
                onClick: () => {
                setSelectedFilter(item.label);
                item.onClick();
                }
              }))}
              className="w-36 -translate-x-28 absolute"
              />
            </div>
            <ScrollArea className="w-[30vw lg:h-[74vh] rounded-md mb-2">
              <div className="flex flex-col gap-4 p-4 ">
                {groupCalls.map((call, idx) => (
                  <GroupCallCard2
                    key={idx}
                    imageUrl={call.imageUrl}
                    title={call.title}
                    date={call.date}
                    time={call.time}
                    studyGroup={call.studyGroup}
                    mentors={call.mentors}
                  />
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CollapsibleSection>


          <UserStatsDonutChart
            title="Users"
            filterLabel="All"
            data={chartData}
          />
        </div>

        <div className= " w-[97vw] sm:w-max flex flex-col flex-1 gap-4">
          <CollapsibleSection
            className='border rounded-lg duration-300 overflow-hidden bg-white'
            customHeader={
              <div className="w-full flex items-center justify-between p-4 py-2 border-b overflow-hidden">
                <div className="flex items-center gap-3">
                  <CollapsibleTrigger asChild>
                    <button className="focus:outline-none">
                      <Menu className="text-gray-600" />
                    </button>
                  </CollapsibleTrigger>
                  <div>
                    <h3 className="font-semibold text-gray-600">Group Calls</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button className='text-xs bg-transparent hover:bg-transparent shadow-none border-0 text-[#6F01D0] font-bold cursor-pointer'>
                    See All
                  </Button>
                  <PopoverDropdown 
                    trigger={<Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>}
                    items={dropDownItems}
                    className="w-36 -translate-x-28 absolute"
                  />
                </div>
              </div>
            }
            contentClassName="bg-white"
          >
            <ScrollArea className="w-full lg:w-[52vw] pb- whitespace-nowrap rounded-md mb-2">
              <div className="flex gap-4 p-4">
               
                {groupCalls.map((call, idx) => (
                  <GroupCallCard
                    key={idx}
                    imageUrl={call.imageUrl}
                    title={call.title}
                    date={call.date}
                    time={call.time}
                    studyGroup={call.studyGroup}
                    mentors={call.mentors}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CollapsibleSection>
          <div className="flex flex-col lg:flex-row  gap-4">

            <div className="w-full lg:w-7/12 ">
              <CollapsibleSection
                className='border rounded-lg duration-300 overflow-hidden bg-white w-full'
                customHeader={
                  <div className="w-full flex items-center justify-between p-4 py-2 border-b overflow-hidden">
                    <div className="flex items-center gap-3">
                      <CollapsibleTrigger asChild>
                        <button className="focus:outline-none">
                          <Menu className="text-gray-600" />
                        </button>
                      </CollapsibleTrigger>
                      <div>
                        <h3 className="font-semibold text-gray-600">Applications</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className='text-xs bg-transparent hover:bg-transparent shadow-none border-0 text-[#6F01D0] font-bold cursor-pointer'>
                        See All
                      </Button>
                      <PopoverDropdown 
                        trigger={<Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>}
                        items={dropDownItems}
                        className="w-36 -translate-x-28 absolute"
                      />
                    </div>
                  </div>
                }
                contentClassName="bg-white"
              >
                <ScrollArea className="w-[30vw lg:h-[60.5vh] rounded-md mb-2">
                  <div className="flex flex-col gap-4 p-4 ">
                    <div>
                      <h3 className="font-semibold text-gray-600">Mentors</h3>
                    </div>

                    <div className='flex flex-col gap-4 divide divide-y divide-gray-200'>
                    {mentors.map((mentor, idx) => (

                        <MentorCard
                          key={mentor.email + idx}
                          avatar={mentor.avatar}
                          name={mentor.name}
                          email={mentor.email}
                          role={mentor.role}
                          experience={mentor.experience}
                          location={mentor.location}
                          timezone={mentor.timezone}
                          isMentor={mentor.isMentor}
                          onAccept={handleAccept}
                          onReject={handleReject}
                        />
                      ))}
                      </div>

                    <div>
                      <h3 className="font-semibold text-gray-600">Students</h3>
                    </div>
                    <div className='  flex flex-col gap-4 divide divide-y divide-gray-200'>
                    {students.map((student, idx) => (

                        <MentorCard
                          key={student.email + idx}
                          avatar={student.avatar}
                          name={student.name}
                          email={student.email}
                          role={student.role}
                          experience={student.experience}
                          location={student.location}
                          timezone={student.timezone}
                          isMentor={student.isMentor}
                          onAccept={handleAccept}
                          onReject={handleReject}
                        />
                      ))}
                      </div>
                  </div>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CollapsibleSection>
            </div>
            <div className="w-full lg:w-5/12 flex flex-col gap-4">
              <CollapsibleSection
                className='border rounded-lg duration-300 overflow-hidden bg-white'
                customHeader={
                  <div className="w-full flex items-center justify-between p-4 py-2 border-b overflow-hidden">
                    <div className="flex items-center gap-3">
                      <CollapsibleTrigger asChild>
                        <button className="focus:outline-none">
                          <Menu className="text-gray-600" />
                        </button>
                      </CollapsibleTrigger>
                      <div>
                        <h3 className="font-semibold text-gray-600">Mentors</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className='text-xs bg-transparent hover:bg-transparent shadow-none border-0 text-[#6F01D0] font-bold cursor-pointer'>
                        See All
                      </Button>
                      <PopoverDropdown 
                        trigger={<Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>}
                        items={dropDownItems}
                        className="w-36 -translate-x-28 absolute"
                      />
                    </div>
                  </div>
                }
                contentClassName="bg-white"
              >
                <ScrollArea className="w-[30vw lg:h-[56.5vh rounded-md mb-2">
                  <div className="flex flex-col gap-4 p-4 pb-0 divide divide-y divide-gray-100">
                    {businessCards.map((card, idx) => (
                      <BusinessCard
                        key={idx}
                        profileImage={card.profileImage}
                        name={card.name}
                        jobTitle={card.jobTitle}
                        onAction={handleMessageClick}
                      />
                    ))}
                    <Button className='-10 w-full bg-[#DDD6FB] text-purple-700 py-5 duration-300 transition-all hover:bg-purple-700 hover:text-white rounded-full mb-3'>See All</Button>
                  </div>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CollapsibleSection>

              <CollapsibleSection
                className='border rounded-lg duration-300 overflow-hidden bg-white'
                customHeader={
                  <div className="w-full flex items-center justify-between p-4 py-2 border-b overflow-hidden">
                    <div className="flex items-center gap-3">
                      <CollapsibleTrigger asChild>
                        <button className="focus:outline-none">
                          <Menu className="text-gray-600" />
                        </button>
                      </CollapsibleTrigger>
                      <div>
                        <h3 className="font-semibold text-gray-600">Recent Activities</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className='text-xs bg-transparent hover:bg-transparent shadow-none border-0 text-[#6F01D0] font-bold cursor-pointer'>
                        See All
                      </Button>
                      <PopoverDropdown 
                        trigger={<Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>}
                        items={dropDownItems}
                        className="w-36 -translate-x-28 absolute"
                      />
                    </div>
                  </div>
                }
                contentClassName="bg-white"
              >
                <ScrollArea className="w-[30vw lg:h-[60.5]vh rounded-md mb-2">
                  <div className="flex flex-col gap-4 p-4 pb-0 divide divide-y divide-gray-100">
                    {notifications.map((notification, idx) => (
                      <Notification
                        key={idx}
                        avatar={notification.avatar}
                        title={notification.title}
                        message={notification.message}
                        timestamp={notification.timestamp}
                      />
                    ))}
                  </div>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CollapsibleSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview