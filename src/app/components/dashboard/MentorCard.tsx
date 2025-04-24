"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar?: StaticImageData;
}

const mentorCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};
export default function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <motion.div
      className="flex items-center justify-between p-2 flex-wrap gap-2"
      variants={mentorCardVariants}
    >
      <div className="w-fit flex items-center gap-3">
        <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gray-200">
          {mentor.avatar && (
            <Image
              src={mentor.avatar}
              alt={`${mentor.name}'s avatar`}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{mentor.name}</h3>
          <p className="text-sm text-gray-500">{mentor.title}</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-1 bg-[#6F01D0] text-white text-sm rounded-full hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 ml-auto"
      >
        Message
      </motion.button>
    </motion.div>
  );
}
