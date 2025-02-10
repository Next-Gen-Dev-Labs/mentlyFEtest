"use client";
import { useState } from "react";

const usePrograms = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [headerSize, setHeaderSize] = useState<
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
  >("text-sm");

  // When an item is clicked, update the state.
  const handleItemClick = (id: number) => {
    // Toggle behavior: close if the same item is clicked; otherwise open the new item.
    setExpandedId((prevId) => (prevId === id ? null : id));
    console.log("Collapse item clicked:", id);
  };

  return {
    expandedId,
    handleItemClick,
    isModalOpen,
    setIsModalOpen,
    headerSize,
    setHeaderSize,
  };
};

export default usePrograms;
