"use client";

import { motion } from "framer-motion";

interface WelcomeBannerProps {
  name: string;
}

export default function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <motion.div
      className="bg-purple-600 text-white p-4 rounded-lg flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-bold">
          Welcome Aboard, {name} <span className="ml-1">👋</span>
        </h1>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-purple-600 py-2 px-4 rounded hover:bg-gray-100"
      >
        Update Profile
      </motion.button>
    </motion.div>
  );
}
