import { IoMenu } from 'react-icons/io5';
import { PiBell } from 'react-icons/pi';
import UserCard from '@/app/components/shared/user-card';

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <div className="flex items-center justify-between p-2 text-gray-900  md:bg-white">
      <div className="items-center hidden gap-3 xl:flex"></div>
      <div className="items-center text-black justify-between hidden gap-5 px-6 xl:flex">
        <PiBell size={24} />
        <UserCard
          name="Techrity Foundation International"
          role="Member"
          logoSrc="/images/logo-random.png"
        />
      </div>
      <div className="xl:hidden text-gray-800 font-semibold text-lg" />
      <div className="z-50 flex  items-center gap-5 xl:hidden">
        <IoMenu size={28} onClick={onMenuClick} />
      </div>
    </div>
  );
};

export default Header;
