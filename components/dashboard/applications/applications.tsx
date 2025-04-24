"use client";
import { SectionHeader } from "@/components/section-header";
import { mentorRequestsdata, studentRequests } from "@/data";
import { motion, useInView } from "motion/react";
import { MentorRequestCard } from "./mentor-request-card";
import { StudentRequestCard } from "./student-request-card";
import { useRef } from "react";

export const Applications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-sm p-3"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
      aria-labelledby="applications-header"
    >
      <SectionHeader title="Applications" />

      <div
        className="space-y-2"
        role="list"
        aria-labelledby="mentor-applications"
      >
        {/* Mentor applications */}
        <div className="text-brand-gray font-semibold">Mentors</div>
        {mentorRequestsdata.map((item, index) => (
          <MentorRequestCard
            key={index}
            {...item}
            aria-label={`Mentor request: ${item.name}, ${item.email}`}
          />
        ))}

        {/* Student applications */}
        <div
          className="space-y-3"
          role="list"
          aria-labelledby="student-applications"
        >
          <p className="text-brand-gray font-semibold">Students</p>
          {studentRequests.map((item, index) => (
            <StudentRequestCard
              key={index}
              {...item}
              aria-label={`Student request: ${item.name}, ${item.email}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
