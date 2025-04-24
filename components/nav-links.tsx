import Link from "next/link";
import Image from "next/image";

interface LinkOptions {
  link: string;
  icon: string;
  description: string;
  active: boolean;
}

export default function Navlink({
  link,
  icon,
  description,
  active,
}: LinkOptions) {
  return (
    <Link
      href={link}
      className={`${
        active ? "bg-white text-[#340260]" : "text-white"
      } text-lg font-semibold py-3 my-1 w-full flex pl-4 gap-x-4 rounded-lg hover:bg-white hover:text-[#340260]`}
    >
      <Image
        src={`/icons/${icon}`}
        alt={`${description} Button`}
        width={20}
        height={20}
      />
      {description}
    </Link>
  );
}
