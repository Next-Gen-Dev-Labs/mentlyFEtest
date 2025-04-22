import { motion } from "framer-motion";
interface SectionDropdownProps {
  sectionId: string | number;
  isOpen: boolean;
  deleteSection: (id: string | number) => void;
  setDropdownSection: (id: string | number | null) => void;
}
const SectionDropdown: React.FC<SectionDropdownProps> = ({
  sectionId,
  deleteSection,
  setDropdownSection,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className=" bg-white dark:bg-black  border border-gray-200 shadow-md rounded-md p-2 w-fit "
    >
      <button
        className="flex items-center dark:text-white  gap-2 text-gray-700 hover:bg-gray-100 w-full py-1 px-2 rounded-md"
        onClick={() => {
          setDropdownSection(null);
        }}
      >
        Edit
      </button>
      <button
        className="flex items-center gap-2 text-red-500 hover:bg-red-100 w-full py-1 px-2 rounded-md"
        onClick={() => {
          deleteSection(sectionId);
          setDropdownSection(null);
        }}
      >
        Delete
      </button>
    </motion.div>
  );
};
export default SectionDropdown;
