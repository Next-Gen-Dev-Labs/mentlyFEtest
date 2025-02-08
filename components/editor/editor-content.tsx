import { cn } from "@/lib/utils";
import { Editor, EditorContent as TipTapEditorContent } from "@tiptap/react";

interface EditorContentProps {
  editor: Editor | null;
  className?: string;
}

export const EditorContent = ({ editor, className }: EditorContentProps) => {
  return (
    <TipTapEditorContent
      editor={editor}
      className={cn(
        "prose prose-h1:my-1 prose-h2:my-1 prose-h6:my-1 prose-h4:my-1 prose-h5:my-1 prose-h3:my-1 prose-p:my-1 h-full w-full",
        className,
      )}
    />
  );
};
