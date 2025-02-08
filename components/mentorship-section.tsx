"use client";

import { Icons } from "@/constants/icons";
import { images } from "@/constants/image";
import { motion } from "framer-motion";
import Image from "next/image";

import { CurrentDate } from "./curent-date";
import { ProgramInformation } from "./program-information";
import { Card } from "./ui/custom-card";

const mentorship_data = [
  {
    title: "mentorship programs",
    icon: Icons.brief_case,
  },
  {
    title: "21/4/2024",
    icon: Icons.brief_case,
  },
  {
    title: "In Person",
    icon: Icons.location,
  },
];

export const MentorshipSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <CurrentDate
          className="mb-10 text-end"
          date="13th February 2024, 12:15 PM (Local time)."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="h-full w-full space-y-5 rounded-md border p-3"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-2xl font-bold text-primary md:text-4xl"
        >
          Mentorship Program
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Image
            src={images.mentorship_banner}
            placeholder="blur"
            blurDataURL={images.mentorship_banner.blurDataURL}
            alt="banner"
            className="h-[120px] md:h-[206px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="!mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400"
          >
            UI/UX Design check ins with faith is a way for beginners in UI/UX
            Design to get started about the fundamentals and how they can build
            a Design Career, share, document their progress on a weekly basis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="px-6 py-8">
              {mentorship_data?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                  className="grid w-full grid-cols-5 items-center"
                >
                  <item.icon className="col-span-2" />
                  <div className="col-span-3">
                    <p className="text-left text-sm font-bold capitalize text-[#777795]">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Card>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ProgramInformation />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
