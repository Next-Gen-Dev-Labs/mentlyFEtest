"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserChart } from "./user-chart";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

export const Users = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className="bg-transparent rounded-sm p-3 mt-2"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="border rounded-sm pt-3 bg-transparent">
        <div className="flex items-center border-b px-3 pt-0  pb-2">
          <p className="font-semibold text-2xl">Users</p>
          <div className="ml-auto gap-2 flex items-center">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">mentors</SelectItem>
                <SelectItem value="dark">students</SelectItem>
                <SelectItem value="dark">others</SelectItem>
                <SelectItem value="dark">programs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <UserChart />
      </div>
    </motion.div>
  );
};
