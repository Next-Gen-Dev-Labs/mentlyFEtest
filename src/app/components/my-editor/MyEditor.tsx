'use client';

import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import NextImage from 'next/image';

// We'll define these two files next:
import { MyEditorToolbar } from './MyEditorToolbar';
import { MyEditorContent } from './MyEditorContent';

// This component sets up the Tiptap editor and renders a custom toolbar + content area.
export function MyEditor() {
  // 1) Create your Tiptap editor instance with desired extensions
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto',
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: '| Input Text',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'm-5 focus:outline-none',
      },
    },
    content: '', // or some default text
  });

  // 2) Render the editor UI
  return (
    <div className="mx-auto w-full">
      {/* A container with a custom border or styling */}
      <div className="rounded-[5px] border border-mentlyBlue bg-white shadow-sm h-[10rem]">
        {/* We'll define MyEditorToolbar next */}
        <MyEditorToolbar editor={editor} />

        {/* The editable area */}
        <div className="border-t">
          {/* We'll define MyEditorContent next */}
          <MyEditorContent editor={editor} className="h-full" />
        </div>

        {/* Example button below the editor */}
        <button className="md:m-4 inline-flex items-center rounded-md bg-[#A100FF] bg-opacity-[13%] px-4 py-2 text-[10px] font-[500] text-[#8C00E3] transition-colors w-[8rem] h-[2rem] text-nowrap">
          <span className="mr-2">
            <NextImage
              src="/icons/quil.png"
              alt="quil"
              width={10}
              height={10}
            />
          </span>
          Write with May
        </button>
      </div>
      <span className="sr-only">editor</span>
    </div>
  );
}
