import { WidgetCard } from "~/_components/ui";
import { WidgetProgramCard } from "~/_components/ui/widgets";
import { ChevronIcon } from "~/assets/icons";

type WidgetProgramCardProps = {
  image: string;
  program: "bootcamp" | "group call";
  title: string;
  hostedBy: string;
  hostImages: Array<string>;
  description: string;
};

const programs: Array<WidgetProgramCardProps> = [
  {
    title: "Fundamentals of User interface & Experience",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    program: "bootcamp",
    hostedBy: "Mentors",
    hostImages: [
      "/images/person-1.png",
      "/images/person-2.jpg",
      "/images/person-2.jpg",
    ],
    image: "/images/program-1.jpg",
  },
  {
    title: "Colour Hack Practical Group Call",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    program: "group call",
    hostedBy: "Hosted By: Faith Okolo",
    hostImages: ["/images/person-1.png"],
    image: "/images/call-1.png",
  },
  {
    title: "Colour Hack Practical Group Call",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    program: "group call",
    hostedBy: "Hosted By: Self",
    hostImages: ["/images/person-1.png"],
    image: "/images/call-1.png",
  },
];

export const ProgramsWidget = () => {
  return (
    <WidgetCard title="Programs" className="h-auto">
      <div className="w-full flex flex-col items-end gap-2 p-4">
        <div className="flex items-center gap-3">
          <p className="text-[#918C9C] text-xs font-medium">Filter</p>
          <div className="flex items-center border border-grey-200 rounded py-1.5 px-2.5 justify-between w-20 h-6">
            <p className="text-font font-medium text-xs">Active</p>
            <ChevronIcon className="text-font size-2.5" />
          </div>
        </div>
        {programs.map((program, index) => (
          <WidgetProgramCard key={index} {...program} />
        ))}
      </div>
    </WidgetCard>
  );
};
