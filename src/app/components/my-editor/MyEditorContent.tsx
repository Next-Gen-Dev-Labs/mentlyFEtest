'use client';

import * as React from 'react';
import { EditorContent as TiptapEditorContent, Editor } from '@tiptap/react';
import { cn } from '@/app/utils'; // If you have a local utility for merging class names

interface MyEditorContentProps {
  editor: Editor | null;
  className?: string;
}

/**
 * A thin wrapper around Tiptap's EditorContent
 * that lets us apply consistent styling and props.
 */
export function MyEditorContent({ editor, className }: MyEditorContentProps) {
  if (!editor) {
    return null; // Editor not initialized yet
  }

  return (
    <TiptapEditorContent
      editor={editor}
      className={cn(
        // Example classes below:
        'prose w-full',
        // If you use a typical 'prose' class from Tailwind's typography plugin,
        // you can also add or override heading/spacing classes here.
        className
      )}
    />
  );
}
