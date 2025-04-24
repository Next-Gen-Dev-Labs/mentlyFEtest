import Image from "next/image";

type ActivityCardProps = {
  userImage: string;
  activity: string;
  title: string;
  time: string;
};
export const ActivityCard = ({
  userImage,
  activity,
  title,
  time,
}: ActivityCardProps) => {
  return (
    <div className="w-full flex items-start gap-2 border-b border-[#F1EFEF] py-1">
      <Image
        src={userImage}
        alt={"user"}
        width={32}
        height={32}
        loading="lazy"
        className="rounded-full object-center object-cover"
      />
      <div className="flex flex-1 flex-col items-start gap-2">
        <p className="text-rich-black text-sm/4">{title}</p>
        <p className="text-navy-grey text-xs -mt-0.5">{activity}</p>
        <p className="text-navy-grey text-xs/5 font-light">{time}</p>
      </div>
    </div>
  );
};
