import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#6F01D0] w-full rounded-sm h-[52px] flex items-center justify-between px-4 my-4"
    >
      <span className="text-white font-semibold md:text-[20px] text-base max-sm:text-sm lg:text-[26px]">
        Welcome Aboard, Blessing 👋
      </span>
      <span className="lg:text-xl md:text-lg max-lg:hidden text-sm font-semibold text-[#BDBDBD]">
        We’re thrilled to have you join Techrity Team!
      </span>
      <button className="h-10 font-bold md:text-sm text-xs rounded-lg bg-white text-[#1F0954] py-1.5 md:py-2 px-4 lg:px-6">
        Update Profile
      </button>
    </motion.div>
  );
};

export default Welcome;
