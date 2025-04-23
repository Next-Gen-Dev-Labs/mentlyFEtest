import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Widgets = () => {
  return (
    <div className="w-full flex items-center justify-end gap-4 sm:gap-5">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Image
          src="/icons/widget.svg"
          alt="widget"
          className="sm:w-6 w-4 h-4 sm:h-6"
          width={24}
          height={24}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.3,
        }}
      >
        <Image
          src="/icons/widget-color.svg"
          alt="widget"
          className="sm:w-6 w-4 h-4 sm:h-6"
          width={24}
          height={24}
          priority
        />
      </motion.div>

      <motion.span
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.6,
        }}
        className="font-bold text-[#1F0954] max-md:text-sm"
      >
        Manage Widgets
      </motion.span>
    </div>
  );
};

export default Widgets;
