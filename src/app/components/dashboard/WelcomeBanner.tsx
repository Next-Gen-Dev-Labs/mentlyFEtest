"use client";

import { motion } from "framer-motion";

interface WelcomeBannerProps {
  name: string;
}

export default function WelcomeBanner({ name }: WelcomeBannerProps) {
  const bannerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren" },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap bg-[#6F01D0] text-white px-4 sm:px-6 py-4 flex max-smd:flex-col justify-between items-start sm:items-center w-full gap-3 sm:gap-4"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap items-center w-full">
        <motion.div
          className="flex items-center mr-auto"
          variants={childVariants}
        >
          <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
            Welcome Aboard, {name}{" "}
            <motion.span
              className="inline-block ml-1"
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={childVariants} className="w-fit mr-auto ">
          <p className="text-[#BDBDBD] text-base md:text-lg font-bold truncate break-normal whitespace-normal">
            We&apos;re thrilled to have you join Techrity Team!
          </p>
        </motion.div>
      </div>

      <motion.button
        variants={childVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="bg-white text-[#1F0954] py-2 px-4 md:px-6 rounded-[8px] font-bold text-sm md:text-base shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap sm:ml-auto"
        aria-label="Update Profile"
      >
        Update Profile
      </motion.button>
    </motion.div>
  );
}
