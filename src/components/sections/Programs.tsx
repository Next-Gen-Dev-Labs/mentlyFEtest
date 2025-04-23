import React from "react";
import Header from "../ui/Header";
import { ProgramItems } from "@/data/program.items";
import { motion } from "framer-motion";
import { ProgramType } from "@/types/data";
import { Cards } from "../ui/Cards";

const Programs = () => {
  return (
    <div className="w-full rounded-[10px] py-2 bg-white">
      <Header title="Programs" />
      <div className="flex items-center justify-end gap-3 text-xs font-medium text-[#918C9C] px-8">
        Filter
        <select className="border outline-none py-[6px] px-[10px] border-[#E1E7EC] rounded-sm text-xs text-[#595564]">
          <option value="Active">Active</option>
        </select>
      </div>
      <div className="w-full px-4 mt-2 mb-1 space-y-4">
        {ProgramItems.map((program: ProgramType, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3 * index,
            }}
            viewport={{ once: true }}
          >
            {" "}
            <Cards.ProgramCard program={program} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
