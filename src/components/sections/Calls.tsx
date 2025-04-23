import React from "react";
import Header from "../ui/Header";
import { motion } from "framer-motion";
import { CallCardItems } from "@/data/call.items";
import { CallCardType } from "@/types/data";
import { Cards } from "../ui/Cards";

const Calls = () => {
  return (
    <div className="w-full rounded-[10px] py-2 bg-white">
      <Header title="Group Calls" />
      <div className="overflow-x-auto px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, staggerChildren: 0.2 }}
          className="inline-flex gap-2 min-w-max"
        >
          {CallCardItems.map((item: CallCardType, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.4 * index }}
            >
              {" "}
              <Cards.CallCard key={index} details={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Calls;
