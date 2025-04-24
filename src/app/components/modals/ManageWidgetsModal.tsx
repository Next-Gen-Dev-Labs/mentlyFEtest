"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useLayoutContext } from "@/app/context/LayoutContext";

interface ManageWidgetsModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ManageWidgetsModal({
  isOpen,
  closeModal,
}: ManageWidgetsModalProps) {
  const { widgets, setWidgets, resetWidgetsToDefault } = useLayoutContext();

  const toggleWidget = (widget: keyof typeof widgets) => {
    setWidgets({
      ...widgets,
      [widget]: !widgets[widget],
    });
  };

  const handleSaveChanges = () => {
    closeModal();
  };

  const widgetOptions = [
    { id: "programs", label: "Programs" },
    { id: "groupCalls", label: "Group Calls" },
    { id: "mentors", label: "Mentors" },
    { id: "recentActivities", label: "Recent Activities" },
    { id: "applications", label: "Application" },
    { id: "earnings", label: "Earnings" },
    { id: "forum", label: "Forum" },
    { id: "programAnalysis", label: "Program Analysis" },
  ];

  const checkVariants = {
    checked: { opacity: 1, scale: 1 },
    unchecked: { opacity: 0, scale: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 h-screen overflow-hidden"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center sm:justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-md h-screen transform overflow-hidden bg-white shadow-xl transition-all flex flex-col">
                <div className="relative flex-grow overflow-y-auto">
                  <div className="px-6 pt-10 pb-8">
                    <button
                      type="button"
                      className="absolute right-6 top-10 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={closeModal}
                      aria-label="Close modal"
                    >
                      <HiXMark className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <Dialog.Title
                      as="h1"
                      className="text-3xl font-bold text-purple-700 mb-2"
                    >
                      Manage Widget
                    </Dialog.Title>

                    <p className="text-gray-600 mb-8">
                      Personalize your dashboard by managing widgets add,
                      remove, or reorder them to fit your workflow.
                    </p>

                    <div className="space-y-2 mb-8">
                      {widgetOptions.map((widget, index) => (
                        <motion.div
                          key={widget.id}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={listItemVariants}
                          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                        >
                          <div className="flex items-center">
                            <HiOutlineMenuAlt4 className="w-5 h-5 mr-3 text-gray-500" />
                            <span className="text-gray-700 font-medium">
                              {widget.label}
                            </span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() =>
                              toggleWidget(widget.id as keyof typeof widgets)
                            }
                            className={`w-6 h-6 rounded flex items-center justify-center focus:outline-none transition-colors duration-200 ${
                              widgets[widget.id as keyof typeof widgets]
                                ? "bg-green-500"
                                : "bg-white border border-gray-300"
                            }`}
                            aria-label={`Toggle ${widget.label}`}
                            aria-pressed={
                              widgets[widget.id as keyof typeof widgets]
                            }
                          >
                            <motion.svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={
                                widgets[widget.id as keyof typeof widgets]
                                  ? "checked"
                                  : "unchecked"
                              }
                              variants={checkVariants}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </motion.svg>
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-gray-100 mt-auto">
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-purple-700 text-white py-3 px-4 rounded font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                      onClick={handleSaveChanges}
                    >
                      Save Changes
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border border-purple-700 text-purple-700 py-3 px-4 rounded font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                      onClick={resetWidgetsToDefault}
                    >
                      Reset to Default
                    </motion.button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
