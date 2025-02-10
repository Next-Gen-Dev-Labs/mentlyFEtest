import Image from "next/image";
import { BellIcon, MenuIcon } from "lucide-react";

type MainNavProps = {
  onMenuClick: () => void;
};

export default function MainNav({ onMenuClick }: MainNavProps) {
  return (
    <div className="flex py-5 items-center justify-end max-sm:justify-between max-sm:px-4 border-b">
      <button
        type="button"
        onClick={onMenuClick}
        className="md:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
      >
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">menu icon</span>
      </button>
      <div className="flex items-center gap-11 pr-[152px] max-sm:pr-0">
        <button
          type="button"
          className="p-2 text-gray-600 hover:text-gray-900  relative"
        >
          <BellIcon className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <span className="block w-2 h-2 bg-profile-color-4 rounded-full absolute top-1 right-3"></span>
        </button>

        <div className="flex items-center space-x-2">
          <Image
            src="/profile-image.png"
            alt="Profile"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="hidden sm:block text-sm">
            <p className="text-profile-color-1">Godwin Jimmy</p>
            <p className="text-gray-500 flex items-center gap-2">
              <span className="text-xs text-primary-color-3">Free Plan</span>
              <span className="text-link-color">Upgrade</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
