"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";

import SectionDropdown from "./dropdown/sectiondropdown";
import { InfoBox } from "./infoBox";
import { SectionTitleInput } from "./sectionTitleInpute";
import { TextEditor } from "./textEditor";
import { AddSectionButton } from "./addsection";
import { PublishedToggle } from "./publishtoggle";

interface Section {
  id: number;
  title: string;
  content: string;
}

export function ProgramForm({ onSave }: { onSave: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownSection, setDropdownSection] = useState<
    string | number | null
  >(null);

  const [sections, setSections] = useState<Section[]>([
    { id: 1, title: "Program Information Text 1", content: "" },
    { id: 2, title: "Program Information Text 2", content: "" },
  ]);
  const [showPublished, setShowPublished] = useState(false);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const addSection = () => {
    if (sections.length < 3) {
      setSections([
        ...sections,
        {
          id: sections.length + 1,
          title: `Program Information Text ${sections.length + 1}`,
          content: "",
        },
      ]);
    }
  };

  const deleteSection = (id: string | number) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-2xl mx-auto "
    >
      <div className=" ">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="  hover:shadow-md transition-shadow "
        >
          <SectionTitleInput />
          <InfoBox
            message="Provide your prefered title for this section i.e What's in this
                Program for you?"
          />

          <TextEditor />

          <InfoBox
            message="Provide a clear and concise description/information of your
                program. This can include objectives, goals, necessary
                resources, or any specific instructions."
          />
        </motion.div>

        <AddSectionButton addSection={addSection} disabled={false} />

        <PublishedToggle checked={showPublished} onChange={setShowPublished} />

        <AnimatePresence>
          {sections.map((section) => (
            <div className="relative">
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className={`border dark:border-foreground  rounded-xl overflow-hidden mb-2 relative ${
                  activeSection === section.id
                    ? "ring-2 ring-purple-500/20"
                    : ""
                }`}
              >
                <div
                  className=" p-2 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                  onMouseEnter={() => setActiveSection(section.id)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <span className="font-bold text-md text-[#1F0954] dark:text-purple-900  ">
                    {section.title}
                  </span>
                  <div className="flex items-center gap-1">
                    <motion.button
                      className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedSection === section.id ? (
                        <ChevronDown className="w-5 h-5 text-[#1F0954] dark:text-purple-900 " />
                      ) : (
                        <ChevronUp className="w-5 h-5 text-[#1F0954] dark:text-purple-900 " />
                      )}
                    </motion.button>
                    <motion.button
                      className="text-gray-400 hover:text-[#1F0954] p-1 hover:bg-[#1F0954]/10 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                        setDropdownSection(
                          dropdownSection === section.id ? null : section.id
                        );
                      }}
                    >
                      <MoreVertical className="w-5 h-5 text-[#1F0954] dark:text-purple-900 " />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              {dropdownSection === section.id && (
                <div className="absolute right-0 z-10  ">
                  <SectionDropdown
                    isOpen={isOpen}
                    sectionId={dropdownSection}
                    deleteSection={deleteSection}
                    setDropdownSection={setDropdownSection}
                  />
                </div>
              )}
            </div>
          ))}
        </AnimatePresence>

        <div className="flex justify-between pt-6">
          <motion.button
            whileHover={{ scale: 1.02, x: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 dark:text-white  text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Go Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSave}
            className="lg:px-6 lg:py-2.5 px-4 py-1.5 bg-purple-900 text-white rounded-lg hover:bg-purple-800 shadow-sm hover:shadow transition-all text-sm lg:text-md"
          >
            Save & Proceed
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
