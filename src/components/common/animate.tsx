"use client";
import React, { ElementType } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimateProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
  as?: ElementType;
}

const Animate: React.FC<AnimateProps> = ({
  className = "",
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  children,
  as = "div",
}) => {
  const MotionTag = motion[as as keyof typeof motion] as ElementType;
  return (
    <MotionTag
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
};

export default Animate;
