import { motion } from "framer-motion";
import React from "react";
import { ProgramForm } from "../leftsection/program-form";
import { ChevronLeft, Settings, Share2 } from "lucide-react";
import SettingActionButtons from "../button/settingActionButton";

interface ProgramInfo {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  description: string;
}
const Leftsection: React.FC<{ programInfo: ProgramInfo; onSave: () => void }> = ({ onSave }) => {

  return (
    <div className=" space-y-6 py-4 lg:px-6 px-4 lg:pb-0 pb-10 font-[Chivo] bg-gray-100 h-full   dark:bg-background ">
      <nav className="flex items-center justify-between ">
        <motion.button
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.98 }}
          className="text-[#F0C074] hover:text-orange-600 flex items-center gap-2  rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="lg:text-[14px] font-medium font-sm text-[12px]">Back to Home</span>
        </motion.button>
        <SettingActionButtons />
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="lg:text-3xl text-lg font-bold text-gray-800 dark:text-foreground ">
          Program Information
        </h1>
        <p className="text-gray-600 dark:text-foreground text-sm lg-text-md">
          Describe Section Title
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className=""
      >
        <ProgramForm onSave={onSave}/>
      </motion.div>
    </div>
  );
};

export default Leftsection;
