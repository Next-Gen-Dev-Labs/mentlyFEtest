import { IoCopyOutline } from "react-icons/io5";
import { stripHtml } from "@/app/utils";

interface CopyButtonProps {
  editor: any;
  showSuccess?: () => void;
}

export const CopyButton = ({ editor, showSuccess }: CopyButtonProps) => {
  const copyTextOnly = async () => {
    if (editor) {
      const htmlContent = editor.getHTML();
      const textContent = stripHtml(htmlContent);

      try {
        await navigator.clipboard.writeText(textContent);
        if (showSuccess) {
          showSuccess();
        }
      } catch (err) {
        console.error("Failed to copy text:", err);
      }
    }
  };

  return (
    <button
      onClick={copyTextOnly}
      className="hover:opacity-80 transition-opacity p-2 rounded-full
               hover:bg-gray-100 dark:hover:bg-gray-800"
      title="Copy text content"
    >
      <IoCopyOutline className="w-5 h-5 text-[#C2C2C2]" />
    </button>
  );
};
