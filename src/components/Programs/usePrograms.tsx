"use client";
import { useState } from "react";

const usePrograms = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // When an item is clicked, update the state.
  const handleItemClick = (id: number) => {
    // Toggle behavior: close if the same item is clicked; otherwise open the new item.
    setExpandedId((prevId) => (prevId === id ? null : id));
    console.log("Collapse item clicked:", id);
  };

  return {
    expandedId,
    handleItemClick,
  };
};

export default usePrograms;
