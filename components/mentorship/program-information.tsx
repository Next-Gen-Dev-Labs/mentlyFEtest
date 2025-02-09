import { Icons } from "@/constants/icons";
import { Card } from "../ui/custom-card";

const programInfoData = [
  { icon: Icons.pro_icon1, content: "Content" },
  { icon: Icons.pro_icon2, content: "Content" },
  { icon: Icons.pro_icon3, content: "Content" },
  { icon: Icons.pro_icon4, content: "Content" },
  { icon: Icons.pro_icon5, content: "Content" },
  { icon: Icons.pro_icon6, content: "Content" },
];

export const ProgramInformation = () => {
  return (
    <div className="space-y-6">
      <Card className="rounded-2xl border border-[#FEE0B1] bg-[#FFECCC]/30 shadow-transparent">
        <h2 className="mb-6 text-xl font-semibold text-primary">
          Program Information Text
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {programInfoData.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-600">
              <item.icon />
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="rounded-2xl border border-[#FEE0B1] bg-[#FFECCC]/30 shadow-transparent">
        <h2 className="mb-6 text-xl font-semibold text-primary">
          Program Information Text 2
        </h2>
        <ul className="list-disc space-y-3 pl-6">
          {programInfoData.map((item, index) => (
            <li className="font-semibold text-gray-600" key={index}>
              {item.content}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
