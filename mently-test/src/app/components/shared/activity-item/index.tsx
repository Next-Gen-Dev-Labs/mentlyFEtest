import Image from 'next/image';

type ActivityItemProps = {
  title: string;
  description: string;
  time: string;
};

export default function ActivityItem({
  title,
  description,
  time,
}: ActivityItemProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 font-chivo">
      <Image
        src="/images/avatar-placeholder.png"
        alt={title}
        width={32}
        height={32}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
      />
      <div className="flex flex-col">
        <h4 className="text-sm sm:text-base text-[#011627] font-bold">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-[#707991]">{description}</p>
        <p className="text-xs sm:text-sm text-[#707991]">{time}</p>
      </div>
    </div>
  );
}
