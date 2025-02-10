"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MoreVertical, Edit, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ["Program Information Text 1", "Program Information Text 2"];

export default function CustomAccordion() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      {sections.map((item, index) => (
        <div key={index} className="relative mb-4"> {/* Added margin-bottom to space out accordions */}
          <Accordion type="single" collapsible className="mt-4"> {/* Added margin-top */}
            <AccordionItem value={`item-${index}`}>
              <Card className="flex justify-between items-center px-4 py-3 border border-gray-300 rounded-lg">
                {/* Trigger without extra arrow icon */}
                <AccordionTrigger className="flex-1 text-[#1F0954] font-medium">{item}</AccordionTrigger>

                {/* Right section with MoreVertical icon */}
                <div className="flex items-center gap-3">
                  <ChevronDown />
                  <button onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                    <MoreVertical className="cursor-pointer text-gray-600" size={18} />
                  </button>
                </div>
              </Card>
              <AccordionContent className="p-4 text-gray-600">
                This is the content for {item}.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {openDropdown === index && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute right-2 top-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 text-sm w-[120px]"
            >
              <Button variant="ghost" className="w-full flex justify-start text-gray-700 hover:bg-gray-100">
                <Edit size={14} className="mr-2" /> Edit
              </Button>
              <Button
                variant="ghost"
                className="w-full flex justify-start text-red-600 hover:bg-gray-100"
                onClick={() => console.log("Deleted", index)}
              >
                <Trash2 size={14} className="mr-2" /> Delete
              </Button>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
