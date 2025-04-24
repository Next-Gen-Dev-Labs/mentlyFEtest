"use client";
import { motion, useInView } from "motion/react";
import { SectionHeader } from "@/components/section-header";
import React, { useRef } from "react";
import { ActivityCard } from "./activity-card";
import { activityData } from "@/data";

export const RecentActivites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-sm p-3"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="recent-activities-header"
    >
      <SectionHeader title="Recent Activities" />
      <div className="space-y-1">
        {activityData.map((item, index) => (
          <ActivityCard
            key={index}
            {...item}
            aria-label={`Activity ${index + 1}: ${item.activity}`}
          />
        ))}
      </div>
    </motion.div>
  );
};
