"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0.8, y: 5 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.8, y: 5 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
