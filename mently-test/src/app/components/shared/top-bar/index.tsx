import Image from 'next/image';

type TopBarProps = {
  onManageWidgets: () => void;
};

export default function TopBar({ onManageWidgets }: TopBarProps) {
  return (
    <div className="p-2 flex justify-end gap-4 items-center font-sans">
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center text-gray-600 p-1 hover:text-[#6F01D0] active:text-[#6F01D0] transition-colors"
          aria-label="Grid view"
        >
          <Image src="/view-mirrored.svg" alt="View" width={24} height={24} />
        </button>
        <button
          className="flex items-center justify-center text-gray-600 p-1 hover:text-[#6F01D0] active:text-[#6F01D0] transition-colors"
          aria-label="List view"
        >
          <Image src="/light_gallery.svg" alt="View" width={24} height={24} />
        </button>
      </div>
      <button
        onClick={onManageWidgets}
        className="text-[#1F0954] text-base font-bold hover:underline"
      >
        Manage Widgets
      </button>
    </div>
  );
}
