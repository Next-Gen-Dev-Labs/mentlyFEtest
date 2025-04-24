import Image from "next/image";

interface ProgramCardProps {
  topImage: string;
  description: string;
  smallText: string;
  hostImage: string;
}

export default function ProgramCard({
  topImage,
  description,
  hostImage,
  smallText,
}: ProgramCardProps) {
  return (
    <div className="shadow-md p-3 gap-y-3">
      <img src={topImage} alt={description} className=""  />
      <p>{description}</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={hostImage} alt={description} /> {smallText}
        </div>
        <div className="flex flex-row gap-2 items-center font-semibold">
          <button className="cursor-pointer px-4 py-2 font-sm border-[#6F01D0]">
            View Details
          </button>
          <button className="cursor-pointer px-4 py-2 font-sm bg-[#6F01D0] text-white"></button>
        </div>
      </div>
    </div>
  );
}
