import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, memo } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Role } from '@/app/types/enum';
import { ApplicationCardProps } from '@/app/types';

function ApplicationCard({
  name,
  email,
  role,
  roleLabel,
  experience,
  location,
  timezone,
  avatarSrc = '/images/avatar-placeholder.png',
  onAccept,
  onReject,
}: ApplicationCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <motion.div
      className="flex md:p-1 flex-col items-center justify-between py-4 border-b border-gray-200 last:border-b-0 font-sans"
      whileHover={{
        scale: 1.02,
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-4 w-full">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-5 h-5 border-gray-300 rounded"
            aria-label={`Select ${name}`}
          />
          <Image
            src={avatarSrc}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
            onError={e => {
              e.currentTarget.src = '/images/avatar-placeholder.png';
            }}
          />
          <div>
            <h4 className="text-sm font-bold text-gray-800">{name}</h4>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>

        <div className="ml-auto">
          <div className="hidden sm:flex gap-2">
            <button
              onClick={onReject}
              className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
              aria-label={`Reject ${name}`}
            >
              Reject
            </button>
            <button
              onClick={onAccept}
              className="px-3 py-1 text-xs font-medium rounded-md bg-[#6F01D0] text-white hover:bg-primary-dark transition-colors"
              aria-label={`Accept ${name}`}
            >
              Accept
            </button>
          </div>

          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label={`More options for ${name}`}
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6h.01M12 12h.01M12 18h.01"
                    />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                  onClick={onAccept}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-[#6F01D0] text-white hover:bg-primary-dark transition-colors text-center"
                >
                  Accept
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={onReject}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-800 hover:bg-red-200 transition-colors text-center mt-1"
                >
                  Reject
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {role === Role.Mentor && (
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-[6px] py-[1px] text-[10px] font-semibold rounded-full bg-purple-100 text-purple-800">
            {roleLabel}
          </span>
          <span className="px-1 py-[1px] text-[10px] font-semibold rounded-full bg-cyan-100 text-cyan-800">
            {experience}
          </span>
          <span className="flex items-center gap-1 px-1 py-[1px] text-[10px] font-semibold rounded-full bg-green-100 text-green-800">
            <Image
              src="/nig.svg"
              alt="Location"
              width={12}
              height={12}
              className="w-3 h-3 "
            />
            {location}
          </span>
          <span className="px-1 py-[1px] text-[10px] font-semibold rounded-full bg-blue-100 text-blue-800">
            {timezone}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default memo(ApplicationCard);