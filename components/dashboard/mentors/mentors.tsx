"use client";
import { Button } from "@/components/ui/button";
import { mentorData } from "@/data";
import { CirclePlus, MoreVerticalIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { MentorCard } from "./mentor-card";
import { useRef } from "react";

export const Mentors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-sm p-3"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
      aria-labelledby="mentors-header"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Image
            src={"/bars.svg"}
            alt="bars"
            width={20}
            height={20}
            className="size-6"
          />
          <h2 className="text-xl font-bold text-brand-gray">Mentors</h2>
        </div>
        <div className="flex items-center gap-1">
          <CirclePlus />
          <MoreVerticalIcon />
        </div>
      </div>

      <div className="space-y-2" role="list" aria-label="List of mentors">
        {mentorData.map((item, index) => (
          <MentorCard key={index} {...item} />
        ))}

        <Button
          aria-label="See all mentors"
          className="w-full cursor-pointer rounded-full hover:bg-brand-blue-100 bg-brand-blue-100 text-brand-blue text-base md:text-lg font-semibold px-2 sm:px-4 py-2 sm:py-4"
        >
          See all
        </Button>
      </div>
    </motion.div>
  );
};
