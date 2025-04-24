"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { programData } from "@/data";
import { motion } from "motion/react";
import { SectionHeader } from "../../section-header";
import { ProgramCard } from "./programCard";

export const Programs = () => {
  return (
    <motion.div
      className="bg-white p-3 rounded-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      aria-labelledby="programs-header"
    >
      <SectionHeader title="Programs" />
      <div className="flex mb-2">
        <div className="ml-auto gap-2 flex items-center">
          <p>Filters</p>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Active" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light" aria-label="Completed programs">
                Active
              </SelectItem>
              <SelectItem value="dark" aria-label="Upcoming programs">
                InActive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className="grid grid-cols-1 gap-1"
        role="list"
        aria-label="List of programs"
      >
        {programData.map((data, index) => (
          <ProgramCard
            key={index}
            {...data}
            aria-label={`Program: ${data.title}, ${data.description}`}
          />
        ))}
      </div>
    </motion.div>
  );
};
