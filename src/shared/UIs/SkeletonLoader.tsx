"use client";
import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`
        bg-gray-300 
        animate-pulse 
        rounded 
        w-full 
        h-10 
        ${className}
      `}
    />
  );
};

export default Skeleton;
