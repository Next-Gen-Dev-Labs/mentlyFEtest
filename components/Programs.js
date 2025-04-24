"use client";
import Image from "next/image";
import SectionHeader from "../components/Header/SectionHeader";
import FilterHeaderWithDropdown from "../components/Header/FilterHeading";
import ProgramCard2 from "../components/Card/ProgramCard2";
import FundamentalsCard from "../components/Card/FundamentalCard";

// const programs = [
//   {
//     title: "Fundamentals of User interface & Experience",
//     description:
//       "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
//     mentorName: "Jane Doe",
//     image: "/asset/program1.png",
//     type: "Bootcamp",
//     color: "blue",
//     tcolor: "blue",
//   },
//   {
//     title: "Colour Hack Practical Group Call",
//     description:
//       "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
//     mentorName: "Jane Doe",
//     image: "/asset/program2.png",
//     type: "Group Call",
//     color: "green",
//     tcolor: "green",
//   },
//   {
//     title: "Colour Hack Practical Group Call",
//     description:
//       "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
//     mentorName: "Jane Doe",
//     image: "/asset/program2.png",
//     type: "Group Call",
//     color: "green",
//     tcolor: "green",
//   },
// ];

export default function Programs() {
  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <SectionHeader
        title="Programs"
        onClick={() => console.log("See all clicked")}
        showSeeAll
      />

      <FilterHeaderWithDropdown
        options={["Active", "Inactive", "All"]}
        onSelect={(value) => console.log("Selected:", value)}
      />

      <div className="flex flex-col gap-3 mt-6 md:h-[680px] h-full  md:overflow-y-auto md:[scrollbar-width:none] md:[-ms-overflow-style:none] [&::-webkit-scrollbar]:md:hidden">
        <FundamentalsCard />
        <ProgramCard2 txt={"Analysis"} />
        <ProgramCard2 txt={"Assign Mentor"} />
      </div>
    </section>
  );
}
