import type React from "react";
import { useState } from "react";

interface AccordionProps {
  items: {
    id: string;
    header: React.ReactNode;
    content: React.ReactNode;
  }[];
}

function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.id} className="mb-2 border rounded-lg bg-gray-50">
          <button
            className="w-full px-6 py-4 text-left focus:outline-none"
            onClick={() => toggleItem(item.id)}
          >
            {item.header}
          </button>
          {openItems.includes(item.id) && (
            <div className="px-6 pb-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
