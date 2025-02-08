import { TitleEditor } from "../editor/title-editor";

export function SectionTitle() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary md:text-4xl">
        Program Information
      </h1>
      <p className="text-gray-600">Describe Section Title</p>
      <TitleEditor />
    </div>
  );
}
