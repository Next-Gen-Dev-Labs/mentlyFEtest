import menu from "@/assets/menu.png";
import dots from "@/assets/menu-dots-icon.png";
import plus from "@/assets/plus-icon.png";
import Image from "next/image";
interface CardMenuItemsProps {
  title: string;
  isAdd?: boolean;
  seeAll?: boolean;
}

const CardMenuItem = ({ title, isAdd = false, seeAll }: CardMenuItemsProps) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-3 text-[#B0B0B0] text-base font-bold">
        <Image
          src={menu}
          alt="icon"
          width={20}
          height={20}
          className="pt-1 cursor-pointer"
        />
        <p>{title}</p>
      </div>
      <div className="flex items-center gap-2 text-primary text-xs font-semibold">
        {seeAll && <p>See all</p>}

        {isAdd && (
          <Image
            src={plus}
            alt="icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
        <Image
          src={dots}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CardMenuItem;
