
import { Separator } from "@/components/ui/separator";
import ApplicationCard from "./ApplicationCard";
import Image from "next/image";

export const badgeStyles = {
  default:
    "px-2 py-0.1 cursor-pointer flex items-center justify-center rounded-[5.19px] font-medium bg-[#F4F4F4] text-[#9985A7] border-[0.8px] text-[8.65px] font-medium font-chivo leading-[22.84px] border-[#C8C8C8]",
  green:
    "px-2 py-0.1 cursor-pointer flex items-center justify-center rounded-[5.19px] text-[#58948E] font-chivo font-medium bg-[#E8FDFB] border-[0.8px] border-[#A1BDBA] text-[8.5px]",
  purple:
    "px-2 py-0.1 cursor-pointer flex items-center justify-center rounded-[5.19px] font-medium bg-[#DDCEEE] text-[#9985A7] border-[0.8px] text-[8.65px] font-medium font-chivo leading-[22.84px] border-[#DDCEEE]",
  blue:
    "px-2 py-0.1 cursor-pointer flex items-center justify-center rounded-[5.19px] font-medium bg-[#E3ECF9] text-[#8196B5] border-[0.8px] text-[8.65px] font-medium font-chivo leading-[22.84px] border-[#8196B5]",
  flag:
    "px-2 py-0.1 cursor-pointer flex items-center justify-center rounded-[5.19px] text-[8.5px] font-medium bg-[#E3ECF9] text-[#8196B5] border border-[#ABBEE0] flex items-center gap-1"
};

export const applications = [
  {
    type: "Mentors",
    list: [
      {
        id: 1,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        avatar: "/SVGs/max_smith.svg",
        info: [
          { label: "Product Designer", style: "purple" },
          { label: "4years Experience", style: "green" },
          {
            label: (
              <span className="flex items-center">
                <span className="mr-1">🇳🇬</span>
                Lagos, Nigeria
              </span>
            ),
            style: "flag"
          },
          { label: "GMT +1", style: "default" }
        ]
      }
    ]
  },
  {
    type: "Students",
    list: [
      {
        id: 2,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com",
        avatar:
          "/SVGs/adt_sam.svg",
        info: []
      },
      {
        id: 3,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        avatar: "/SVGs/max_smith.svg",
        info: []
      },
      {
        id: 4,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com",
        avatar:
          "/SVGs/adt_sam.svg",
        info: []
      },
      {
        id: 5,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        avatar: "/SVGs/max_smith.svg",
        info: []
      },
      {
        id: 6,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        avatar: "/SVGs/max_smith.svg",
        info: []
      },
      {
        id: 7,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com",
        avatar:
          "/SVGs/adt_sam.svg",
        info: []
      },
      {
        id: 8,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        avatar: "/SVGs/max_smith.svg",
        info: []
      }
    ]
  }
];

const Applications = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-xl p-4 shadow border">
      {/* Applications header */}
      <div className="flex justify-between items-center mb-4">
        <span className="flex gap-4 items-center">
          <Image src="/SVGs/mobile.svg" width={10} height={9} alt="mobile-icon" className="cursor-pointer" />
          <h2 className="text-[16px] font-chivo font-semibold text-[#B0B0B0]">Applications</h2>
        </span>
        <span className="flex gap-4 items-center">
          <div className="text-[#6F01D0] text-sm font-[600] font-chivo">See all</div>
          <Image src="/SVGs/seeAll.svg" width={2.25} height={13.5} alt="seeAll-icon" className="cursor-pointer" />
        </span>
      </div>
      {/* Section: Mentors */}
      <div className="h-[540px] overflow-y-scroll hide-scrollbar">
        {applications.map((section, idx) => (
          <div key={section.type}>
            <div className="text-[#7E69AB] text-xs font-semibold mb-3 mt-2">{section.type}</div>
            {section.list.map((u, i) => (
              <div key={u.id}>
                <ApplicationCard user={u} />
                {(i < section.list.length - 1 || idx < applications.length - 1) && <Separator />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
