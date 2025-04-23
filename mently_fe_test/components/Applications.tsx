import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";

export default function Applications() {
  return (
    <section className="w-[30%] shadow p-4 rounded">
      <div className="flex justify-between">
        <SectionRightHead title="Applications" />
        <SectionLeftHead />
      </div>
    </section>
  );
}
