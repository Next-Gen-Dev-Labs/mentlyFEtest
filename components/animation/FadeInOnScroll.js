// components/FadeInOnScroll.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeInOnScroll({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
