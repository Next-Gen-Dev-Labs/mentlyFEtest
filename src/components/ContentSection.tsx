import React from 'react';
import { IconBriefcase, IconCalendar, IconMapPin, IconFileText, IconBuilding, IconPhone, IconMail } from '@tabler/icons-react';

interface ContentBlockProps {
  icon: React.ReactNode | null;
  text: string;
}

interface ContentListProps {
  text: string;
}


export const ContentSection: React.FC = () => {
  return (
    <div className="">
      <div className="">
        {/* Top Section */}
        <div className="flex space-x-8 my-8">
          <div className="flex-1">
            <p className="text-lg font-semibold">UI/UX Design check ins with faith is a</p>
            <p className="text-gray-700">way for beginners in UI/UX Design to get started about the fundamentals and how they can build a Design Career, share, document their progress on a weekly basis.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md flex flex-col justify-between p-8">
            {/* <div className=""> */}
              <div className="flex items-center space-x-2 mb-2 gap-4">
                <IconBriefcase size={20} className='text-neutral-500' />
                <span className="text-sm font-semibold text-neutral-500">Mentorship Program</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 gap-4">
                <IconCalendar size={20} className='text-neutral-500' />
                <span className="text-sm font-semibold text-neutral-500">21/4/2024-21/5/2024</span>
              </div>
              <div className="flex items-center space-x-2 gap-4">
                <IconMapPin size={20} className='text-neutral-500' />
                <span className="text-sm font-semibold text-neutral-500">In Person</span>
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* Program Information Text Section 1 */}
        <div className="mb-8 border bg-[#FFFAF2] border-[#FEE0B1] p-4 rounded-2xl">
          <h2 className="font-semibold text-lg mb-4">Program Information Text</h2>
          <div className="grid grid-cols-2 gap-4">
            <ContentBlock icon={<IconFileText size={20} />} text="Content" />
            <ContentBlock icon={<IconBuilding size={20} />} text="Content" />
            <ContentBlock icon={<IconPhone size={20} />} text="Content" />
            <ContentBlock icon={<IconMail size={20} />} text="Content" />
            <ContentBlock icon={<IconFileText size={20} />} text="Content" />
            <ContentBlock icon={<IconBuilding size={20} />} text="Content" />
          </div>
        </div>

        {/* Program Information Text Section 2 */}
        <div className='border bg-[#FFFAF2] border-[#FEE0B1] p-4 rounded-2xl'>
          <h2 className="font-semibold text-lg mb-4">Program Information Text 2</h2>
          <div>
            <ContentList text="Content" />
            <ContentList text="Content" />
            <ContentList text="Content" />
            <ContentList text="Content" />
            <ContentList text="Content" />
            <ContentList text="Content" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentBlock: React.FC<ContentBlockProps> = ({ icon, text }) => {
  return (
    <div className="rounded-lg p-4 flex items-center space-x-2">
      {icon && <div className='w-8 h-8 rounded-full bg-[#FFECCC] flex items-center justify-center'>{icon}</div>}
      <div><p className="text-sm text-gray-700">{text}</p></div>
    </div>
  );
};

const ContentList: React.FC<ContentListProps> = ({ text }) => {
  return (
    <div className="mb-2">
      <div className="flex items-center space-x-2">
        <span className="text-sm">•</span>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};
