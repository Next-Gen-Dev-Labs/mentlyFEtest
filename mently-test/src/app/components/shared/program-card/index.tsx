import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CategoryBadge from '../category-pill';
import { ProgramCardProps } from '@/app/types';


export default function ProgramCard({
  title,
  description,
  mentor,
  hostedBy,
  imageSrc,
  category,
  detailsRoute = '/details',
  pillTextColor,
  pillBgColor,
  mentorImageSrc = '/images/avatar.png',
}: ProgramCardProps) {
  return (
    <motion.div
      className="bg-white font-chivo rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-3 md:p-4 lg:p-4">
        <div className="relative mb-3 w-full rounded-lg h-[100px] lg:h-[100px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />

          <div className="relative z-10 p-2 md:p-3 lg:p-3 w-full h-full flex flex-col items-start justify-center text-white bg-black/30">
            <h3 className="text-sm md:text-base lg:text-base text-white text-start font-bold leading-snug">
              {title}
            </h3>
            <CategoryBadge
              label={category}
              textColor={pillTextColor}
              bgColor={pillBgColor}
            />
          </div>
        </div>
        <p className="text-gray-600 font-chivo text-xs md:text-sm lg:text-sm line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between gap-2 mt-3 md:mt-4 lg:mt-4">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-3">
            <Image
              src={mentorImageSrc}
              alt={mentor}
              width={24}
              height={24}
              className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full"
            />
            <div>
              <p className="text-[10px] md:text-xs lg:text-xs text-gray-700 font-medium">
                {mentor}
              </p>
              {hostedBy && (
                <p className="text-[10px] md:text-xs lg:text-xs text-gray-700">
                  Hosted by {hostedBy}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={detailsRoute}
              className="bg-white border border-[#6F01D0] text-[#6F01D0] text-[10px]  px-2 py-1  rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              View Details
            </Link>
            {hostedBy && (
              <button className="bg-[#6F01D0] text-white px-2  py-1  rounded-md text-[10px] hover:bg-primary-dark transition-colors whitespace-nowrap">
                Analytics
              </button>
            )}
            {mentor && (
              <button className="bg-[#6F01D0] text-white px-2  py-1  rounded-md text-[10px] hover:bg-primary-dark transition-colors whitespace-nowrap">
                Assign Mentor
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}