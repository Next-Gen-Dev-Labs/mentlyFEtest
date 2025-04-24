"use client";

import { useEffect, useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const ManageWidgets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [widgets, setWidgets] = useState([
    { id: "programs", label: "Programs", enabled: true },
    { id: "groupCalls", label: "Group Calls", enabled: true },
    { id: "mentors", label: "Mentors", enabled: true },
    { id: "recentActivities", label: "Recent Activities", enabled: true },
    { id: "applications", label: "Application", enabled: true },
    { id: "earnings", label: "Earnings", enabled: false },
    { id: "forum", label: "Forum", enabled: false },
    { id: "programAnalysis", label: "Program Analysis", enabled: false },
  ]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (id) => {
    setWidgets((prev) =>
      prev.map((widget) =>
        widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
      )
    );
  };
  useEffect(() => {
    localStorage.setItem("dashboard-widgets", JSON.stringify(widgets));
  }, [widgets]);

  const resetToDefault = () => {
    setWidgets([
      { id: "Programs", enabled: true },
      { id: "Group Calls", enabled: true },
      { id: "Mentors", enabled: true },
      { id: "Recent Activities", enabled: true },
      { id: "Application", enabled: true },
      { id: "Earnings", enabled: false },
      { id: "Forum", enabled: false },
      { id: "Program Analysis", enabled: false },
    ]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setWidgets((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      {/* Manage Widgets Button */}
      <div className="flex justify-end gap-2 items-center my-2"  onClick={toggleSidebar}>
        <Squares2X2Icon className="w-5 h-5 text-black hover:text-purple-200" />

        <button
         
          className="flex items-center font-semibold gap-2 px-4 py-2 text-sm  text-black "
        >
          Manage Widgets
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-purple-700">Manage Widget</h2>
          <button onClick={toggleSidebar}>
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-5 text-sm">
          <p className="text-gray-500 mb-6">
            Personalize your dashboard by managing widgets add, remove, or
            reorder them to fit your workflow.
          </p>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={widgets.map((w) => w.id)}
              strategy={verticalListSortingStrategy}
            >
              <ul className="space-y-4">
                {widgets.map((widget) => (
                  <SortableItem
                    key={widget.id}
                    id={widget.id}
                    widget={widget}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-purple-600 text-white py-2 rounded-md text-sm hover:bg-purple-700 transition">
              Save Changes
            </button>
            <button
              onClick={resetToDefault}
              className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-md text-sm hover:bg-purple-50 transition"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWidgets;

// Sortable Item component
const SortableItem = ({ id, widget, handleCheckboxChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Bars3Icon className="w-5 h-5 text-gray-400 cursor-move" />
        <span className="text-sm text-gray-800">{id}</span>
      </div>
      <input
        type="checkbox"
        checked={widget.enabled}
        onChange={() => handleCheckboxChange(id)}
        className="w-5 h-5 accent-green-500"
      />
    </li>
  );
};
