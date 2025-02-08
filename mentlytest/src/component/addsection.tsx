import { motion } from "framer-motion";

interface Props {
    addSection: () => void;
    disabled: boolean;
  }
  
  export function AddSectionButton({ addSection, disabled }: Props) {
    return (
      <motion.button
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.99 }}
        onClick={addSection}
        disabled={disabled}
        className="w-full mt-4 py-4 border-2  border-black dark:border-white rounded-xl text-gray-600 dark:text-foreground  hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 transition-all"
      >
        <span className="flex items-center justify-center gap-2">
          <span className="text-lg font-bold">+</span>
          <span className="font-bold">Add new section</span>
        </span>
        <div className="text-sm text-gray-400 mt-1">
          (maximum number of sections to add is 3)
        </div>
      </motion.button>
    );
  }
  