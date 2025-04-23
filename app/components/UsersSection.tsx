import { SectionHeader } from "@/app/components/SectionHeader";
import { UserChart } from "@/app/components/UserChart";
import { UserStats } from "@/app/components/UserStats";

export function UsersSection() {
  return (
    <section
      aria-label="Users Section"
      className="rounded-lg shadow-sm bg-[#F9F7FF] pb-6"
    >
      <SectionHeader
        title="Users"
        showSeeAll={false}
        showMoreOptions={false}
        showJustify={false}
      >
        <select
          name="filter"
          aria-label="Filter"
          className="text-[#595564] text-[12px] w-[78px] h-[36px] rounded-[4px] border border-[#E1E7EC]"
        >
          <option value="All">All</option>
          <option value="Some">Some</option>
        </select>
      </SectionHeader>

      <div className="flex gap-2 flex-col xl:flex-row items-center">
        <UserChart />
        <UserStats />
      </div>
    </section>
  );
}
