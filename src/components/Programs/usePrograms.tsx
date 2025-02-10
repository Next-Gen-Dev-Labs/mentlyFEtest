"use client";
import { useEffect, useState } from "react";

const usePrograms = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return {
    expandedId,
    handleItemClick,
    isModalOpen,
    setIsModalOpen,
    headerSize,
    setHeaderSize,
    isLoading,
    setIsLoading,
  };
};

export default usePrograms;
