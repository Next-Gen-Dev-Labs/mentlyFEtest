'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Widget, ManageWidgetsDrawerProps } from '@/app/types';



const initialWidgets: Widget[] = [
  { name: 'Programs', visible: true },
  { name: 'Group Calls', visible: true },
  { name: 'Mentors', visible: true },
  { name: 'Recent Activities', visible: true },
  { name: 'Application', visible: true },
  { name: 'Earnings', visible: false },
  { name: 'Forum', visible: false },
  { name: 'Program Analysis', visible: false },
];

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
};

export default function ManageWidgetsDrawer({
  isOpen,
  onClose,
  onSave,
  onReset,
}: ManageWidgetsDrawerProps) {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);

  const handleToggleWidget = (index: number) => {
    const updatedWidgets = [...widgets];
    updatedWidgets[index] = {
      ...updatedWidgets[index],
      visible: !updatedWidgets[index].visible,
    };
    setWidgets(updatedWidgets);
  };

  const handleSave = () => {
    onSave(widgets);
    onClose();
  };

  const handleReset = () => {
    setWidgets(initialWidgets);
    onReset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-testid="overlay"
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-fit md:w-[450px] bg-white shadow-lg z-50 p-6 font-chivo"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#1F0954]">
                Manage Widget
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
                aria-label="Close drawer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Personalize your dashboard by managing widgets add, remove, or
              reorder them to fit your workflow.
            </p>

            <div className="space-y-4">
              {widgets.map((widget, index) => (
                <div
                  key={widget.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/menu-ic.svg"
                      alt="Drag"
                      width={16}
                      height={16}
                      className="opacity-50"
                    />
                    <span className="text-sm text-center font-medium text-gray-800">
                      {widget.name}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={widget.visible}
                    onChange={() => handleToggleWidget(index)}
                    className="custom-checkbox w-5 h-5 border-gray-300 rounded focus:ring-green-500"
                    aria-label={`Toggle visibility for ${widget.name}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2 w-full">
              <button
                onClick={handleSave}
                className="w-fit px-4 py-2 bg-[#6F01D0] text-white rounded-md hover:bg-[#5A01A8] transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={handleReset}
                className="w-fit bg-white border border-[#6F01D0] text-[#6F01D0] text-[10px] sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Reset to Default
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
