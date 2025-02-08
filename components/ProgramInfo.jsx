import ProgramEditor from "./ProgramEditor";
import ProgramPreview from "./ProgramPreview";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white p-6 mt-16">
      <div className="grid md:grid-cols-2 gap-8">
        <ProgramEditor />
        <ProgramPreview />
      </div>
    </div>
  );
}
