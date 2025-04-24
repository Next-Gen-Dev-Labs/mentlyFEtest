// components/SlideNav.tsx
"use client";
import { Widget } from "@/types/types";
import { widgets } from "@/utils/data";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface SlideNavProps {
  open: boolean;
  close: () => void;
}

const SlideNav: React.FC<SlideNavProps> = ({ open, close }) => {
  const [widgetStates, setWidgetStates] = React.useState<Widget[]>(widgets);

  const handleCheckboxChange = (id: number) => {
    setWidgetStates((prev) =>
      prev.map((widget) =>
        widget.id === id ? { ...widget, check: !widget.check } : widget
      )
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-[5px] z-40"
            onClick={close}
          />

          {/* Slide panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-[450px] bg-white shadow-md py-10 font-chivo z-50 overflow-y-auto"
          >
            <div className="max-w-[373px] mx-auto">
              {/* Close icon */}
              <div className="w-full border-b border-[#D7D7D7] flex justify-end pb-4">
                <button onClick={close}>
                  <img src="/times.svg" alt="Close" className="w-6 h-6" />
                </button>
              </div>

              {/* Head text */}
              <div className="mt-16">
                <h1 className="text-[32px] font-bold text-blue">
                  Manage Widget
                </h1>
                <p className="text-xs text-[#374557] mt-2">
                  Personalize your dashboard by managing widgets: add, remove,
                  or reorder them to fit your workflow.
                </p>
              </div>

              {/* Widget setting */}
              <div className="grid gap-5 my-10">
                {widgetStates.map((widget) => (
                  <motion.div
                    key={widget.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * widget.id }}
                    className="flex items-center justify-between"
                  >
                    {/* Widget name and icon */}
                    <div className="flex items-center gap-4">
                      <div>
                        <img
                          src="/four-outline.svg"
                          alt={widget.label}
                          className="w-5 h-5"
                        />
                      </div>
                      <p className="text-sm font-bold text-[#4F4F4F]">
                        {widget.label}
                      </p>
                    </div>

                    {/* Custom checkbox */}
                    <label className="relative flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={widget.check}
                        onChange={() => handleCheckboxChange(widget.id)}
                        className="appearance-none w-4.5 aspect-square border-2 border-black/50 rounded checked:bg-[#07C500] checked:border-[#07C500] focus:outline-none"
                      />
                      {widget.check && (
                        <svg
                          className="absolute w-4 h-4 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </label>
                  </motion.div>
                ))}
              </div>

              {/* buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-7 justify-between"
              >
                <button className="bg-blue border-blue btn-md text-white">
                  Save Changes
                </button>
                <button className="bg-white border-blue btn-md text-blue">
                  Reset to Default
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlideNav;
