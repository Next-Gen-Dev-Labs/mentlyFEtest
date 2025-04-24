"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import MentorCard from "./MentorCard";
import { BiDotsVertical } from "react-icons/bi";
import Menu from "../../../../public/images/icons/programMenu.svg";
import { CiCirclePlus } from "react-icons/ci";
import Maxwell from "../../../../public/images/images/maxwell.png";
import Adeati from "../../../../public/images/images/adeati.jpg";

interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar?: StaticImageData;
}

const mentorListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function MentorsList() {
  const [mentors] = useState<Mentor[]>([
    {
      id: 1,
      name: "Maxwell Smith",
      title: "Product Designer",
      avatar: Maxwell,
    },
    {
      id: 2,
      name: "Adeati Samuel",
      title: "Product Designer",
      avatar: Adeati,
    },
  ]);

  return (
    <div className="px-4 py-6 bg-white rounded-lg h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Image src={Menu} alt="programs" className="h-5 w-5" />

          <h2 className="text-xl font-bold text-[#B0B0B0]">Mentors</h2>
        </div>

        <div className="flex items-center gap-4">
          <CiCirclePlus className="h-8 w-8 text-[#B0B0B0]" />
          <BiDotsVertical className="h-5 w-5" />
        </div>
      </div>

      <motion.div
        className="space-y-3"
        variants={mentorListVariants}
        initial="hidden"
        animate="visible"
      >
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </motion.div>

      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-[#DDD6FB] text-[#6F01D0] rounded-full font-bold hover:bg-purple-200 transition-colors"
        >
          See all
        </motion.button>
      </div>
    </div>
  );
}
