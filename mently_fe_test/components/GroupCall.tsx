import GroupCallsCard from "./GroupCallsCard";
import ProgramCard from "./ProgramCard";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";

export default function GroupCalls() {
  return (
    <section className="shadow overflow-hidden p-4 rounded">
      <div className="flex justify-between">
        <SectionRightHead title="Group Calls" />
        <SectionLeftHead />
      </div>
      <div className="flex">
        <GroupCallsCard />
        <GroupCallsCard />
        <GroupCallsCard />
      </div>
    </section>
  );
}
