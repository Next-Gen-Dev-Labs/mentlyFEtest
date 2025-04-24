"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BiDotsVertical } from "react-icons/bi";
import Menu from "../../../../public/images/icons/programMenu.svg";
import Adeati from "../../../../public/images/images/adeati.jpg";
import Kyc from "../../../../public/images/images/kyc.jpg";
import NewUser from "../../../../public/images/images/newUser.png";

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "kyc_verification",
      title: "KYC Verification",
      description: "45 new persons just signed up on Mentfy.",
      time: "25 minutes Ago",
      avatar: Kyc,
    },
    {
      id: 2,
      type: "new_user",
      title: "New User Sign Up!",
      description: "45 new persons just signed up on Mentfy.",
      time: "25 minutes Ago",
      avatar: NewUser,
    },
    {
      id: 3,
      type: "withdrawal",
      title: "Withdrawal Request",
      description: "Mardian requested a withdrawal.",
      time: "25 minutes Ago",
      avatar: Adeati,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div
      className="bg-white rounded-lg mx-auto p-6 w-full h-full"
      aria-label="Recent activities panel"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Image src={Menu} alt="programs" className="h-5 w-5" />

          <h2 className="text-xl font-bold text-[#B0B0B0]">
            Recent Activities
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#6F01D0] text-sm font-bold transition-colors"
          >
            See all
          </a>
          <BiDotsVertical className="h-5 w-5" />
        </div>
      </div>

      <motion.div
        // className="p-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            variants={itemVariants}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            tabIndex={0}
          >
            <div className="relative">
              <Image
                src={activity.avatar}
                alt=""
                className={`h-10 w-10 rounded-full object-cover`}
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpath d='M12 8v4'%3E%3C/path%3E%3Cpath d='M12 16h.01'%3E%3C/path%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm text-gray-800">
                {activity.title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
