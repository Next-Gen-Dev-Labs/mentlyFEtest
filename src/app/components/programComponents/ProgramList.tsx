"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import Dropdown from "../ui/DropdownMenu"

interface Section {
    id: number
    title: string
    isOpen: boolean
}

const ProgramList = () => {
    const [sections, setSections] = useState<Section[]>([
        { id: 1, title: "Program Information Text 1", isOpen: false },
        { id: 2, title: "Program Information Text 2", isOpen: false },
    ])

    const toggleSection = (id: number) => {
        setSections(sections.map((section) => (section.id === id ? { ...section, isOpen: !section.isOpen } : section)))
    }

    const handleEdit = (id: number) => {
        console.log("Edit section", id)
    }

    const handleDelete = (id: number) => {
        setSections(sections.filter((section) => section.id !== id))
    }

    return (
        <div className="w-full py-4 space-y-4">
            {/* Sections */}
            {sections.map((section) => (
                <div key={section.id} className="bg-[#F1F1F1] rounded-lg border border-[#C2C2C2] shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        {section.title}
                        <div
                            onClick={() => toggleSection(section.id)}
                            className="flex items-center gap-2 text-[#1F1147] font-medium text-sm hover:opacity-75 transition-opacity"
                        >
                            {section.isOpen ? <Icon icon="mingcute:down-line" className="text-[#777795]" width="24" height="24" /> : <Icon icon="mingcute:up-line" className="text-[#777795]" width="24" height="24" />}

                            <Dropdown
                                icon="ph:dots-three-outline-vertical-thin"
                                color="#777795"
                                hover="violet3"
                                menu={["Edit", "Delete"]} />
                        </div>
                    </div>

                    {section.isOpen && (
                        <div className="px-4 pb-4 text-[#909397]">
                            {/* Content would go here */}
                            <p>Section content for {section.title}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProgramList;