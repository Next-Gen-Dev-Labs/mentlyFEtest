"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

interface WidgetState {
  programs: boolean;
  groupCalls: boolean;
  mentors: boolean;
  recentActivities: boolean;
  applications: boolean;
  earnings: boolean;
  forum: boolean;
  programAnalysis: boolean;
}

interface ManageWidgetsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  widgets: WidgetState;
  setWidgets: (widgets: WidgetState) => void;
}

export default function ManageWidgetsModal({
  isOpen,
  closeModal,
  widgets,
  setWidgets,
}: ManageWidgetsModalProps) {
  const toggleWidget = (widget: keyof WidgetState) => {
    setWidgets({ ...widgets, [widget]: !widgets[widget] });
  };

  const resetToDefault = () => {
    setWidgets({
      programs: true,
      groupCalls: true,
      mentors: true,
      recentActivities: true,
      applications: true,
      earnings: false,
      forum: false,
      programAnalysis: false,
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-end p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold text-purple-900"
                  >
                    Manage Widget
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={closeModal}
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6">
                  Personalize your dashboard by managing widgets add, remove, or
                  reorder them to fit your workflow.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { id: "programs", label: "Programs" },
                    { id: "groupCalls", label: "Group Calls" },
                    { id: "mentors", label: "Mentors" },
                    { id: "recentActivities", label: "Recent Activities" },
                    { id: "applications", label: "Application" },
                    { id: "earnings", label: "Earnings" },
                    { id: "forum", label: "Forum" },
                    { id: "programAnalysis", label: "Program Analysis" },
                  ].map((widget) => (
                    <div
                      key={widget.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                        <span>{widget.label}</span>
                      </div>
                      <button
                        type="button"
                        className={`w-6 h-6 rounded ${
                          widgets[widget.id as keyof WidgetState]
                            ? "bg-green-500"
                            : "bg-white border border-gray-300"
                        }`}
                        onClick={() =>
                          toggleWidget(widget.id as keyof WidgetState)
                        }
                        aria-label={`Toggle ${widget.label}`}
                      >
                        {widgets[widget.id as keyof WidgetState] && (
                          <svg
                            className="w-4 h-4 mx-auto text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                    onClick={closeModal}
                  >
                    Save Changes
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded hover:bg-purple-50"
                    onClick={resetToDefault}
                  >
                    Reset to Default
                  </motion.button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
