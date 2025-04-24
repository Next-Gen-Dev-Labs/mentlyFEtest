import ProgramCard from "./ProgramCard";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";
import UserChart from "./UserChart";

export default function Users() {
  return (
    <section className=" mt-4 shadow p-2 rounded">
      <div className="flex justify-between border-b border-[#E1E7EC] p-2">
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
