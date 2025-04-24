import GroupCallsCard from "./GroupCallsCard";
import ProgramCard from "./ProgramCard";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";

export default function GroupCalls() {
  return (
    <section className="groupcall_container bg-[#FFFFFF]">
      <div className="groupcall_head">
        <SectionRightHead title="Group Calls" />
        <SectionLeftHead />
      </div>
      <div>
        <GroupCallsCard />
      </div>
    </section>
  );
}
