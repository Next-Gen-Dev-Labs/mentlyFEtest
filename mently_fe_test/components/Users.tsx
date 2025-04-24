import ProgramCard from "./ProgramCard";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";
import UserChart from "./UserChart";

export default function Users() {
  return (
    <section className="w-full shadow p-4 rounded">
      <div className="flex justify-between">
        <SectionRightHead title="Users" />
        <select className="border border-[#E1E7EC] text-[#595564] outline-none">
          <option>All</option>
          <option>students</option>
        </select>
      </div>
      <div>
        <UserChart />
      </div>
    </section>
  );
}
