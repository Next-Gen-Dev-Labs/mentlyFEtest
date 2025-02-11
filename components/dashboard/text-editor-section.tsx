import { Info } from "lucide-react";
import TextEditor from "./text-editor";

const TextEditorSection = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col gap-y-2 lg:gap-y-3 ${className}`}>
      <TextEditor />
      <div className="w-full flex item-center gap-2 lg:h-[64px] p-4 bg-muted-foreground rounded-[5px]">
        <Info className="text-info size-6 w-2/12 lg:w-1/12" />
        <p className="font-chivo font-normal text-xs text-muted">
          Provide a clear and concise description/information of your program.
          This can include objectives, goals, necessary resources, or any
          specific instructions.
        </p>
      </div>
    </div>
  );
};

export default TextEditorSection;
