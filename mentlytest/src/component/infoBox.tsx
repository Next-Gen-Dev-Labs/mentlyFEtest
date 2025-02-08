import { motion } from "framer-motion";
import { Info } from "lucide-react";

interface InfoBoxProps {
  message: string;
}

export function InfoBox({ message }: InfoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-lg bg-blue-100 p-4 mb-2 dark:bg-purple-900 "
    >
      <div className="flex gap-2 items-start">
        <div className="mt-0.5 text-blue-500"><Info/></div>
        <p className="lg:text-[12px] text-[10px]">{message}</p>
      </div>
    </motion.div>
  );
}
