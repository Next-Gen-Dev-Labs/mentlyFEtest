import { MentorCardProps } from '@/app/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';



export default function MentorCard({
  name,
  role,
  avatarSrc = '/images/avatar-placeholder.png',
  messageRoute = '/message',
  onMessage,
}: MentorCardProps) {
  const handleMessageClick = () => {
    if (onMessage) {
      onMessage();
    }
  };

  return (
    <motion.div
      className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0 font-sans"
      whileHover={{
        scale: 1.02,
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
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
          <h4 className="text-sm text-[#4F4F4F] font-bold">{name}</h4>
          <p className="text-xs text-[#7D8DA6]">{role}</p>
        </div>
      </div>

      <Link
        href={messageRoute}
        onClick={handleMessageClick}
        className="bg-[#6F01D0] text-white px-3 py-1 rounded-3xl text-sm hover:bg-primary hover:text-white transition-colors"
        aria-label={`Message ${name}`}
      >
        Message
      </Link>
    </motion.div>
  );
}