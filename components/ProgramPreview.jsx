"use client";

import {
  Calendar,
  MapPin,
  PhoneCall,
  Group,
  NotepadText,
  BaggageClaim,
  BarChartIcon as ChartBar,
  Contact2,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const contentArray = [
  {
    icon: <NotepadText />,
    text: "Content",
  },
  {
    icon: <Group />,
    text: "Content",
  },
  {
    icon: <PhoneCall />,
    text: "Content",
  },
  {
    icon: <BaggageClaim />,
    text: "Content",
  },
  {
    icon: <ChartBar />,
    text: "Content",
  },
  {
    icon: <Contact2 />,
    text: "Content",
  },
];

export default function ProgramPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="mb-14 text-gray-600 text-right"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        13th February 2024, 12:15 PM (Local time).
      </motion.h1>
      <motion.h1
        className="text-4xl font-extrabold text-[#1f0954] mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Mentorship Program
      </motion.h1>
      <motion.div
        className="max-w-3xl mx-auto border rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Hero Banner */}
        <motion.div
          className="relative bg-[#1C1B3B] text-white p-6 rounded-t-lg overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image
                src="/assets/mentor.png"
                alt="Speaker"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h1 className="text-2xl font-bold mb-1">
                Mastering the work <br></br> life Equation
              </h1>
              <h1 className="text-sm font-light mb-1">
                <span className="">with</span> Nwachukwu Peculiar
              </h1>
              <motion.button
                className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </motion.div>
            <motion.div
              className="text-base"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h1 className="font-semibold text-sm">
                20TH <br></br>OCT,
              </h1>
              <h1 className="font-semibold text-sm">2024</h1>
              <h1 className="mt-1 text-sm ">2PM</h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Program Details */}
        <div className="p-6">
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {/* Program Description */}
            <p className="text-gray-600 mb-8 w-72">
              UI/UX Design check ins with faith is a way for beginners in UI/UX
              Design to get advice about the fundamentals and how they can build
              a Design Career, share, document their progress on a weekly basis.
            </p>
            <div className="flex flex-col items-start gap-6 mb-8 text-sm">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 font-medium">
                  Mentorship Program
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">21/4/2024-21/5/2024</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">In Person</span>
              </motion.div>
            </div>
          </motion.div>
          {/* Program Information Grid */}
          <motion.div
            className="border bg-[#fcf1e0] rounded-lg p-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <h2 className="font-semibold mb-4 text-[#1f0954]">
              Program Information Text
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {contentArray.map((items, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                >
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600">{items.icon}</span>
                  </div>
                  <span className="text-gray-600">{items.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Program Information Text 2 */}
          <motion.div
            className="bg-[#fcf1e0] rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <h2 className="font-semibold mb-4 text-[#1f0954]">
              Program Information Text 2
            </h2>
            <ul className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2.1 + i * 0.1 }}
                >
                  <span>•</span>
                  Content
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
