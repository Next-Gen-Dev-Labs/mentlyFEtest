import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar, BsClock } from 'react-icons/bs';
import CategoryBadge from '../category-pill';
import { GroupCallCardProps } from '@/app/types';



export default function GroupCallCard({
  title,
  date,
  time,
  groupTitle,
  groupSubtitle,
  imageSrc,
  status,
  mentorAvatars = [
    '/images/avatar-placeholder.png',
    '/images/avatar-placeholder.png',
  ],
  joinRoute = '/join-call',
  groupLogoSrc = '/images/avatar-placeholder.png',
}: GroupCallCardProps) {
  const badgeStyles = {
    ongoing: { textColor: 'text-green-500', bgColor: 'bg-green-100' },
    upcoming: { textColor: 'text-blue-500', bgColor: 'bg-blue-100' },
  };

  return (
    <motion.div
      className="bg-[#F9F7FF] rounded-lg overflow-hidden shadow-md font-chivo"
      whileHover={{
        scale: 1.05, 
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{ scale: 0.95 }} 
    >
      <div className="p-4">
        <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            onError={e => {
              e.currentTarget.src = '/images/fallback-image.png';
            }}
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <div className="mt-2 mb-2">
          <CategoryBadge
            label={status.charAt(0).toUpperCase() + status.slice(1)}
            textColor={badgeStyles[status].textColor}
            bgColor={badgeStyles[status].bgColor}
          />
        </div>
        <h3 className="text-lg font-chivo font-medium border-b-1 border-gray-300 pb-2 text-[#595564]">
          {title}
        </h3>

        <div className="space-y-2 mt-3">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <BsCalendar className="text-gray-500" />
            <span className="border-r-1 border-gray-300 pr-4">{date}</span>
            <BsClock className="text-gray-500 ml-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-end gap-2">
              <div className="flex items-end justify-end">
                <Image
                  src={groupLogoSrc}
                  alt={groupSubtitle}
                  width={24}
                  height={24}
                  className="w-4 h-4 rounded-full "
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-[#A195C0] font-medium">
                  {groupTitle}
                </span>
                <span className="text-[10px] font-semibold text-[#595564] ">
                  {groupSubtitle}
                </span>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[8px] text-[#A195C0] font-medium">
                Mentor
              </span>
              <div className="flex -space-x-2">
                {mentorAvatars.map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt={`Mentor ${index + 1}`}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-full mt-4">
          <button
            className="w-full bg-white border-1 border-[#6F01D0] text-[#6F01D0] text-[10px]   px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition-colors"
            aria-label="View participants"
          >
            View Participants
          </button>
          <Link
            href={joinRoute}
            className="w-full flex flex-row bg-[#6F01D0] items-center justify-center text-white px-3 py-2 rounded-md text-[10px] hover:bg-primary-dark transition-colors"
            aria-label="Join now"
          >
            Join Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}