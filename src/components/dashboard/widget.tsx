import Image from "next/image";

function Widget() {
  return (
    <div className="flex justify-end items-center py-2 gap-x-4">
      <Image
        src="./frame1.svg"
        className=" object-cover "
        alt="user"
        width={24}
        height={18}
      />
      <Image
        src="./frame2.svg"
        className="object-cover "
        alt="user"
        width={32}
        height={32}
      />

      <p className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm md:text-base">
        Manage Widgets
      </p>
    </div>
  );
}

export default Widget;
