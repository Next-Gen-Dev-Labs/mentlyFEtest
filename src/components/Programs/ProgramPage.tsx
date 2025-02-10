"use client";
import React from "react";
import ProgramInformation from "./ProgramInformation";
import MentorProgram from "./MentorProgram";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import Skeleton from "@/shared/UIs/SkeletonLoader";
import usePrograms from "./usePrograms";

const ProgramPage = () => {
  const { isLoading } = usePrograms();
  const isLargeScreen = useScreenSize();

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFFF] gap-4 p-4">
        <Skeleton className="h-20" />
        <Skeleton className="h-20" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFFF]">
      <ProgramInformation />
      {isLargeScreen && <MentorProgram />}
    </div>
  );
};

export default ProgramPage;
