"use client";
import { useEditor, EditorContent } from "@tiptap/react"
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from "@tiptap/starter-kit"
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TiptapImage from '@tiptap/extension-image'
import Image from "next/image";
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Link from "@tiptap/extension-link"
import { useState } from "react"
import { Icon } from "@iconify/react";
import { useAppContext } from "../../context/AppContext";

const MenuBar = ({ editor }: { editor: any }) => {
    const [documentType, setDocumentType] = useState("doc")
    const { darktheme } = useAppContext()
    if (!editor) {
        return null
    }

    return (
        <div className="flex items-center border-t-0">
            {/* Document Type Selector */}
            <div className="border border-mentlyBlue rounded-r-md pr-2 relative">
                <div>
                    <Image src={documentType == "doc" ? "/document.png" : "/text.svg"} alt="document-icon" className='absolute z-10 top-[25%] left-[25%]' width={20} height={20} />
                    <Icon icon="icon-park-solid:down-one" width="15" height="15" className={`${darktheme ? "text-white" : "text-mentlyBlue"} absolute top-[30%] left-[65%]`} />
                </div>
                <select
                    onChange={(e) => setDocumentType(e.target.value)}
                    className={`h-8 w-12 text-transparent text-sm border-none focus:outline-none ${darktheme ? "bg-appDeepTextBlue" : "bg-[#FDFDFD]"}`}
                >
                    <option value="doc" className="pl-8  text-mentlyBlue bg-no-repeat hover:bg-appLightBlue bg-left">
                        Document
                    </option>
                    <option value="text" className="pl-8 text-mentlyBlue hover:bg-appLightBlue bg-left">
                        Text
                    </option>
                </select>
            </div>

            <div className="border-b flex border-mentlyBlue rounded-b-md w-full">
                {/* Text Style */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                    <Image src="/text.svg" alt="text-icon" width={15} height={15} />
                </button>

                {/* Basic Formatting */}
                <div className="flex items-center space-x-1">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded font-bold">
                        <Image src="/bold.png" alt="bold-icon" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded italic">
                        <Image src="/italic.png" alt="italic-sign" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded underline">
                        <Image src="/underline.png" alt="underline-sign" width={15} height={15} />
                    </button>
                </div>

                {/* Alignment Options */}
                <div className="flex items-center ">
                    <button
                        onClick={() => editor.chain().focus().setTextAlign("left").run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/textalign-left.png" alt="textalign-left-sign" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/textalign-right.svg" alt="textalign-right-sign" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign("center").run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/textalign-center.png" alt="textalign-center-sign" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/textalign-justifycenter.png" alt="textalign-right-sign" width={15} height={15} />
                    </button>
                </div>


                {/* Task and quotes Options */}
                <div className="flex items-center">
                    <button
                        onClick={() => editor.chain().focus().toggleList("taskList", "taskItem").run()}
                        //    disabled={!editor}
                        className={`${editor.isActive('taskList') ? 'is-active' : ''} h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded`}>
                        <Image src="/task.png" alt="task-list-sign" width={20} height={20} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/quote-up.png" alt="quote-up-sign" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/quote-down.png" alt="quote-down-sign" width={15} height={15} />
                    </button>
                </div>


                {/*gallery, Link  and Math*/}
                <div className="flex items-center space-x-1">
                    <button
                        onClick={() => {
                            const url = window.prompt("Enter URL")
                            if (url) {
                                editor.chain().focus().setLink({ href: url }).run()
                            }
                        }}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/math.png" alt="math" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => {
                            const url = window.prompt("Enter URL")
                            if (url) {
                                editor.chain().focus().setImage({ src: url }).run()
                            }
                        }}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/gallery.png" alt="gallery" width={15} height={15} />
                    </button>
                    <button
                        onClick={() => {
                            const url = window.prompt("Enter URL")
                            if (url) {
                                editor.chain().focus().setLink({ href: url }).run()
                            }
                        }}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                        <Image src="/link.png" alt="link" width={15} height={15} />
                    </button>
                </div>
            </div>

        </div>
    )
}


export function RichTextEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Input Text"
            }),
            Underline,
            TiptapImage,
            TaskList.configure({
                itemTypeName: 'taskItem',
            }),
            TaskItem.configure({
                nested: true,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Link.configure({
                openOnClick: false,
            }),
        ],
        content: ``,
        editorProps: {
            attributes: {
                class: "prose prose-sm max-w-none focus:outline-none min-h-[200px] px-4 py-2",
            },
        },
    })

    return (
        <div className="border border-mentlyBlue rounded-lg overflow-hidden">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            <button className="px-4 py-2 ml-4 mb-3 font-medium text-sm bg-[#A100FF]/10 flex gap-1 text-[#8C00E3] rounded-xl hover:bg-purple-200 transition-colors">
                <Icon icon="mingcute:quill-pen-ai-line" className="w-[20px] h-[20px]" /> <span>Write with May</span>
            </button>

        </div>
    )
}
