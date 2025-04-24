import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import WidgetGroup from "./widget-group";

interface SideModalProps {
  setModalOpen: Function;
  isModalOpen: boolean;
}

export default function SideModal({
  setModalOpen,
  isModalOpen,
}: SideModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-md z-100"
        onClick={() => setModalOpen(false)}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-[450px] bg-white shadow-lg z-500 overflow-y-auto scrollbar-thin"
      >
        <div className="p-8 px-10">
          <div className="flex justify-end pb-2 mb-9 border-b-1 border-b-[#8D8D8D]">
            <CloseIcon
              className="cursor-pointer text-lg text-[#8D8D8D]"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <h2 className="text-2xl text-[#6F01D0] font-semibold mb-4">
            Manage Widget
          </h2>
          <p className="text-[#374557] text-sm mb-4">
            Personalize your dashboard by managing widgets add, remove, or
            reorder them to fit your workflow.
          </p>
          <WidgetGroup />
          <div className="flex flex-row justify-between px-3">
            <button
              className="bg-[#340260] px-8 py-3 cursor-pointer text-white font-semibold text-sm rounded-lg"
              onClick={() => setModalOpen(false)}
            >
              Save Changes
            </button>
            <button
              className="border-[#340260] cursor-pointer border-1 px-6 py-3 text-[#340260] font-semibold text-sm rounded-lg"
              onClick={() => setModalOpen(false)}
            >
              Reset to Default
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
