import React from "react";
import { FileText, Users, Phone, Briefcase, Clock, Laptop } from "lucide-react";

const data = [
  { text: "Content", icon: FileText },
  { text: "Content", icon: Briefcase },
  { text: "Content", icon: Users },
  { text: "Content", icon: Clock },
  { text: "Content", icon: Phone },
  { text: "Content", icon: Laptop },
];

const Infocard = ({ variant = "list" }: { variant?: "list" | "grid" }) => {
  return (
    <div className="bg-[#fdfaf2] p-5 rounded-lg border border-[#fef1d8] w text-[#1c0d4f]">
      <h3 className="font-bold mb-2">Program Information Text {variant === "list" ? "2" : ""}</h3>
      
      {variant === "list" ? (
        <ul className="list-disc pl-5 space-y-2 flex flex-col gap-1">
          {data.map((item, index) => (
            <li key={index} className="text-sm">{item.text}</li>
          ))}
        </ul>
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-2">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="bg-[#fef1d8] p-2 rounded-full text-[#1c0d4f]">
                  <Icon size={16} />
                </span>
                {item.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Infocard;
