'use client';

import type { Editor } from '@tiptap/react';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ImageIcon,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Underline,
} from 'lucide-react';
import Image from 'next/image';

interface MyEditorToolbarProps {
  editor: Editor | null;
}

/**
 * MyEditorToolbar is the custom menu bar for the MyEditor component.
 * It gives access to formatting commands: bold, italic, underline,
 * alignment, lists, blockquote, image insertion, link insertion, etc.
 */
export function MyEditorToolbar({ editor }: MyEditorToolbarProps) {
  // If the editor is not instantiated yet, return nothing
  if (!editor) {
    return null;
  }

  // Example: toggling a heading level
  // If you want dynamic heading levels (H1, H2, etc.),
  // you can replicate the logic from your original code
  //   const toggleHeading = (level: number) => {
  //     // @ts-expect-error: Tiptap's heading types can be behind
  //     editor.chain().focus().toggleHeading({ level }).run();
  //   };

  const insertImage = () => {
    const url = prompt('Enter the image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const insertLink = () => {
    const url = prompt('Enter the link URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between border-b border-mentlyBlue">
      {/* Example "File" button with dummy chevron icon */}
      <div className="relative">
        <button className="gap-1 px-2 py-1 border border-mentlyBlue rounded hover:bg-gray-100 flex items-center w-[4rem]">
          <Image src="/icons/document.png" alt="doc" width={24} height={24} />
          <Image
            src="/icons/downanglesmall.png"
            alt="down"
            width={11}
            height={5}
          />
        </button>
        {/* Example: you could show a dropdown here with your "New/Open/Save" logic */}
      </div>

      {/* Basic Heading Toggles */}

      {/* Bold */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('bold') ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-[14px] w-[14px]" />
      </button>

      {/* Italic */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('italic') ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-[14px] w-[14px]" />
      </button>

      {/* Underline */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('underline') ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline className="h-[14px] w-[14px]" />
      </button>

      {/* Alignments */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <AlignLeft className="h-[14px] w-[14px]" />
      </button>
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <AlignCenter className="h-[14px] w-[14px]" />
      </button>
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <AlignRight className="h-[14px] w-[14px]" />
      </button>
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <AlignJustify className="h-[14px] w-[14px]" />
      </button>

      {/* Lists */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('bulletList') ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-[14px] w-[14px]" />
      </button>
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('orderedList') ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-[14px] w-[14px]" />
      </button>

      {/* Blockquote */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('blockquote') ? 'bg-gray-200' : ''
        }`}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-[14px] w-[14px]" />
      </button>

      {/* Image Insertion */}
      <button className="px-1 py-1 hover:bg-gray-100" onClick={insertImage}>
        <ImageIcon className="h-[14px] w-[14px]" />
      </button>

      {/* Link Insertion */}
      <button
        className={`px-1 py-1 hover:bg-gray-100 ${
          editor.isActive('link') ? 'bg-gray-200' : ''
        }`}
        onClick={insertLink}
      >
        <Link className="h-[14px] w-[14px]" />
      </button>
    </div>
  );
}
