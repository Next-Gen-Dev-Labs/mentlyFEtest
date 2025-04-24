import Image from 'next/image';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiAlignJustify } from 'react-icons/fi';

type SectionCardProps = {
  title: string;
  seeAllRoute: string;
  addButton?: boolean;
  onMenuClick: () => void;
  children: React.ReactNode;
};

export default function SectionCard({
  title,
  seeAllRoute,
  onMenuClick,
  addButton = false,
  children,
}: SectionCardProps) {
  return (
    <div className="space-y-4 bg-white p-2 md:p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <FiAlignJustify size={22} className="text-gray-600" />
          <h2 className="text-base font-bold text-[#B0B0B0] font-sans">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {!addButton && (
            <Link
              href={seeAllRoute}
              className="text-[#6F01D0] font-bold text-sm hover:underline"
              aria-label={`See all ${title}`}
            >
              See all
            </Link>
          )}
          {addButton && (
            <button
              onClick={onMenuClick}
              className="text-black p-1 hover:text-primary transition-colors"
              aria-label={`Add item to ${title}`}
            >
              <Image src="/add.svg" alt="Add" width={20} height={20} />
            </button>
          )}
          <button
            onClick={onMenuClick}
            className="text-black p-1 hover:text-primary transition-colors"
            aria-label={`Menu for ${title}`}
          >
            <BsThreeDotsVertical size={16} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
