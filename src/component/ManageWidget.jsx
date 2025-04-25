"use client"

import { useState, useEffect, useRef } from "react"
import { IoClose } from "react-icons/io5"
import { BsList } from "react-icons/bs"
import Image from "next/image"
import upperFrame from "../component/assets/Upper_Frame.svg"

const ManageWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [widgets, setWidgets] = useState([
    { id: 1, name: "Programs", enabled: true },
    { id: 2, name: "Group Calls", enabled: true },
    { id: 3, name: "Mentors", enabled: true },
    { id: 4, name: "Recent Activities", enabled: true },
    { id: 5, name: "Application", enabled: true },
    { id: 6, name: "Earnings", enabled: false },
    { id: 7, name: "Forum", enabled: false },
    { id: 8, name: "Program Analysis", enabled: false },
  ])

  const widgetRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  const toggleWidgetItem = (id) => {
    setWidgets(widgets.map((widget) => (widget.id === id ? { ...widget, enabled: !widget.enabled } : widget)))
  }

  const saveChanges = () => {
    localStorage.setItem("dashboardWidgets", JSON.stringify(widgets))
    setIsOpen(false)
  }

  const resetToDefault = () => {
    const defaultWidgets = widgets.map((widget) => ({
      ...widget,
      enabled: [1, 2, 3, 4, 5].includes(widget.id),
    }))
    setWidgets(defaultWidgets)
  }

  return (
    <>

      <div 
        onClick={toggleWidget}
        className="py-4 flex justify-end gap-3 mr-3 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Manage Widgets"
      >
        <Image src={upperFrame} alt='widget' />
        <p className="font-semibold text-lg text-[#1F0954]">Manage Widget</p>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex sm:justify-end backdrop-blur-sm bg-black/30 transition-all duration-300"
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          <div
            ref={widgetRef}
            className="bg-white w-full max-w-md sm:max-w-sm md:max-w-md mx-auto sm:mx-0 mt-auto sm:mt-0 sm:h-screen rounded-t-lg sm:rounded-none shadow-xl flex flex-col max-h-[90vh] sm:max-h-screen overflow-hidden animate-in slide-in-from-right duration-300"
          >

            <div className="p-4 border-b relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <IoClose className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-purple-600">Manage Widget</h2>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto flex-1">
              <div className="border border-purple-500 rounded-md p-3 mb-6 bg-purple-50 text-sm text-purple-700">
                Personalize your dashboard by managing widgets and sections, or reorder them to fit your workflow.
              </div>

              <div className="space-y-3">
                {widgets.map((widget) => (
                  <div key={widget.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BsList className="text-gray-500" />
                      <span>{widget.name}</span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-sm border flex items-center justify-center cursor-pointer ${
                        widget.enabled ? "bg-green-500 border-green-500" : "border-gray-300"
                      }`}
                      onClick={() => toggleWidgetItem(widget.id)}
                    >
                      {widget.enabled && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t flex gap-3 justify-center sm:justify-end">
              <button
                onClick={saveChanges}
                className="px-4 py-2 bg-purple-600 font-semibold text-white rounded-[0.7rem] hover:bg-purple-700 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={resetToDefault}
                className="px-4 py-2 border font-semibold border-purple-600 text-purple-600 rounded-[0.7rem] hover:bg-purple-50 transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ManageWidget