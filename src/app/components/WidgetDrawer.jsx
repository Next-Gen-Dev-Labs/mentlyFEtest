'use client'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useGlobalState } from "../context";

const initialWidgets = [
    { name: 'Programs', checked: true },
    { name: 'Group Calls', checked: true },
    { name: 'Mentors', checked: true },
    { name: 'Recent Activities', checked: true },
    { name: 'Application', checked: true },
    { name: 'Earnings', checked: false },
    { name: 'Forum', checked: false },
    { name: 'Program Analysis', checked: false },
]

export default function ManageWidgetsDrawer() {

  const [widgets, setWidgets] = useState(initialWidgets)
    const {showManageWidget, setShowManageWidget} = useGlobalState()

  const toggleWidget = (index) => {
    const updated = [...widgets]
    updated[index].checked = !updated[index].checked
    setWidgets(updated)
  }

  const resetToDefault = () => {
    setWidgets(initialWidgets)
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 p-6 z-50 transition-transform duration-300 shadow-lg border-l border-gray-200 dark:border-gray-700
        ${showManageWidget ? 'translate-x-0': 'translate-x-full' } font-serif`}
    >
      <div className="flex mb-0 self-end place-content-end px-4 pt-1">
        
        <button className="cursor-pointer" onClick={()=>{setShowManageWidget(!showManageWidget)}}>
          <IoMdClose className="text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl" />
        </button>
      </div>
      <div className='border-b-2 border-gray-200 mt-1'>

      </div>
      <div className='mt-10'>
        <h2 className="text-2xl font-bold text-purple-600">Manage Widget</h2>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
        Personalize your dashboard by managing widgets: add, remove, or reorder them to fit your workflow.
      </p>
      <ul className="space-y-3 mb-6 mt-10">
        {widgets.map((widget, idx) => (
          <li key={widget.name} className="flex items-center justify-between mt-6">
            <div className="flex space-x-7">
                <CiMenuBurger/>
                <span className="text-gray-800 dark:text-white">{widget.name}</span>
            </div>
            <input
              type="checkbox"
              checked={widget.checked}
              onChange={() => toggleWidget(idx)}
              className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-between gap-2 mt-4">
        <button
          className="bg-purple-600 text-white px-4 py-2
          cursor-pointer 
          rounded-md hover:bg-purple-700 transition"
          onClick={() => alert('Changes saved!')}
        >
          Save Changes
        </button>
        
        <button
        onClick={()=>{resetToDefault()}} 
        className="relative inline-flex items-center justify-center cursor-pointer 
        p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Reset to Default
            </span>
        </button>
      </div>
    </div>
  )
}
