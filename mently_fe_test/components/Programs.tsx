import ProgramCard from "./ProgramCard";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";

export default function Programs() {
  return (
    <section className="w-[30%] shadow p-4 rounded">
      <div>
        <div className="flex justify-between">
          <SectionRightHead title="Programs" />
          <SectionLeftHead />
        </div>
        <div className="flex items-center justify-end gap-2 p-2">
          <p className="text-[#918C9C] text-[12px] font-bold">Filter</p>
          <select className="border border-[#E1E7EC] text-[#595564] outline-none">
            <option>Active</option>
            <option>Unactive</option>
          </select>
        </div>
      </div>

      <div>
        <ProgramCard />
      </div>
    </section>
  );
}
