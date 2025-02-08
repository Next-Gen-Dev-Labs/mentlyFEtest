import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function SectionTitleInput() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="flex mb-2 items-center gap-2 w-full border border-purple-900 rounded-md px-3 py-2 text-gray-300"
    >
      <div className="w-6 h-6 flex items-center justify-center border-2 border-dashed border-purple-900 rounded-sm text-purple-700 font-bold text-sm">
        T
      </div>
      <ChevronDown className="w-4 h-4 text-gray-500" />
      <input
        type="text"
        placeholder="Describe Section Title e.g What you stand to learn"
        className="bg-transparent text-gray-300 text-sm outline-none placeholder:text-gray-500 w-full"
      />
    </motion.div>
  );
}
